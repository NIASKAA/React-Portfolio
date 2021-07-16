import React from 'react'
import './styles.css'
import Pic1 from '../../../img/techblog.png'
import Pic2 from '../../../img/techblog1.png'

const TechBlog = () => {
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
                <a class="githubBtn" href="https://github.com/NIASKAA/Tech-Blog"><span>Take a look?</span></a>
            </article>
            </section>

            <section class="demoPics text-center">
            <div class="row">
                <div class="col">
                <img src={Pic1} class="rounded" style={imgStyle} alt="yourtechblog"/>
                </div>
                <div class="col">
                <img src={Pic2} class="rounded" style={imgStyle} alt="yourtechblog"/>
                </div>
            </div>
            </section>
        </>
    )
}

export default TechBlog