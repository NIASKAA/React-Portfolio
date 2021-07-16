import React from 'react'
import './styles.css'
import { Form, Button} from 'react-bootstrap';
const Contact = () => {
    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="btnGroup">
                <ul>
                <li>
                    <a href="https://www.linkedin.com/in/alan-man-518156205/"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://github.com/NIASKAA"><i class="fab fa-github"></i></a>
                </li>
                <li>
                    <a href="/public/Resume.pdf" download rel="noopener noreferrer" target="_blank">Resume</a>
                </li>
                </ul>
            </div>
            
            <Form className="contact-form">
                <Form.Group className="mb-3" controlId="nameInput">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder='Name...'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="example@example.com..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" class="btn submitBtn" id="sendIt">Send It</Button>
            </Form>
        </>
    )
}

export default Contact
