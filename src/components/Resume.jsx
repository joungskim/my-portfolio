import React from 'react';
import MeImg from "../Me.PNG";
import Experience from './Experience';
import {Tab, Tabs} from 'react-bootstrap'


function Resume({ ResumeData }) {
    const {
        name,
        image,
        phone,
        email,
        objective,
        github,
        experience,
        skills,
        linkedin,
        instagram,
        devNotes,
    } = ResumeData;

    console.log(skills);

    return (
        <div className="container-fluid br3 ba b--black-10 shadow-5 bg-white-90 tl pa3">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 br3 ba b--black-10 shadow-5 bg-white-90 ma3 pa3">
                            <h1 className="tl">{name}</h1>
                            <p className="v-mid">{objective}</p>
                            {
                                devNotes.map((notes) => {
                                    return (
                                        <p className='fw1'>
                                            <i>
                                                {notes}
                                            </i>
                                        </p>
                                    )
                                })

                            }
                        </div>
                        <div className="center col-md-2 br3 ba b--black-10 shadow-5 bg-white-90 ma3 pa3 s">
                            <h3 className="text-center">
                                <strong>
                                    {'Media Links'}
                                </strong>
                            </h3>
                            <ul>
                                <li>
                                    <a href={github} target='blank'>
                                        {'Github'}
                                    </a>
                                </li>
                                <li>
                                    <a href={linkedin} target='blank'>
                                        {'LinkedIn'}
                                    </a>
                                </li>
                                <li>
                                    <a href={instagram} target='blank'>
                                        {'Instagram'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="center col-md-3 br3 ba b--black-10 shadow-5 bg-white-90 ma3 pa3">
                            <img className="br3" src={MeImg}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 br3 ba b--black-10 shadow-5 bg-white-90 ma3 pa3">
                            <h3>
                                <strong>
                                    Experience
                                </strong>
                            </h3>
                            {
                                experience.map((exp) => {
                                    return (
                                        <Experience exp={exp} />
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-5 br3 ba b--black-10 shadow-5 bg-white-90 ma3 pa3">
                        <Tabs defaultActiveKey={skills[0].title} transition={false} id="noanim-tab-example">
                            {
                                skills.map((skill) => {
                                    return (
                                        <Tab eventKey={skill.title} title={skill.title}>
                                            <ul>
                                                {
                                                    skill.context.map((ctx) => {
                                                        return(
                                                            <li>{ctx}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </Tab>
                                    )
                                })
                            }
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;