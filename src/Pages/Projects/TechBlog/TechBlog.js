import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './styles.css'

const TechBlog = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/Tech-Blog"
    }

    const linkTo = () => {
        window.location.href="https://niaskatechblogproject.herokuapp.com/"
    }

    const imgStyle = {
        width: "80%",
        height: '95%'
    }
    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>Your Tech Blog</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section class="projectSection">
            <article class="body">
                <h2 class="proTitle">Blog it up</h2>
                <p class="content">
                So this isn't anything super special but rather something simple. It was a good learning experience for me to understand how a lot of the backend systems work. 
                Introducing the most basic blog post. Simply make an account and you will be able to post, comment, or even lurk among people who are interested in tech news.
                </p>
                <p class="content">Tech Usage: Handlebars.Js, Bootstrap, MYSQL, Javascript</p>
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
                <img src="/img/techblog.png" class="rounded" style={imgStyle} alt="yourtechblog"/>
                </Col>
                <Col class="col">
                <img src="/img/techblog1.png" class="rounded" style={imgStyle} alt="yourtechblog"/>
                </Col>
            </Row>
            </section>
        </>
    )
}

export default TechBlog
