import React, { useState } from 'react';


const Projects = ({project}) => { 
    const {
        name,
        url,
        description,
        features,
        status,
        stack
    } = project;

    return (
        <div className='ba b--black-10 shadow-5 bg-white-90 ma3 pa3'>
            <h3>
                <a href={url} target='blank'> 
                    {'Project: '} {name} {' '}
                    <img src='https://image.flaticon.com/icons/svg/37/37819.svg' width="25px" height="auto"/> 
                </a>
            </h3> 
            <p className='fw1'>{'Description: '} {description}</p>
            <p className='fw1'>{'Features: '} {features}</p>
            <p className='fw1'>{'Status: '} {status}</p>
            <p className='fw1'>{'Stack: '} {stack}</p>
        </div>
    )
    
}

export default Projects;