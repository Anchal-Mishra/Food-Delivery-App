import { restaurants } from "../Utils/MockData";
function SearchBar(props){
    function handleSearch(searchText){
        const filteredRes=restaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
        props.filterFunc(filteredRes)       

    }
    return(
        <>
        <input type="text"
        className="border-2 my-6 " 
        onChange={(e)=>handleSearch(e.target.value)} />
        </>
    )

}
export default SearchBar;
