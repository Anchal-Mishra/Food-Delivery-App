import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { useSelector } from "react-redux";

function DishesCard({ resto }) {
    const dispatch = useDispatch();
    
    // Get the cart item from the Redux store based on resto.id
    const cartItem = useSelector(state =>
        state.cart.items.find(item => item.id === resto.id)
    );

    return (
        <>
            <h1>Dishes Card</h1>
            <div className="shadow-xs rounded-2xl bg-white">
                <div>{resto.dishtype}</div>
                <img src={resto.image} className="rounded-2xl h-40 w-60" />
                <p className="font-bold text-xl">{resto.name}</p>
                <span>{resto.price}</span>
                <div>{resto.description}</div>
                <div className="border-2">
                    <button onClick={() => dispatch(removeItem({ id: resto.id }))} className="font-bold">-</button>
                    <span>{cartItem ? cartItem.quantity : 0}</span> {/* Fix: Show quantity from Redux store */}
                    <button onClick={() => dispatch(addItem(resto))} className="font-bold">+</button>
                </div>
            </div>
        </>
    );
}

export default DishesCard;
