import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import "./styles.css"

const About = () => {
    return (
        <>
            <header className="aboutImage">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mainText">
                                <h1>About Me</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="aboutInfo">
                <Container className="aboutContainer">
                    <article class="aboutIntro">
                        <h3 class="introTitle">Quick Infos</h3>
                            <div class="introContent">
                                I'm Alan also go by NIASKA. Currently a full-stack developer. My passion for coding goes back to my roots of creating art but in a form of a model.
                                I've been building Gunpla all my life and my love to create detailed things is why I'm able to make my piece in this world. When I'm not coding, you will definitely 
                                find me building Gunpla or work on my car. Hope you enjoy my work!
                            </div>
                    </article>
                </Container>
            </section>

            <section className="aboutImage2">
                <Container className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7"></div>
                    </div>
                </Container>
            </section>

            <section className="aboutInfo">
                    <article className="aboutSkills">
                    <h3 className="skillTitle">Skills</h3>
                    <div className="skillsContent">
                        I believe that it takes one to understand art to create art. Thus, my ability to create prototype application 
                        stems from viewing the world at a different angle. The ability to lead my team under my vision or to help someone 
                        achieve their mindset is what I want to do. With several projects under my belt, I would love to learn and understand 
                        what everyone's environment is like.
                    </div>
                    </article>
            </section>
        </>
    )
}

export default About
