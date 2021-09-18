import React, { useState } from "react";
import styles from '../styles/Home.module.scss';

const HeadItem = () => {


    return (
        <nav className= {styles.headitem}>
            <h2 className={styles.h2} > List Item of Shoes.So</h2>
        </nav>
        
    );
};

export default HeadItem;




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