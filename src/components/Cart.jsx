import { useSelector } from "react-redux";
import { removeItem, addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
function Cart(){
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems.length);
    console.log(cartItems.dishes);
    const dispatch=useDispatch()
    
    return (
        <>
        <h1>Cart Component</h1>
        <div>{cartItems.length}</div>
        <div className="bg-red-300">
            {cartItems.map((resto)=>{
                return(
                    <div className="shadow-xs rounded-2x" key={resto.id}>
                    <div>{resto.dishtype}</div>
                    <img src={resto.image} className="rounded-2xl h-40 w-60" />
                    <p className="font-bold text-xl">{resto.name}</p>
                    <span>{resto.price}</span>
                    <div>{resto.description}</div>
                    <div className="border-2">
                        <button onClick={()=>dispatch(removeItem(resto))} className="font-bold">-</button>
                        <span>{resto.quantity}</span>
                        <button onClick={()=>dispatch(addItem(resto))} className="font-bold">+</button>
                    </div>
                    
                </div>

                )


            })}

        </div>
        </>
    )
}

export default Cart;