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
                    <Button className="btn" href="https://www.linkedin.com/in/alan-man-518156205/">LinkedIn</Button>
                </li>
                <li>
                    <Button className="btn" href="https://github.com/NIASKAA">Github</Button>
                </li>
                <li>
                    <Button className="btn" href="/public/Resume.pdf" download rel="noopener noreferrer" target="_blank">Resume</Button>
                </li>
                </ul>
            </div>
            
            <Form className="contact-form">
                <Form.Group className="mb-3 name" controlId="nameInput">
                    <Form.Label className="title">Name</Form.Label>
                    <Form.Control type="name" placeholder='name...'/>
                </Form.Group>
                <Form.Group className="mb-3 email" controlId="emailInput">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control type="email" placeholder="example@example.com..." />
                </Form.Group>
                <Form.Group className="mb-3 message" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="title">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="message..."/>
                </Form.Group>
                <Button type="submit" class="btn submitBtn" id="sendIt">Send It</Button>
            </Form>
        </>
    )
}

export default Contact
