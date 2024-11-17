import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title"></h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.instutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title"></h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2023 - present
                        </p>
                        <h3 className="card-text2">BTech in Information Technology</h3>
                        <p className="card-text3">MLR Institute of Technology</p>
                        <p className="card-text4">
                            CGPA: 8.3
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2020-2023
                        </p>
                        <h3 className="card-text2">Diploma in Embedded Systems</h3>
                        <p className="card-text3">Government Institute of Electronics</p>
                        <p className="card-text4">
                            CGPA: 9.6
                        </p>
                    </div>
                    {/* card3 */}
                    
                </div>
            </div>
        </section>
    )
}

export default Experience
