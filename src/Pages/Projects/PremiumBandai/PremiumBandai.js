import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import './styles.css'

const PremiumBandai = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/premiumbandai"
    }

     const linkTo = () => {
        window.location.href="https://premiumbandaitracker.herokuapp.com/"
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
                                <h1>Premium-Bandai Gunpla Finder</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">Too much to keep track off? No problem.</h2>
                    <p class="content">
                    This project was pitched by my partner. THe idea was that since there are so many exclusives Gunpla in the world,
                    it was getting hard to keep track of what I have and what I want. So to solve this, I created an application that 
                    allows users to see all Premium-Bandai's Gunpla and logged that into the database for each person. A mobile version that 
                    uses react-native is currently being develop.
                    </p>
                    <p class="content">Tech Usage: React.Js, React Bootstrap, MongoDb, Graphql, Apollo Server Express, jwt Token, mongoose, bcrypt</p>
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
                    <img src="/img/prem1.png" class="rounded" style={imgStyle} alt="premiumbandai"/>
                    </Col>
                    <Col class="col">
                    <img src="/img/prem2.png" class="rounded" style={imgStyle} alt="premiumbandai"/>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default PremiumBandai
