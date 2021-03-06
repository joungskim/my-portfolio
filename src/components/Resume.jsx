import React from 'react';
import MeImg from "../Me.PNG";
import Experience from './Experience';
import { Tab, Tabs } from 'react-bootstrap'


function Resume({ ResumeData }) {
    const {
        name,
        objective,
        github,
        experience,
        skills,
        linkedin,
        instagram,
        devNotes,
        image
    } = ResumeData;

    //ba b--black-10 shadow-5 bg-white-90 ma3 pa3
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 ma3">
                    <div className="row">
                        <div className="col-md-7">
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
                        <div className="center col-md-3 ">
                            <img className="br3" src={image}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-11 ma3">
                            <Tabs defaultActiveKey='Experience'transition={false} id="noanim-tab-example">
                                <Tab eventKey='Experience' title='Experience'>
                                    {
                                        experience.map((exp) => {
                                            return (
                                                <Experience exp={exp} />
                                            )
                                        })
                                    }
                                </Tab>
                                {
                                    skills.map((skill) => {
                                        return (
                                            <Tab eventKey={skill.title} title={skill.title}>
                                                <ul>
                                                    {
                                                        skill.context.map((ctx) => {
                                                            return (
                                                                <li>{ctx}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </Tab>
                                        )
                                    })
                                }
                                {/*TODO redo this to generate links from props as an array.*/}
                                <tab eventKey={'Links'} title={'Links'}>
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
                                </tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;