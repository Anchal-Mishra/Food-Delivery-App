import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../Utils/MockData";
import SearchBar from "./SearchBar";
import { useState } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import { Link } from "react-router-dom";


function Body() {
    const [filteredResto, setfilteredResto]=useState(restaurants);   
      
    function filteredRestaurants(filteredResto){
        setfilteredResto(filteredResto)  
    }
    function topRatedRestaurants(filterdRating){
        setfilteredResto(filterdRating)

    }
    return (
            <div className="mx-auto w-3/4 bg-slate-50 h-screen py-8">
                <h1 className="font-bold text-xl py-6">Restaurants with online food delivery</h1>

                <SearchBar filterFunc={filteredRestaurants}/>
                <TopRatedRestaurants topRatedFunc={topRatedRestaurants}/>
                <div className="flex flex-wrap justify-between gap-10">                   
                        {filteredResto.map((res) =>
                            <Link to={`/restaurants/${res.id}`} key={res.id}> <RestaurantCard resDetails={res} key={res.id}/></Link>)    
                        }                   
                </div>
            </div>
    )
}

export default Body;