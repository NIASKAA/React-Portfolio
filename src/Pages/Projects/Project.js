import React from 'react'
import {useHistory} from 'react-router-dom'
import "./styles.css"
import DiscordBot from '../../img/discordbot.png'
import Amiibo from '../../img/amiibo.png'
import Blog from '../../img/blog.jpeg'
import Nutricalifide from '../../img/logo.jpeg'
import PlugSelect from '../../img/newLogo.png'
import Ramen from'../../img/tonkotsu.jpg'

const Projects = () => {
    let history = useHistory();
    const discord = () =>{
        history.push('/projects/discordbot')
    }
    const nutri = () =>{
        history.push('/projects/nutricalifide')
    }
    const ramen = () =>{
        history.push('/projects/ramenshop')
    }
    const plugselect = () =>{
        history.push('/projects/plugselect')
    }
    const blog = () =>{
        history.push('/projects/techblog')
    }
    const amiibo = () =>{
        history.push('/projects/amiibo')
    }
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
                                <h5 class="card-title">Discord Bot V3</h5>
                                <button onClick={discord} id="discord" class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Nutricalifide} class="card-img-top" alt="Nutricalifide" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Nutricalifide</h5>
                                <button onClick={nutri} id="nutricalifide" class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={PlugSelect} class="card-img-top" alt="PlugSelect" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">The Plug Select</h5>
                                <button onClick={plugselect} class="projectBtn"><span>Take a look?</span></button>
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
                                <button onClick={ramen} class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Amiibo} class="card-img-top" alt="Amiibo" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Amiibo Search Engine</h5>
                                <button onClick={amiibo} class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col">
                        <div class="card" style={cardStyle}>
                        <img src={Blog} class="card-img-top" alt="Tech Blog" style={imgStyle}/>
                            <div class="card-body">
                                <h5 class="card-title">Your Tech Blog</h5>
                                <button onClick={blog} class="projectBtn"><span>Take a look?</span></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Projects
