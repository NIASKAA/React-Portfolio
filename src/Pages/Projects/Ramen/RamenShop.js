import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './styles.css'

const RamenShop = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/Ramen-Shop"
    }

    const linkTo = () => {
        window.location.href="https://niaskaa.github.io/Ramen-Shop/"
    }

    const toReact = () => {
        window.location.href="https://react-ramen.herokuapp.com/"
    }

    const toReactGithub = () => {
        window.location.href="https://github.com/NIASKAA/react-ramen"
    }
    
    const imgStyle = {
        width: "80%",
        height: "95%",
        margin: '2%',
        boxShadow: "1px 1px 1px grey"
    }
    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>Ramen Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section class="projectSection">
            <article class="body">
                <h2 class="proTitle">In another Universe...</h2>
                <p class="content">
                What happens when let's say in another universe where I'm not a full-stack developer? Well, I would definitely own a ramen shop. So it would only be right to make this fake 
                website containing all the delicious ramen I can offer right? I took a lot of inspiration from all kinds of high-end restaurant's website to kind of mold mine into what it is now.
                Was rather getting images of ramen as I don't want any copyright issues.
                </p>
                <p class="content">Tech Usage: Html 5, Bootstrap, Javascript</p>
                <p class="content">React Version Tech Usage: React.Js, React-Bootstrap</p>
                <Row>
                    <Col>
                        <Button onClick={redirect} bsPrefix="githubBtn"><span>Take a look? (Github)</span></Button>
                    </Col>
                    <Col>
                        <Button onClick={linkTo} bsPrefix="githubBtn"><span>Link to Web</span></Button>
                    </Col>
                    <Col>
                        <Button onClick={toReact} bsPrefix="githubBtn"><span>React Version</span></Button>
                    </Col>
                    <Col>
                        <Button onClick={toReactGithub} bsPrefix="githubBtn"><span>React Version Github</span></Button>
                    </Col>
                </Row>
            </article>
            </section>

            <section class="demoPics text-center">
                <Row class="row">
                    <Col class="col">
                        <img src="/img/rs1.png" class="rounded" style={imgStyle} alt="ramenshop"/>
                    </Col>
                    <Col class="col">
                        <img src="/img/rs2.png" class="rounded" style={imgStyle} alt="ramenshop"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="/img/rs2-1.png" class="rounded" style={imgStyle} alt="reactramenshop"/>
                    </Col>
                    <Col>
                        <img src="/img/rs2-2.png" class="rounded" style={imgStyle} alt="reactramenshop"/>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default RamenShop
