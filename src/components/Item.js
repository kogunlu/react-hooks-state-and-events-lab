import React, {useState} from "react";

function Item({ name, category }) {

  
  const [isItemInCart, setIsItemInCart] = useState(false)
  let classNameOfCart
  let buttonText

  if(isItemInCart){
    classNameOfCart = 'in-cart'
    buttonText = 'Remove From Cart'
  }else{
    classNameOfCart = null
    buttonText = 'Add to Cart'
  }


  return (
    <li className={classNameOfCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setIsItemInCart(isItemInCart => !isItemInCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
