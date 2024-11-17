import React, { useState } from 'react';
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import "./Projects.css";

const Projects = ({ state }) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([
        {
            name: "Euphoria",
            description: "e-commerce website",
            githubLink: "https://github.com/KARTHIKEYA-211/Euphoria", // Full GitHub link
            image: "./euphoria.png"
        },
        {
            name: "enCrypto",
            description: "Crypto website",
            githubLink: "https://github.com/KARTHIKEYA-211/enCrypto", // Full GitHub link
            image: "./bull.png"
        }
        
    ]);

    const donateEth = async (event) => {
        event.preventDefault();
        try {
            const { contract, web3 } = state;
            const eth = document.querySelector("#eth").value;
            const weiValue = web3.utils.toWei(eth, "ether");
            const accounts = await web3.eth.getAccounts();
            await contract.methods.donate().send({ from: accounts[0], value: weiValue, gas: 480000 });
            alert("Transaction Successful");
        } catch (error) {
            alert("Transaction Not Successful");
        }
    };

    return (
        <section className="project-section">
            <h1 className="title">Projects</h1>
            <div className="card-wrapper">
                {projects.length > 0 && projects.map((project, index) => {
                    return (
                        <a key={index} href={project.githubLink} className="project-card" target='_blank' rel="noopener noreferrer">
                            <div className="card-img">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="card-text">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* =========Popup Bootstrap========== */}
            <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Enter the ETH you want to donate!
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={donateEth}>
                        <Row>
                            <input id="eth" type="text" />
                            <Button className='mt-4'>
                                Send
                            </Button>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
            {/* =========Popup Bootstrap End========== */}

            <p className='donate' onClick={() => setModal(true)}>
                Liked the project? Consider donating ETH <FaDonate className='icon' />
            </p>
        </section>
    );
};

export default Projects;
