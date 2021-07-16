import React from 'react'
import './styles.css'
import Pic1 from '../../../img/amiibo.png'
import Pic2 from '../../../img/amiibo2.png'

const Amiibo = () => {
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
                                <h1>Amiibo Search Engine</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">A little engine that could</h2>
                    <p class="content">
                    Well, this was definitely a fun little project of mine to test my skills. It started with the idea of finding a fun API and taking that to a level where it 
                    does what it said. Introducing the Amiibo Search Engine, you want to find an amiibo figure? Do it with the web application! It was fun to be able to learn how you can 
                    call data into your website and have that display all kinds of information with just one little key.
                    </p>
                    <a class="githubBtn" href="https://github.com/NIASKAA/Project-Amiibo"><span>Take a look?</span></a>
                </article>
            </section>

            <section class="demoPics text-center">
                <div class="row">
                    <div class="col">
                    <img src={Pic1} class="rounded" style={imgStyle} alt="amiibo"/>
                    </div>
                    <div class="col">
                    <img src={Pic2} class="rounded" style={imgStyle} alt="amiibo"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Amiibo
