import Header from "../components/Header.jsx"
import Banner from "../components/Banner.jsx"
import Body from "../components/Body.jsx"
import Body1 from "../components/Body1.jsx"
import Body2 from "../components/Body2.jsx"
import Footer from "../components/Footer.jsx"    //to get inside the pages we use 2 dots
import {menimage} from "../products.js"   //we are
import {roseimage} from "../products.js"
import {lotusimage} from "../products.js"
import {Route,Routes} from "react-router-dom";
import {useState} from 'react'

const MainPage=()=>{
    const[menfashion,setMenfashion]=useState(menimage)
    const[rosefashion,setRoseimage]=useState(roseimage)
    const[lotusfashion , setLotusimage] = useState(lotusimage)
    return(
        <div>

            <Header/>
            <Banner/>
            <Routes>
            <Route path = "/flowers" element={ <Body men={menfashion}/>}/>
            <Route path = "/rose" element={  <Body1 rose = {rosefashion}/>}/>
             <Route path = "/lotus" element={   <Body2 lotus ={lotusfashion}/>}/>
             </Routes>



            <Footer/>

            </div>
        )
    }
export default MainPage;