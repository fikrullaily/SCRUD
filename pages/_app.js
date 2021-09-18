import { useState } from 'react'
import Header from '../component/header'
import data from "../data-dummy/data.json";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const [itemList, setItemList] = useState(data); //harusnya data tapi eror jd sementara gitu dulu

  return <Component {...pageProps} />;
  
}

export default MyApp
