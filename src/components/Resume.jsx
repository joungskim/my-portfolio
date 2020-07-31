import React from 'react';

const Resume = ({ResumeData}) => {
    const {
        name,
        image,
        phone,
        email,
        objective,
        github,
        experience,
        technologies,
        skills,
        education,
        other,
        citizenship,
    } = ResumeData
    console.log(name);
    return (
        <div className="br3 ba b--black-10 shadow-5 bg-white-90">
            <h1 className="tl pa3">{name}</h1>
            <img src={image} />
            <h3>{'Career Objective: '}</h3>
            <p>{objective}</p>
            <p>{github}</p>
        </div>
    )
}

export default Resume;