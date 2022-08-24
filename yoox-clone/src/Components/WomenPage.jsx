import React from 'react';
import "./WomenPage.css";

function WomenPage() {
    return (
        <div className='womenPage'>
            {/* Womenpage Navbar */}
            <div className='top_navbar'>
                <div className="womenPage_navbar">
                    <p>new arivals</p>
                    <p>designers</p>
                    <p>clothing</p>
                    <p>shoes</p>
                    <p>accessories & bags</p>
                    <p>8 by yoox</p>
                    <p>yooxgen</p>
                    <p>collaborations</p>
                    <p>sale</p>
                </div>
            </div>

            {/* Womenpage poster */}
            <div className='womenPage_poster'>
                <div className='womenPage_poster__disscount'>
                    <h2>DOUBLE DEAL: 20% OFF | 30% OFF until 8/26</h2>
                    <p>shop now</p>
                </div>
                <img src="https://www.yoox.com/images/yoox80/banners/6824_2_NewArrivals_W_Main.jpg?634485886869569819#width=1380&height=637" alt="WomenPage__Poster" />
            </div>

            {/* Womenpage country living and good vibes page */}
            <div className="womenPage_posterBelow">

                <div className='left__image'>
                    <img src="https://www.yoox.com/images/yoox80/banners/6944_6_Mkd_HL_W_ENG.jpg?634485886869569819#width=430&height=600" alt="Left_side_image" />

                    <div className='image_below'>
                        <h1>the big big sale</h1>
                        <p>Shop shop shop!</p>
                        <h4>shop now</h4>
                    </div>
                </div>

                <div className='center__image'>
                    <div className='all_design_tags'>
                        <h1>designers</h1>

                        <p>DOLCE & GABBANA</p>
                        <p>ROBERTO CAVALLI</p>
                        <p>MARNI</p>
                        <p>STELLA MCCARTNEY</p>
                        <p>MAISON MARGIELA</p>
                        <p>VERSACE</p>
                        <p>CHLOÉ</p>
                        <p>GUCCI</p>
                        <p>BALENCIAGA</p>
                        <p>JIL SANDER</p>

                        <h4>view all</h4>
                    </div>
                </div>

                <div className='right__image'>
                    <img src="https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnBags_HL_W.jpg?634485886869569819#width=430&height=600" alt="Right_side_image" />

                    <div className='image_below'>
                        <h1>carry it all</h1>
                        <p>The best bags to keep by your side</p>
                        <h4>shop now</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WomenPage