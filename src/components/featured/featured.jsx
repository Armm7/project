import './featured.css'
import imgg from "../images/Vector.svg"
import imgg1 from "../images/firstcart.png"
import imgg3 from "../images/thirdcart.png"
import imgg4 from "../images/fourthcart.png"
import imgg5 from "../images/quickveiw.svg"
import imgg6 from "../images/heart.svg"
import Cart from './card'

function Featured(props) {
    return (
        <div className="header2">
            <div className="header3">
                <div className="secondpage">
                    <div className="first1">
                        <p className="p1">Featured Products</p>
                        <div className="arrow">
                            <p className="p2">View All Products</p>
                            <img src={imgg} />
                        </div>
                    </div>
                    <div className="allcarts">
                        <div className="cart">
                            <Cart title="Full sleeve cover shirt" price="$ 40.00" Imgg1={imgg1} />
                            <Cart title="Volunteer Half blue" price="$ 35.00">
                                <div className="only">
                                    <div className="add_cart">
                                        <div className="add_cart_text">
                                            <div className="left_side">
                                                <p>add to cart</p>
                                                <img src={imgg} alt='chga'
                                                />
                                            </div>
                                            <div className="right_side">
                                                <img src={imgg5} />
                                                <img src={imgg6} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Cart>
                            <Cart title="Double yellow shirt" price="$ 36.00" Imgg1={imgg3} />
                            <Cart title="Long belly grey pant" price="$ 32.00" Imgg1={imgg4} />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Featured