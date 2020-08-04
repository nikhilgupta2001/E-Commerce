import React, { Component } from 'react';
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';
import img5 from '../../img/5.webp';

class Landing extends Component {
    render() {
        return (
           <div>
           <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="1000">
      <img src={img1} className="d-block frontimg w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={img2} className="d-block frontimg w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={img3} className="d-block frontimg w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={img4} className="d-block frontimg w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={img5} className="d-block frontimg w-100" alt="..."/>
     </div>
   </div>
</div> 
   
           </div>
        )
    }
}
export default Landing;