import { Link } from "react-router-dom";
import useStatus from "../Utils/useStatus";
import { useSelector } from "react-redux";

function Header(){
    const status=useStatus();
    const items=useSelector((store)=>store.cart.items)

    return (
        <>
        <nav className="flex justify-between items-center border-b border-slate-200 px-10 ">
            <Link to="/"><img src="../public/logo.png" width="80px" height="80px"/></Link>
            <ul className="flex font-bold items-center gap-3">
                <li><a href="">{status? "🟢":"🔴"}</a></li>
                <Link to="search" className="hover:border-b-2 border-pink-700 transition-all">Search</Link>
                <Link to="/offers" className="hover:border-b-2 border-pink-700 transition-all">Offers</Link>
                <Link to="/help" className="hover:border-b-2 border-pink-700 transition-all">Help</Link>
                <Link to="/signin" className="hover:border-b-2 border-pink-700 transition-all">SignIn</Link>
                <Link to="/cart" className="hover:border-b-2 border-pink-700 transition-all">Cart{items.length}</Link>
            </ul>
        </nav>
        </>
    )
}
export default Header;