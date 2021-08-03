import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './styles.css'
import Pic1 from '../../../img/plug1.png'
import Pic2 from '../../../img/plug2.png'

const PlugSelect = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/ThePlugSelect"
    }

     const linkTo = () => {
        window.location.href="https://plugselect.herokuapp.com/"
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
                                <h1>The Plug Select</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">Time for a new drip?</h2>
                    <p class="content">
                    As someone who is pretty invested in art, it matters what you wear on the outside as well. Now my team decided to make a website that basically gives people an opportunity to get 
                    luxious items in a fair way. No more just seeing Gucci or LV on the street, how about some other brands across the world? Right now, the website is still in it's early stages but 
                    soon, it will have a lot more application that helps the user navigate the website.
                    </p>
                    <p class="content">Tech Usage: Handlebars.Js, Bootstrap, MYSQL, Cloudinary, Socket.io</p>
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

export default PlugSelect
