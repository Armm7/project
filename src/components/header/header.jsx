import "./header.css"
import im from "../images/fb1.svg"
import im1 from "../images/insta1.svg"
import im2 from "../images/in1.svg"
import im3 from "../images/twitter1.svg"
import im4 from "../images/b1.svg"
import im5 from "../images/search1.svg"
import im6 from "../images/profile1.svg"
import im7 from "../images/heart1.svg"
import im8 from "../images/cart1.svg"
import im9 from "../images/button1.svg"



function Header() {
    return (
        <div className="header">
            <div className="header1">


                <div className="pages">
                    <div className="first">
                        <img className="logo" src={im} />
                        <img className="logo" src={im1} />
                        <img className="logo" src={im2} />
                        <img className="logo" src={im3} />
                        <img className="logo" src={im4} />

                    </div>
                    <div className="second">
                        Free Shipping On A Purchase Value Of $ 200

                    </div>
                    <div className="third">
                        Let's Talk!  +57 444 11 00 35
                    </div>
                </div>
                <div className="page">
                    <div className="ultras">
                        <span className="shadow">Ultras.</span>
                        

                    </div>
                    <div className="menu">
                        <a>Women</a>
                        <a>Men</a>
                        <a>Kids</a>
                        <a>Accessories</a>
                        <a>Collections</a>
                        <a>Brand</a>
                        <a>Sale</a>
                        <a>Blog</a>

                    </div>
                    <div className="search">
                        <img src={im5} />
                        <img src={im6} />
                        <img src={im7} />
                        <img src={im8} />
                    </div>
                </div>
                <span className="shadow1">Casual Wear Store</span>
            </div>

            <div className="headersum">
                    
                <img className="image" />
                <h1 className="summer">
                    Summer collection.
                </h1>
                <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.
                </p>
                <button className="button">
                    <p className="shop">Shop it now</p>
                    <img className="rside" src={im9}/>
                </button>
            </div>
        </div>
    )
}

export default Header