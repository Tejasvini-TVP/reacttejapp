import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';


const Resturant = () => {
    const [menuData, setmenuData] = useState(Menu);
  return (
    <>
     <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                <span className="card-author subtle">Breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">
                    I love Maggi realy oo yues Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Blanditiid, at consecetetur totam voluptatibus
                    quobusdam iusto.Accusamus quas, soluta ipsam autem eius
                    necessitatibus fugiat in.
                </span>
                <div className="card-read">Read</div>
            </div>
            {/* <img src={images} alt="images" className="card-media" /> */}
            <span className="card-tag subtle">Order Now</span>
        </div>
     </div>
    </>
  )
}

export default Resturant
