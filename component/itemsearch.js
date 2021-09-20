import React, { useState } from "react";
import Item from "./item";
import ItemList from "./itemlist";
import styles from '../styles/Home.module.scss';
import data from "../data-dummy/data.json";

const SearchItem = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
   
    const handleChange = (e) =>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    return (
    <div>
        <div className={styles.item}>
            <input className={styles.search} type="text" placeholder="Search..." 
                name="search" onChange={handleChange} value={searchTerm} />
        </div>
        
        {data.filter((item)=> {
            if (searchTerm == ""){
                return item;
            } else if (
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return item
            }
            }).map((item) => {
                return <Item item={item} key={item.id} />;
            })}
    </div>
    );
};


export default SearchItem;




//             {/* <button className={styles.btnSearch} type="submit" 
//                 onChange={event => {setSearchTerm(event.target.value);}}>
//                 <img className={styles.icnSearch} src="/search.png" />
//             </button> */}
// {/* 
//             {data.filter((Item)=> {
//                 if (searchTerm == ""){
//                     return Item 
//                 } else if (Item.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                     return Item
//                 }
//             }).map((Item, key) => {
//                 return (
//                     <div className="user" key={key}>
//                         <p> {Item.title} </p>
//                     </div>
//                 );
//             })} */}