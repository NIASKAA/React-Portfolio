import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './styles.css'

const Nutricalifide = () => {
    const redirect = () => {
        window.location.href='https://github.com/thomasbolling87/NurtriCalifide'
    }

    const linkTo = () => {
        window.location.href='https://thomasbolling87.github.io/NurtriCalifide/'
    }
    const imgStyle = {
        width: '80%',
        height: '95%'
    }

    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>Nutricalifide</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                <h2 class="proTitle">Recipes on the go</h2>
                <p class="content">
                    So this was my first big project with a team. Our basic idea was that we want to deliver healthy recipes for people whenever they want it. Each recipes correlates to each session of the day
                    so if you want a quick breakfast meal? You got it. We also understand how much it matters to consume the right amount of calories each day so we even made a system to log each meal. At the end 
                    the week it can display just how much you ate that week. Now nutricalifide also understand that some days you need that cheat meal, so again, we added even cheat meals to go along with your routine.
                </p>
                <p class="content">Tech Usage: Edanam API, Javascript, Bulma</p>
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
                <img src="/img/nutri1.png" class="rounded" style={imgStyle} alt="nutricalifide"/>
                </Col>
                <Col class="col">
                <img src="/img/nutri2.png" class="rounded" style={imgStyle} alt="nutricalifide"/>
                </Col>
            </Row>
            </section>
        </>
    )
}

export default Nutricalifide
