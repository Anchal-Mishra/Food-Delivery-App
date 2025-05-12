import { restaurants } from "../Utils/MockData";
function TopRatedRestaurants(props){
    function filterTopRated(){
        let filterdRating=restaurants.filter(res=>res.rating>4)
        console.log(filterdRating);
        props.topRatedFunc(filterdRating)      
    }
    return(
        <>
        <button className="border-2" onClick={filterTopRated}>Top Rated Restaurants</button>
        </>
    )

}
export default TopRatedRestaurants;