import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import "./styles.css"

const About = () => {

    const imgStyle = {
        width: "20%",
        float: 'right',
    }

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
                    <Col>
                        <Row>
                            <article class="aboutIntro">
                                <h3 class="introTitle">Quick Infos</h3>
                                    <Image className="myImage" src="/img/me.jpg" style={imgStyle}/>
                                    <div class="introContent">
                                        I'm Alan also go by NIASKA. Currently a full-stack developer that recently graduated from Rice University Bootcamp. My passion for coding goes back to my roots of creating art but in a form of a model.
                                        I've been building Gunpla all my life and my love to create detailed things is why I'm able to make my piece in this world. My mission is to create applications that
                                        serves the user with an engaging experience with refreshing designs. When I'm not coding, you will definitely 
                                        find me building Gunpla or work on my car. Hope you enjoy my work!
                                    </div>
                            </article>
                        </Row>
                    </Col>
                    
                    
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
                        stems from viewing the world at a different angle. Honing my skills everyday with projects which require to give a more intuitive user experience in my websites. Ability to leverage between different languages (HTML5, Javascript, React.Js) with different frameworks. (CSS, Bootstrap, Bulma, React-Bootstrap and Material UI)  
                        Currently learning to apply meaningful server-side applications with known knowledge of MongoDB, MySql, and Node.Js. 
                        With several successful projects among my colleagues,  I learned to lead, provide quick and appropriate solutions, 
                        and effectively communicate among team members to reach the deadline among each project where they reached their initial stage of planning. 
                        Looking to bring my technical skills to help and adapt to create a better foundation to a company and become an important asset to the community.

                    </div>
                    </article>
            </section>
        </>
    )
}

export default About
