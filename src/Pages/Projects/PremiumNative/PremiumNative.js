import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import './styles.css'

const PremiumNative = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/premiumnative"
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
                                <h1>Premium-Bandai Gunpla Finder (Mobile Version)</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">Keep Track of Gunpla... But On Your Phone</h2>
                    <p class="content">
                        Now this idea of converting my web application came solely cause of wanting to make it more mobile for users who
                        just don't like using the web that much. 
                    </p>
                    <p class="content">Tech Usage: React.Js, React-Native, MongoDb, Graphql, Apollo Server Express, jwt Token, mongoose, bcrypt</p>
                    <Row>
                        <Col>
                            <Button onClick={redirect} bsPrefix="githubBtn"><span>Take a look?</span></Button>
                        </Col>
                    </Row>
                </article>
            </section>

            <section class="demoPics text-center">
                <Row class="row">
                    <Col class="col">
                    <img src="/img/native1.png" class="rounded" style={imgStyle} alt="premiumnative"/>
                    </Col>
                    <Col class="col">
                    <img src="/img/native2.png" class="rounded" style={imgStyle} alt="premiumnative"/>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default PremiumNative
