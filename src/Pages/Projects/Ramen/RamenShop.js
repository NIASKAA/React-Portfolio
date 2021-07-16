import React from 'react'
import './styles.css'
import Pic1 from '../../../img/rs1.png'
import Pic2 from '../../../img/rs2.png'

const RamenShop = () => {
    const redirect = () => {
        window.location.href="https://github.com/NIASKAA/Ramen-Shop"
    }
    const imgStyle = {
        width: "80%",
        height: "95%"
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
                <button onClick={redirect} class="githubBtn"><span>Take a look?</span></button>
            </article>
            </section>

            <section class="demoPics text-center">
                <div class="row">
                    <div class="col">
                    <img src={Pic1} class="rounded" style={imgStyle} alt="ramenshop"/>
                    </div>
                    <div class="col">
                    <img src={Pic2} class="rounded" style={imgStyle} alt="ramenshop"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RamenShop
