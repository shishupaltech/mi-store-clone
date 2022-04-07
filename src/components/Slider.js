import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


//hame kya kiya jo start hai isame array a gaya hai jo hamne slider start={banner.start} pass kiya usase;
const Slider = ({start}) => {
// jb bhi hame javascript use karenge tb hame {} ye breaces use karna hoga map hr element ko iterate karega array se pahel item and then index jitan item honge utni bar render hogi
  return (
    <Carousel fade>
        {
        
        start.map((item, index)=>(
            <Carousel.Item>
                <img className='d-block w-100' src={item} alt="First slide" />
            </Carousel.Item>
        ))
        
        }

    </Carousel>
  )
}

export default Slider