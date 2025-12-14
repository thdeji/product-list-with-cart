import { useState } from "react";
import Item from "./item-component";
import OrderConfirmation from "./order-confirmation";

import waffleMobile from "./images/image-waffle-mobile.jpg";
import waffleDesktop from "./images/image-waffle-desktop.jpg";
import waffleThumb from "./images/image-waffle-thumbnail.jpg";

import cremeMobile from "./images/image-creme-brulee-mobile.jpg";
import cremeDesktop from "./images/image-creme-brulee-desktop.jpg";
import cremeThumb from "./images/image-creme-brulee-thumbnail.jpg";

import macaronMobile from "./images/image-macaron-mobile.jpg";
import macaronDesktop from "./images/image-macaron-desktop.jpg";
import macaronThumb from "./images/image-macaron-thumbnail.jpg";

import tiramisuMobile from "./images/image-tiramisu-mobile.jpg";
import tiramisuDesktop from "./images/image-tiramisu-desktop.jpg";
import tiramisuThumb from "./images/image-tiramisu-thumbnail.jpg";

import baklavaMobile from "./images/image-baklava-mobile.jpg";
import baklavaDesktop from "./images/image-baklava-desktop.jpg";
import baklavaThumb from "./images/image-baklava-thumbnail.jpg";

import meringueMobile from "./images/image-meringue-mobile.jpg";
import meringueDesktop from "./images/image-meringue-desktop.jpg";
import meringueThumb from "./images/image-meringue-thumbnail.jpg";

import cakeMobile from "./images/image-cake-mobile.jpg";
import cakeDesktop from "./images/image-cake-desktop.jpg";
import cakeThumb from "./images/image-cake-thumbnail.jpg";

import brownieMobile from "./images/image-brownie-mobile.jpg";
import brownieDesktop from "./images/image-brownie-desktop.jpg";
import brownieThumb from "./images/image-brownie-thumbnail.jpg";

import pannaMobile from "./images/image-panna-cotta-mobile.jpg";
import pannaDesktop from "./images/image-panna-cotta-desktop.jpg";
import pannaThumb from "./images/image-panna-cotta-thumbnail.jpg";

import emptyCart from "./images/illustration-empty-cart.svg";
import removeIcon from "./images/icon-remove-item.svg";
import carbonIcon from "./images/icon-carbon-neutral.svg";

function Shop() {
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const orderTotal = cart.reduce(
    (total, item) => total + Number(item.price * item.quantity),
    0
  );

  const quantityTotal = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleOrderConfirmed = () => {
    setIsOrderConfirmed(true);
  };

  return (
    <div>
      <h1 className="text-rose-950 font-redHatBold text-4xl text-left mb-3">
        Desserts
      </h1>

      <div className="lg:flex lg:gap-4 items-start">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <Item
            itemImage={waffleMobile}
            itemImageDesktop={waffleDesktop}
            thumbNail={waffleThumb}
            title="Waffle"
            itemName="Waffle with Berries"
            addToCart={addToCart}
            price="6.50"
            id={0}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={cremeMobile}
            itemImageDesktop={cremeDesktop}
            thumbNail={cremeThumb}
            title="Crème Brûlée"
            itemName="Vanilla Bean Crème Brûlée"
            addToCart={addToCart}
            price="7.00"
            id={1}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={macaronMobile}
            itemImageDesktop={macaronDesktop}
            thumbNail={macaronThumb}
            title="Macaron"
            itemName="Macaron Mix of Five"
            addToCart={addToCart}
            price="8.00"
            id={5}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={tiramisuMobile}
            itemImageDesktop={tiramisuDesktop}
            thumbNail={tiramisuThumb}
            title="Tiramisu"
            itemName="Classic Tiramisu"
            addToCart={addToCart}
            price="5.50"
            id={6}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={baklavaMobile}
            itemImageDesktop={baklavaDesktop}
            thumbNail={baklavaThumb}
            title="Baklava"
            itemName="Pistachio Baklava"
            addToCart={addToCart}
            price="4.00"
            id={7}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={meringueMobile}
            itemImageDesktop={meringueDesktop}
            thumbNail={meringueThumb}
            title="Pie"
            itemName="Lemon Meringue Pie"
            addToCart={addToCart}
            price="5.00"
            id={8}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={cakeMobile}
            itemImageDesktop={cakeDesktop}
            thumbNail={cakeThumb}
            title="Cake"
            itemName="Red Velvet Cake"
            addToCart={addToCart}
            price="4.50"
            id={9}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={brownieMobile}
            itemImageDesktop={brownieDesktop}
            thumbNail={brownieThumb}
            title="Brownie"
            itemName="Salted Caramel Brownie"
            addToCart={addToCart}
            price="4.50"
            id={10}
            onQuantityChange={updateQuantity}
          />
          <Item
            itemImage={pannaMobile}
            itemImageDesktop={pannaDesktop}
            thumbNail={pannaThumb}
            title="Panna Cotta"
            itemName="Vanilla Panna Cotta"
            addToCart={addToCart}
            price="6.50"
            id={11}
            onQuantityChange={updateQuantity}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl">
          <h1 className="font-redHatBold text-thisRed text-2xl mb-7">
            Your Cart ({quantityTotal})
          </h1>

          {cart.length === 0 && (
            <div className="whitespace-nowrap font-redHatSemibold text-Rose900 flex flex-col gap-4 grow-0">
              <img src={emptyCart} />
              Your added items will appear here
            </div>
          )}

          {cart.length >= 1 && (
            <div className="flex flex-col gap-4 grow-0">
              {cart.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between mx-4 mb-4 border-b border-Rose100">
                    <div className="flex flex-col gap-1">
                      <div className="font-redHatSemibold text-Rose900">
                        {item.itemName}
                      </div>
                      <div className="flex gap-4 mb-4">
                        <div className="font-redHatSemibold text-thisRed">
                          {item.quantity}x
                        </div>
                        <div className="font-redHatSemibold text-Rose300">
                          @ ${item.price}
                        </div>
                        <div className="font-redHatSemibold text-Rose400">
                          ${item.quantity * item.price}
                        </div>
                      </div>
                    </div>
                    <img
                      src={removeIcon}
                      className="cursor-pointer border px-0.5 py-0.5 border-Rose300 rounded-2xl"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              ))}

              <div className="flex justify-between mx-4">
                <p className="font-redHatRegular text-Rose500">Order Total</p>
                <p className="font-redHatBold text-2xl text-Rose900">
                  ${orderTotal}
                </p>
              </div>

              <div className="bg-Rose100 rounded p-4 flex justify-center gap-4 mx-4 font-redHatRegular text-Rose900 whitespace-nowrap">
                <img src={carbonIcon} />
                <p>
                  This is a{" "}
                  <span className="font-redHatBold">carbon-neutral</span>{" "}
                  delivery
                </p>
              </div>

              <button
                className="bg-thisRed font-redHatSemibold text-Rose50 rounded-full w-full p-4"
                onClick={handleOrderConfirmed}
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>

      {isOrderConfirmed && quantityTotal > 0 && (
        <OrderConfirmation cart={cart} orderTotal={orderTotal} />
      )}
    </div>
  );
}

export default Shop;
