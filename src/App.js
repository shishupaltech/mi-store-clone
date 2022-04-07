import './App.css';
import PreNavbar from  './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu'
import HotAccessories from './components/HotAccessories'
import ProductReview from './components/ProductReview.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

import { BrowserRouter as Router,
Routes,
Route
  } from 'react-router-dom';//div relaplace with router
import banner1 from './data/data.json'
import data from './data/data.json'
const banner = banner1.banner


function App() {
  
  return (
    // <div>
    //   <PreNavbar/>
    //   <Navbar/>
    // </div>
    <Router>
      <PreNavbar/>
      <Navbar/>

      <NavOptions miPhones = {data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv}  laptop = {data.laptop} fitnessAndLifeStyle = {data.fitnessAndLifeStyle} home = {data.home} audio = {data.audio} accessories = {data.accessories} />
      <Slider start={banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCT"/>
      <Heading text="HOT ACCESSORIES"/>
      <StarProduct starProduct={data.starProduct}/>
      <HotAccessoriesMenu/>
     
      <Routes>

      <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>

      <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>

      <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>

       <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>

      <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/> 

      
     
      </Routes>
      
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReview productReviews={data.productReviews}/>


      <Heading text="VIDEOS"/>

      <Videos videos = {data.videos}/>
     
      <Heading text="IN THE PRESS"/>

      <Banner banner = {data.banner}/>
           
      <Footer footer = {data.footer} />    
   
        </Router>
  );
}

export default App;
