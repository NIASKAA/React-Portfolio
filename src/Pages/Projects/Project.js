import React from 'react'
import {Link} from 'react-router-dom'
import "./styles.css"
import DiscordBot from '../../img/discordbot.png'
import Amiibo from '../../img/amiibo.png'
import Blog from '../../img/blog.jpeg'
import Nutricalifide from '../../img/logo.jpeg'
import PlugSelect from '../../img/newLogo.png'
import Ramen from'../../img/tonkotsu.jpg'

const Projects = () => {
    const cardStyle = {
        width: "18rem"
    };

    const imgStyle = {
        width: "18rem"
    };

    return (
        <>
            <header className="projectImage">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mainText">
                                <h1>Projects</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="display">
                <div class="row">
                    <div class="col">
                        <div class="card" style={cardStyle}>
                            <img src={DiscordBot} class="card-img-top" alt="Discord Bot" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Discord Bot V2</h5>
                                
                                <button as={Link} to={'/projects/discordbot'} class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Nutricalifide} class="card-img-top" alt="Nutricalifide" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Nutricalifide</h5>
                                <a href="projects/nutricalifide" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={PlugSelect} class="card-img-top" alt="PlugSelect" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">The Plug Select</h5>
                                <a href="projects/thePlugSelect" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Ramen} class="card-img-top" alt="Ramen Shop" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Ramen Shop</h5>
                                <a href="projects/ramenShop" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Amiibo} class="card-img-top" alt="Amiibo" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Amiibo Search Engine</h5>
                                <a href="projects/amiiboEngine" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Blog} class="card-img-top" alt="Tech Blog" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Your Tech Blog</h5>
                                <a href="projects/yourTechBlog" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Projects
