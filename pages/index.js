import Head from "next/head";
import React, { useState, useEffect } from 'react';
import data from "../data-dummy/data.json";
import Header from '../component/header';
import Footer from '../component/footer';
import ItemList from "../component/itemlist";
import Item from "../component/item";
import styles from '../styles/Home.module.scss'
import SearchItem from "../component/itemsearch";

export default function Home() {
  const [itemList, setItemList] = useState(data);

  const [update, setUpdate] = useState({id: null, status: false});
  const [userInput, setUserInput ] = useState({
    title: "",
    quantity: "",
    price:"",
  });

  const handleChange = (e) => {
    let data = { ...userInput };      
    data[e.target.name] = e.target.value;
    setUserInput(data);
    };
  
  const handleSubmit = (e) => {
    e.preventDefault ();

    if (
      (userInput.title === "",
      userInput.quantity === "",
      userInput.price === "")
    ) {
      return false;
    }
    
    let data = [...itemList];

    if (update.status) {
      data.forEach((item) => {
        if (item.id == update.id){
          item.title = userInput.title;
          item.quantity = userInput.quantity;
          item.price = userInput.price;
        }
      });
      alert("Data berhasil di Edit");
      } else {
        data.push({
          id: itemList.length +1,
          title: userInput.title,
          quantity: userInput.quantity,
          price: userInput.price,
        });
        alert("Data berhasil di Tambah");
      }
      setUpdate({ id:null, status: false});
      setItemList(data);
      setUserInput({ title: "", quantity: "", price: "" }); 
    };

    const handleEdit = (item) => {
      setUserInput({
        title: item?.title,
        quantity: item?.quantity,
        price: item?.price,
      });
      setUpdate({ id: item.id, status: true });
      console.log(item);
    };

    const handleDelete = (item) => {
      let filterred = itemList.filter((itemList) => itemList !== item );
      setItemList(filterred);
      console.log(filterred);
    };
    
  return (
    <div className={styles.content}>
      <Header />   

      <Head>
        <title>List Item | Shoes.so</title>
        <meta name="keywords" content="brands sepatu" ></meta>
      </Head>
       
      <form className={styles.formitem} >
        <label for="title">Title: </label>
        <input className={styles.input} type="text" name="title" placeholder="input the title" onChange={handleChange} value={userInput.title} />
    
        <label for="quantity">Quantity: </label>
        <input className={styles.input} type="number" name="quantity" placeholder="0" onChange={handleChange} value={userInput.quantity} />
       
        <label for="price">Price: </label>
        <input className={styles.input} type="number" name="price" placeholder="0" onChange={handleChange} value={userInput.price} />
       
        <button type="button" onClick={handleSubmit} className={styles.button}> tambah </button>
        
      </form>

      <nav className= {styles.headitem}>
            <h2 className={styles.h2} > List Item of Shoes.So</h2>
      </nav>

      
      <div className={styles.form} > 
        <ItemList
          Item={Item}
          itemList={itemList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />
      </div> 
      
    <Footer />
    
    </div>
    
  );
};



