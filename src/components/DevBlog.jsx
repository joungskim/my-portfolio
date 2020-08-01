import React, { useState } from 'react';


const DevBlog = ({devblog}) => { 
    const {
        date,
        id,
        project,
        notes,
    } = devblog;

    return (
        <div className='ba b--black-10 shadow-5 bg-white-90 ma3 pa3'>
            <h3>{'Dev-Blog #'} {id} </h3> 
            <p className='fw1'>{date}</p>
            <p><strong>{'Project: '} {project} </strong></p>
            {
                notes.map((note) => {
                    return (
                        <p>{note}</p>
                    )
                })
            }
        </div>
    )
    
}

export default DevBlog;