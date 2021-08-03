import React, {useState} from 'react'
import './styles.css'
import {send} from 'emailjs-com'
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
const Contact = () => {
    const [toSend, setToSend] = useState({
        fromName: '',
        replyTo: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send('service_fwnoj3b', 'template_j66lou7', toSend, 'user_7VsQOjvdMWICsgKL3qCvS')
        .then((response) => {
            console.log('Success!', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }
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

    
                <Container>
                    <Row>
                        <Col>
                            <h5 className="contactInfo">Email: mkman751@yahoo.com</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn" href="https://www.linkedin.com/in/alan-man-518156205/">LinkedIn</Button>
                            <Button className="btn" href="https://github.com/NIASKAA">Github</Button>
                            <Button className="btn" href='Resume.pdf' download rel="noopener noreferrer" target="_blank">Resume</Button>
                        </Col>
                    </Row>
                </Container>

            
            <Form onSubmit={onSubmit} className="contact-form">
                <Form.Group className="mb-3 name" controlId="nameInput">
                    <Form.Label className="title">Name</Form.Label>
                    <Form.Control onChange={handleChange} type="name" name="fromName" value={toSend.fromName} placeholder='name...'/>
                </Form.Group>
                <Form.Group className="mb-3 email" controlId="emailInput">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email"name="replyTo"value={toSend.replyTo} placeholder="example@example.com..." />
                </Form.Group>
                <Form.Group className="mb-3 message" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="title">Message</Form.Label>
                    <Form.Control onChange={handleChange} value={toSend.message} name="message" as="textarea" rows={3} placeholder="message..."/>
                </Form.Group>
                <Button type="submit" bsPrefix="submitBtn" id="sendIt">Send It!</Button>
            </Form>
        </>
    )
}

export default Contact
