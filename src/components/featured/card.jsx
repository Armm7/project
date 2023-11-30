import "../featured/card.css"

function Cart(props) {
    return (
        <div className="cards">
            {props.children}
           {!props.children &&<img  src={props.Imgg1} />} 
            <span className="title1">{props.title}</span>
            <span className="price">{props.price}</span>
        </div>
    )
}

export default Cart;