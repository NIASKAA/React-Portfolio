import React from 'react'
import "./styles.css"

const Projects = () => {
    const cardStyle = {
        width: "18rem"
      };

    const imgStyle = {
        width: "17rem"
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
                            <div class="card-body">
                                <h5 class="card-title">Discord Bot V2</h5>
                                <a href="projects/discordBot" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                            <div class="card-body">
                                <h5 class="card-title">Nutricalifide</h5>
                                <a href="projects/nutricalifide" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
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
                            <div class="card-body">
                                <h5 class="card-title">Ramen Shop</h5>
                                <a href="projects/ramenShop" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={cardStyle}>
                            <div class="card-body">
                                <h5 class="card-title">Amiibo Search Engine</h5>
                                <a href="projects/amiiboEngine" class="projectBtn"><span>Take a look?</span></a>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col">
                        <div class="card" style={cardStyle}>
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
