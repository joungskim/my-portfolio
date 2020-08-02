import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

//TODO: Fix animations on collapse to be smoother. 
const Experience = (exp, key) => {
    const {
        company,
        date,
        description,
        duties,
        img,
        location,
        title,
        type
    } = exp.exp;

    const [open, setOpen] = useState(false);

    return (
        <div id={key} className="ma2 br3 ba b--black-10 shadow-5 bg-white-90">
            <div className="card">
                <div
                    className="card-header pointer"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                >
                    <strong>{company}</strong> 
                    {' - '}
                    <i>{date}</i> 
                    {' - '}
                    {title}
                    {' - '}
                    {type}
                </div>
                <Collapse in={open}>
                    <div className="card-body collapse">
                        <b>{'Location: '} {location}</b>
                        <br/>
                        <i>{description}</i>
                        <br/>
                        <ul>
                            {
                                duties.map((duty) => {
                                    return (
                                        <li>{duty}</li>
                                    )
                                })
                                
                            }
                        </ul>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Experience;