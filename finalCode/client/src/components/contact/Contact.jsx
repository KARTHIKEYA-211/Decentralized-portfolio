import { useState, useEffect } from "react";
import './Contact.css';

const Contact = ({ state }) => {
    const [resume, setResume] = useState("");

    useEffect(() => {
        // Manually set the resume URL (could be a local file or external URL)
        const manualResumeLink = "./resume k.docx"; // Replace with your URL or path
        setResume(manualResumeLink);
    }, [state]);

    return (
        <section className="contact-section">
            <h1 className="title">
                Interested? Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>
        </section>
    );
};

export default Contact;
