import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import './styles.css'
import Pic1 from '../../../img/plugv2-1.png'
import Pic2 from '../../../img/plugv2-2.png'

const PlugSelectV2 = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/true-plug-select"
    }

     const linkTo = () => {
        window.location.href="https://theplugselect.herokuapp.com/"
    }
    const imgStyle = {
        width: "80%"
    }
    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>The Plug Select V2</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">Let's Change it Up</h2>
                    <p class="content">
                    If you didn't take a look at our original version, I suggest you to do as this is a refactored website. The Plug Select has matured!
                    We created a style that is now unique to us and make us who we are. With better technologies used to help serve our clients in their
                    purchases. 
                    </p>
                    <p class="content">Tech Usage: React.Js, React Bootstrap, MongoDb, Cloudinary, Graphql, Apollo Server Express, Axios, jwt Token, mongoose, bcrypt</p>
                    <Row>
                        <Col>
                            <Button onClick={redirect} bsPrefix="githubBtn"><span>Take a look?</span></Button>
                        </Col>
                        <Col>
                            <Button onClick={linkTo} bsPrefix="githubBtn"><span>Link to Web</span></Button>
                        </Col>
                    </Row>
                </article>
            </section>

            <section class="demoPics text-center">
                <Row class="row">
                    <Col class="col">
                    <img src={Pic1} class="rounded" style={imgStyle} alt="theplugselect"/>
                    </Col>
                    <Col class="col">
                    <img src={Pic2} class="rounded" style={imgStyle} alt="theplugselect"/>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default PlugSelectV2
