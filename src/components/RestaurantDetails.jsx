import { useParams } from "react-router-dom"
import { restaurants } from "../Utils/MockData";
import DishesCard from "./DishesCard";

function RestaurantDetails(){
    const params=useParams()
    const restaurantData=restaurants.filter((resto)=>resto.id==params.id)
    console.log(restaurantData[0].dishes);
    // const [id, name, rating, deliveryTime, cuisine, imageUrl]=restaurantData;
    
    return(
        <div>
            <div>
                {restaurantData[0].dishes.map(resto=><DishesCard resto={resto} key={resto.id}/>)}
            </div>

        </div>
    )
}

export default RestaurantDetails