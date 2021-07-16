import React from 'react'
import './styles.css'
import Pic1 from '../../../img/plug1.png'
import Pic2 from '../../../img/plug2.png'

const PlugSelect = () => {
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
                    <a class="githubBtn" href="https://github.com/NIASKAA/ThePlugSelect"><span>Take a look?</span></a>
                </article>
            </section>

            <section class="demoPics text-center">
                <div class="row">
                    <div class="col">
                    <img src={Pic1} class="rounded" style={imgStyle} alt="theplugselect"/>
                    </div>
                    <div class="col">
                    <img src={Pic2} class="rounded" style={imgStyle} alt="theplugselect"/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PlugSelect
