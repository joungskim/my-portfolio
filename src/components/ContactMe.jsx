import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import './ContactMe.css'


import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactMe extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        message: '',
        subject: ''
    }

    handleSubmit(e) {
        e.preventDefault()

        const {
            name,
            email,
            number,
            message,
            subject
        } = this.state

        const { onRouteChange } = this.props;

        const {
            userid,
            templateid,
            serviceid,
        } = this.props.apiData;

        let template_params = {
            email: email,
            name: name,
            contact_number: number,
            message: message,
            subject: subject
        }

        emailjs.send(
            serviceid,
            templateid,
            template_params,
            userid
        ).then((result) => {
            console.log(result)
            this.resetForm();
            onRouteChange('PostContactMe');
        }, (error) => {
            console.log("Sending Email Failed, post banner message: " + {error});
        });
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            number: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    }
    render() {
        return (
            <div>
                <h1 className="p-heading1">{'Contact Me'}</h1>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicEmail">
                        <Label className="text-muted">Your Email Address</Label>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="Enter email"
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="text-muted">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicSubject">
                        <Label className="text-muted">Subject</Label>
                        <Input
                            type="text"
                            name="subject"
                            className="text-primary"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            placeholder="Subject"
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicNumber">
                        <Label className="text-muted">Phone Number (Optional)</Label>
                        <Input
                            type="text"
                            name="number"
                            className="text-primary"
                            value={this.state.number}
                            onChange={this.handleChange.bind(this, 'number')}
                            placeholder="Phone Number"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                        <Label className="text-muted">Message</Label>
                        <Input
                            type="textarea"
                            name="message"
                            className="text-primary input-textarea"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                            required
                        />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
            </div>
        )
    }
}
export default ContactMe