import React from 'react';
import Footer from './Footer';
import "./WomenPage.css";

function MenPage() {
    return (
        <>
            <div className='womenPage'>
                {/* Menpage Navbar */}
                <div className='top_navbar'>
                    <div className="womenPage_navbar">
                        <p>new arivals</p>
                        <p>designers</p>
                        <p>clothing</p>
                        <p>shoes</p>
                        <p>accessories</p>
                        <p>8 by yoox</p>
                        <p>yooxgen</p>
                        <p>collaborations</p>
                        <p>sale</p>
                    </div>
                </div>

                {/* Menpage poster */}
                <div className='womenPage_poster'>
                    <div className='womenPage_poster__disscount'>
                        <h2>DOUBLE DEAL: 20% OFF | 30% OFF until 8/26</h2>
                        <p>shop now</p>
                    </div>
                    <img src="https://www.yoox.com/images/yoox80/banners/6824_2_NewArrivals_M_Main.jpg?634485886869569819#width=1380&height=637" alt="WomenPage__Poster" />
                </div>

                {/* Menpage country living and good vibes page */}
                <div className="womenPage_posterBelow">

                    <div className='left__image'>
                        <img src="https://www.yoox.com/images/yoox80/banners/6944_4_Mkd_HL_M_ENG.jpg?634485886869569819#width=430&height=600" alt="Left_side_image" />

                        <div className='image_below'>
                            <h1>the big big sale</h1>
                            <p>Shop shop shop!</p>
                            <h4>shop now</h4>
                        </div>
                    </div>

                    <div className='center__image'>
                        <div className='all_design_tags'>
                            <h1>designers</h1>

                            <p>DSQUARED2</p>
                            <p>DOLCE & GABBANA</p>
                            <p>ROBERTO CAVALLI</p>
                            <p>MAISON MARGIELA</p>
                            <p>VERSACE</p>
                            <p>BALENCIAGA</p>
                            <p>GUCCI</p>
                            <p>CALVIN KLEIN</p>
                            <p>MARNI</p>
                            <p>PRADA</p>

                            <h4>view all</h4>
                        </div>
                    </div>

                    <div className='right__image'>
                        <img src="https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnBags_HL_M.jpg?634485886869569819#width=430&height=600" alt="Right_side_image" />

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
                        <img src="https://www.yoox.com/images/items/13/13818278UK_14_f.jpg?impolicy=crop&width=306&height=390" alt="First_image" />

                        <h1>gcds</h1>
                        <h2>Denim pants</h2>
                        <p><del>$ 577.00</del> 28% OFF</p>
                        <h3>$ 410.00</h3>
                    </div>

                    <div className='newArrival_items'>
                        <img src="https://www.yoox.com/images/items/45/45659344JP_14_f.jpg?impolicy=crop&width=306&height=390" alt="Second_image" />

                        <h1>off-white</h1>
                        <h2>Backpack & fanny pack</h2>
                        <p><del>$ 811.00</del> 34% OFF</p>
                        <h3>$ 528.00</h3>
                    </div>

                    <div className='newArrival_items'>
                        <img src="https://www.yoox.com/images/items/14/14256755RM_14_f.jpg?impolicy=crop&width=306&height=390" alt="Third_image" />

                        <h1>8 by yoox</h1>
                        <h2>Sleeveless sweater</h2>
                        {/* <p><del>$ 877.00</del> 44% OFF</p> */}
                        <h3>$ 90.00</h3>
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
                        <img src="https://www.yoox.com/images/yoox80/banners/6825_11_PoloRalphLauren_M_Tris.jpg?634485886869569819#width=430&height=600" alt="Center_image" />

                        <h1>polo ralph lauren</h1>
                        <p>The story of an Icon</p>
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
                        <img src="https://www.yoox.com/images/items/13/13847491DL_14_f.jpg?impolicy=crop&width=306&height=390" alt="First_image" />

                        <h1>ami alexandre mattiussi</h1>
                        <h2>Shorts & Bermuda</h2>
                        <p><del>$ 277.00</del> 34% OFF</p>
                        <h3>$ 149.00</h3>
                    </div>

                    <div className='newArrival_items'>
                        <img src="https://www.yoox.com/images/items/12/12870995CT_14_f.jpg?impolicy=crop&width=306&height=390" alt="Second_image" />

                        <h1>valentino</h1>
                        <h2>Sweatshirt</h2>
                        <p><del>$ 1,503.00</del> 30% OFF</p>
                        <h3>$ 1042.00</h3>
                    </div>

                    <div className='newArrival_items'>
                        <img src="https://www.yoox.com/images/items/12/12874694UQ_14_f.jpg?impolicy=crop&width=306&height=390" alt="Third_image" />

                        <h1>napapijri</h1>
                        <h2>T-shirt</h2>
                        <p><del>$ 94.00</del> 29% OFF</p>
                        <h3>$ 66.00</h3>
                    </div>
                </div>

                {/* 8 by my side page */}
                <div className="womenPage__eightMySide">
                    <div className="eightMySide__big">
                        <img src="https://www.yoox.com/images/yoox80/banners/6833_2_8byoox_Teaser_WM_Special.jpg?634485886869569819#width=930&height=660" alt="Big_image" />
                    </div>

                    <div className="eightMySide__small">
                        <img src="https://www.yoox.com/images/items/12/12664344JD_14_f.jpg?impolicy=crop&width=306&height=390" alt="Small_image" />

                        <h1>8 by YOOX</h1>
                        <p>Hodded Sweatshirt</p>
                        <h4>$ 59.00</h4>
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

            {/* Footer added */}
            <Footer />
        </>
    )
}

export default MenPage