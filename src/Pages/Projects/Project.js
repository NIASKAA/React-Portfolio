import React from 'react'
import {useHistory} from 'react-router-dom'
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import "./styles.css"

const Projects = () => {
    let history = useHistory();
    const discord = () =>{
        history.push('/projects/discordbot')
    }
    const nutri = () =>{
        history.push('/projects/nutricalifide')
    }
    const ramen = () =>{
        history.push('/projects/ramenshop')
    }
    const plugselect = () =>{
        history.push('/projects/plugselect')
    }
    const blog = () =>{
        history.push('/projects/techblog')
    }
    const amiibo = () =>{
        history.push('/projects/amiibo')
    }
    const plugv2 = () =>{
        history.push('/projects/plugselectv2')
    }

    const premium = () => {
        history.push('/projects/premiumbandai')
    }

    const native = () => {
        history.push('/projects/premiumnative')
    }

    const cardStyle = {
        width: "18rem"
    };

    const imgStyle = {
        width: "18rem"
    };

    return (
        <>
            <header className="projectImage">
                <Container className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mainText">
                                <h1>Projects</h1>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            <section class="display">
                <Row class="row">
                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                            <Card.Img src="/img/discordbot.png" class="card-img-top" alt="Discord Bot" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Discord Bot V3</Card.Title>
                                <Button onClick={discord} id="discord" bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/gunpla.png" class="card-img-top" alt="Premium-Bandai Gunpla Finder" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Premium Gunpla Finder</Card.Title>
                                <Button onClick={premium} id="nutricalifide" bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/newLogo.png" class="card-img-top" alt="PlugSelect" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>The Plug Select</Card.Title>
                                <Button onClick={plugselect} bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row class="row align-items-center">
                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/newLogo.png" class="card-img-top" alt="Ramen Shop" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Plug Select V2</Card.Title>
                                <Button onClick={plugv2} bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/logo.jpeg" class="card-img-top" alt="Nutricalifide" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Nutricalifide</Card.Title>
                                <Button onClick={nutri} id="nutricalifide" bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/gunpla.png" class="card-img-top" alt="Gunpla Finder Mobile" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Gunpla Finder Mobile</Card.Title>
                                <Button onClick={native} bsPrefix="projectBtn"><span>Quick Peak?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row class="row align-items-center">
                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/blog.jpeg" class="card-img-top" alt="Tech Blog" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Your Tech Blog</Card.Title>
                                <Button onClick={blog} bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col> 

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/tonkotsu.jpg" class="card-img-top" alt="Ramen Shop" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Ramen Shop</Card.Title>
                                <Button onClick={ramen} bsPrefix="projectBtn"><span>Take a look?</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col">
                        <Card className="projectCards" style={cardStyle}>
                        <Card.Img src="/img/amiibo.png" class="card-img-top" alt="Amiibo" style={imgStyle}/>
                            <Card.Body>
                                <Card.Title>Amiibo Search Engine</Card.Title>
                                <Button onClick={amiibo} bsPrefix="projectBtn"><span>Take a look?</span></Button>   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row class="row align-items-center">
                    <Col class="col">
                        <Card>
                        <Card.Img>
                            <Card.Body>
                                <Card.Title>Gundam API</Card.Title>
                                <Button bsPrefix="projectBtn"><span>Work In Progress~</span></Button>
                            </Card.Body>
                        </Card.Img>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Projects
