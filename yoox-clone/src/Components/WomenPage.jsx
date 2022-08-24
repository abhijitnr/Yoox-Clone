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

            {/* New arrival link */}
            <div className="womenPage_newArrival">
                <div className='newArrival'>
                    <h1>new arrivals</h1>
                    <p>view all</p>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/16/16126243WT_14_f.jpg?impolicy=crop&width=306&height=390" alt="First_image" />

                    <h1>asne studios</h1>
                    <h2>Biker jacket</h2>
                    <p><del>$ 1,983.00</del> 33% OFF</p>
                    <h3>$ 1,309.00</h3>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/12/12662568QT_14_f.jpg?impolicy=crop&width=306&height=390" alt="Second_image" />

                    <h1>the attico</h1>
                    <h2>Top</h2>
                    <p><del>$ 677.00</del> 42% OFF</p>
                    <h3>$ 392.00</h3>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/17/17302362JQ_14_f.jpg?impolicy=crop&width=306&height=390" alt="Third_image" />

                    <h1>the attico</h1>
                    <h2>Pump</h2>
                    <p><del>$ 877.00</del> 44% OFF</p>
                    <h3>$ 491.00</h3>
                </div>
            </div>

            {/* popular brand part */}
            <div className='womenPage_popularBrand'>
                <div className="popularBrand__leftRight">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_W.png?634485886869569819#width=473&height=660" alt="Left_image" />

                    <h1>baume & mercier</h1>
                    <p>Don't miss our selection of watches</p>
                </div>

                <div className="popularBrand__center">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_9_SeeByChloe_W_Tris.jpg?634485886869569819#width=473&height=660" alt="Center_image" />

                    <h1>see by CHLOÉ</h1>
                    <p>Fall in love with the new collection</p>
                </div>

                <div className="popularBrand__leftRight">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_2_Vans_Tris_WM.jpg?634485886869569819#width=473&height=660" alt="Right_image" />

                    <h1>vans</h1>
                    <p>Classic since forever</p>
                </div>
            </div>

            {/* One of kind page */}
            <div className="womenPage_newArrival">
                <div className='newArrival'>
                    <h1>one of a kind</h1>
                    <p>view all</p>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/12/12874894QM_14_f.jpg?impolicy=crop&width=306&height=390" alt="First_image" />

                    <h1>nanushka</h1>
                    <h2>Top</h2>
                    <p><del>$ 265.00</del> 38% OFF</p>
                    <h3>$ 164.00</h3>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/13/13797439SS_14_f.jpg?impolicy=crop&width=306&height=390" alt="Second_image" />

                    <h1>asne studios</h1>
                    <h2>Midi skirt</h2>
                    <p><del>$ 489.00</del> 45% OFF</p>
                    <h3>$ 266.00</h3>
                </div>

                <div className='newArrival_items'>
                    <img src="https://www.yoox.com/images/items/45/45627471AM_14_f.jpg?impolicy=crop&width=306&height=390" alt="Third_image" />

                    <h1>by far</h1>
                    <h2>Handbag</h2>
                    <p><del>$ 588.00</del> 36% OFF</p>
                    <h3>$ 376.00</h3>
                </div>
            </div>

            {/* 8 by my side page */}
            <div className="womenPage__eightMySide">
                <div className="eightMySide__big">
                    <img src="https://www.yoox.com/images/yoox80/banners/6833_2_8byoox_Teaser_WM_Special.jpg?634485886869569819#width=930&height=660" alt="Big_image" />
                </div>

                <div className="eightMySide__small">
                    <img src="https://www.yoox.com/images/items/16/16146669NM_14_f.jpg?impolicy=crop&width=306&height=390" alt="Small_image" />

                    <h1>8 by YOOX</h1>
                    <p>Shell jacket</p>
                    <h4>$ 170.00</h4>
                </div>
            </div>

            {/* Love yourself part */}
            <div className="womenPage__loveYourSelf">
                <div className='loveYourSelf'>
                    <img src="https://www.yoox.com/images/yoox80/banners/6824_1_USopen_HalfBottom.png?634485886869569819#width=690&height=637" alt="Left_image" />
                </div>
                <div className='loveYourSelf'>
                    <img src="https://www.yoox.com/images/yoox80/banners/6895_4_GenZ_Pride_WM_Half.jpg?634485886869569819#width=690&height=637" alt="Right_image" />
                </div>
            </div>

        </div>
    )
}

export default WomenPage