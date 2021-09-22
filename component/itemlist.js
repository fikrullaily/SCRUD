import React, { useState } from "react";
import styles from '../styles/Home.module.scss';
import Item from "./item";


 const ItemList = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const { itemList, handleEdit, handleDelete } = props;

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
        <br />

      {itemList.filter((item) => {
        if (searchTerm == ""){
          return item;
        } else if (
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item
        }
        }).map((item) => {
          return <Item item={item} key={item.id} handleEdit={handleEdit} />;
      })}
</div>
  );
 };

export default ItemList;
