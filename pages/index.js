import Head from "next/head";
import React, { useState, useEffect } from 'react';
import data from "../data-dummy/data.json";
import Header from '../component/header';
import HeadItem from '../component/headitem';
import Footer from '../component/footer';
import ItemList from "../component/item/itemlist";
import Item from "../component/item/item";
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [itemList, setItemList] = useState(data);

  const [searchTerm, setSearchTerm] = useState('');

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

    const handleDelete = (Item) => {
      let filterred = itemList.filter((itemList) => itemList !== Item );
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

      <HeadItem />
        
    <div className={styles.item}>
      <input className={styles.search} type="text" 
        placeholder="Search..." name="search" 
        onChange={event => {
          setSearchTerm(event.target.value);
        }} 
      />
    </div>

      <div className={styles.form}>
        <ItemList
          Item={Item}
          itemList={itemList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />
      </div>
          <Footer />

          {data.filter((Item)=> {
                if (searchTerm == ""){
                    return Item 
                } else if (Item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return Item
                }
            }).map((Item, key) => {
                return (
                    <div className="user" key={key}>
                        <p> {Item.title} </p>
                    </div>
                );
      })}
    </div>
  );
};
