/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({id, name, price, description, image}) => {

const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        { !cartItems[id]
            ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className='food-item-counter'>
                 <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                 <p>{cartItems[id]}</p>
                  {/* {console.log(cartItems)} */}
                 <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
        }
       </div>

       <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>
            {description}
        </p>
        <p className='food-item-price'>Rs.{price}</p>
       </div>
    </div>
  )
}

export default FoodItem;



// Removed later because it was bad practice
// const [itemCount, setItemCount] = useState(0);
// { !itemCount
//   ? <img className='add' onClick={()=> setItemCount(prev => prev+1)} src={assets.add_icon_white} alt="" />
//   : <div className='food-item-counter'>
//        <img onClick={() => setItemCount(prev => prev-1)} src={assets.remove_icon_red} alt="" />
//        <p>{itemCount}</p>
//        <img onClick={() => setItemCount(prev => prev+1)} src={assets.add_icon_green} alt="" />
//     </div>
// }


