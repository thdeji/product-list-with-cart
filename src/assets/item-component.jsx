import { useState } from "react";
import cartIcon from "./images/icon-add-to-cart.svg";
import minusIcon from "./images/icon-decrement-quantity.svg";
import plusIcon from "./images/icon-increment-quantity.svg";

function Item({
  title,
  itemName,
  price,
  addToCart,
  id,
  onQuantityChange,
  itemImage,
  itemImageDesktop,
  thumbNail
}) {
  const [quantity, setQuantity] = useState(0);

  function handleAddItem() {
    setQuantity((q) => {
      const newQuantity = q + 1;
      onQuantityChange(id, newQuantity);
      return newQuantity;
    });
    addToCart({ title, itemName, quantity, price, id, thumbNail });
  }
  function handleRemoveItem() {
    setQuantity((q) => {
      const newQuantity = q - 1;
      onQuantityChange(id, newQuantity);
      return newQuantity;
    });
    // removeItem({id});
  }
  return (
    <div>
      <div className="flex flex-col">
        <img
          src={window.innerWidth < 768 ? itemImage : itemImageDesktop}
          className={
            quantity >= 1
              ? "rounded-2xl border-2 border-thisRed"
              : "rounded-2xl"
          }
        />
        <div className="flex justify-center z-1 ">
          {quantity >= 1 ? (
            <div className="bg-thisRed flex justify-between w-[50%] -mt-5 p-2 rounded-full border border-Rose500">
              <img
                src={minusIcon}
                className="cursor-pointer border border-white rounded-full py-1 px-1.5"
                onClick={handleRemoveItem}
              />
              <p className="text-white font-redHatSemibold">{quantity}</p>
              <img
                className="cursor-pointer border border-white rounded-full py-1 px-1.5"
                src={plusIcon}
                onClick={handleAddItem}
              />
            </div>
          ) : (
            <div
              className="cursor-pointer bg-white flex justify-center gap-2 w-[50%] -mt-5 -z-10 p-2 rounded-full border border-Rose500"
              onClick={handleAddItem}
            >
              <img src={cartIcon} alt="" />
              <div className="text-red-900 font-redHatSemibold whitespace-nowrap">
                Add to Cart
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-Rose500 font-redHatRegular">{title}</h3>
        <h1 className="text-rose-950 font-redHatSemibold">{itemName}</h1>
        <h2 className="text-thisRed font-redHatSemibold">${price}</h2>
      </div>
    </div>
  );
}
export default Item;
