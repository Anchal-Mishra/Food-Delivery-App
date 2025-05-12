function RestaurantCard({resDetails}) {
    const {name, imageURL, rating, cuisine, deliveryTime, }=resDetails;
    return ( 
        <>
            <div className="shadow-xs rounded-2xl bg-white">
                <img src={imageURL} className="rounded-2xl h-40 w-60" />
                <p className="font-bold text-xl">{name}</p>
                <span>{rating}</span>
                <span>{deliveryTime}</span>
                <p>{cuisine}</p>
            </div>
        </>
    )
}

export default RestaurantCard;