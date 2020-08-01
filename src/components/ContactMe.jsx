import React from 'react';
import Card from 'react-bootstrap/Card'


const ContactMe = ({ name, email }) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <img 
                                src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/40679802_10105199269589031_6255792958100996096_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=ZGH6yiRIL9oAX-pMiKC&_nc_ht=scontent-dfw5-2.xx&oh=a6d330037d74dee71797e70422cae5dd&oe=5F4C9492'
                                className='br3'
                            />
                        </div>
                        <div class="col-md-6">
                            <address className='v-mid h-mid'>
                                <h1>
                                    <strong>
                                        {name}
                                    </strong>
                                    <br /> 
                                    {email}
                                </h1>
                            </address>
                            <p>{'In Development: Implementing Form with E-Mail transactions that will allow users to email me directly through this web application. See Dev Blog for more details.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactMe;