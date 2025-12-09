import { useEffect, useState } from "react";
import Item from "./item-component";
import OrderConfirmation from "./order-confirmation";
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
  const startNewOrder = () => {
    setIsOrderConfirmed(false);
  };

  return (
    <div>
      <h1 className="text-rose-950 font-redHatBold text-4xl text-left mb-3">
        Desserts
      </h1>
      <div className="lg:flex lg:gap-4 items-start">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <Item
            itemImage="/src/assets/images/image-waffle-mobile.jpg"
            itemImageDesktop="/src/assets/images/image-waffle-desktop.jpg"
            title="Waffle"
            itemName="Waffle with Berries"
            addToCart={addToCart}
            price="6.50"
            id={0}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-waffle-thumbnail.jpg"
          />
          <Item
            itemImage="/src/assets/images/image-creme-brulee-mobile.jpg"
            itemImageDesktop="/src/assets/images/image-creme-brulee-desktop.jpg"
            title="Crème Brûlée"
            itemName="Vanilla Bean Crème Brûlée"
            price="7.00"
            addToCart={addToCart}
            id={1}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-creme-brulee-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-macaron-desktop.jpg"
            itemImage="/src/assets/images/image-macaron-mobile.jpg"
            title="Macaron"
            itemName="Macaron Mix of Five"
            addToCart={addToCart}
            price="8.00"
            id={5}
            onQuantityChange={updateQuantity}
            thumbNail={"/src/assets/images/image-macaron-thumbnail.jpg"}
          />
          <Item
            itemImageDesktop="/src/assets/images/image-tiramisu-desktop.jpg"
            itemImage="/src/assets/images/image-tiramisu-mobile.jpg"
            title="Tiramisu"
            itemName="Classic Tiramisu"
            addToCart={addToCart}
            price="5.50"
            id={6}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-tiramisu-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-baklava-desktop.jpg"
            itemImage="/src/assets/images/image-baklava-mobile.jpg"
            title="Baklava"
            itemName="Pistachio Baklava"
            addToCart={addToCart}
            price="4.00"
            id={7}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-baklava-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-meringue-desktop.jpg"
            itemImage="/src/assets/images/image-meringue-mobile.jpg"
            title="Pie"
            itemName="Lemon Meringue Pie"
            addToCart={addToCart}
            price="5.00"
            id={8}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-meringue-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-cake-desktop.jpg"
            itemImage="/src/assets/images/image-cake-mobile.jpg"
            title="Cake"
            itemName="Red Velvet Cake"
            addToCart={addToCart}
            price="4.50"
            id={9}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-cake-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-brownie-desktop.jpg"
            itemImage="/src/assets/images/image-brownie-mobile.jpg"
            title="Brownie"
            itemName="Salted Caramel Brownie"
            addToCart={addToCart}
            price="4.50"
            id={10}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-brownie-thumbnail.jpg"
          />
          <Item
            itemImageDesktop="/src/assets/images/image-panna-cotta-desktop.jpg"
            itemImage="/src/assets/images/image-panna-cotta-mobile.jpg"
            title="Panna Cotta"
            itemName="Vanilla Panna Cotta"
            addToCart={addToCart}
            price="6.50"
            id={11}
            onQuantityChange={updateQuantity}
            thumbNail="/src/assets/images/image-panna-cotta-thumbnail.jpg"
          />
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <h1 className="font-redHatBold text-thisRed text-2xl mb-7">
            Your Cart ({quantityTotal})
          </h1>

          {cart.length === 0 && (
            <div className="whitespace-nowrap font-redHatSemibold text-Rose900 flex flex-col gap-4 grow-0">
              <img
                src="/src/assets/images/illustration-empty-cart.svg"
                alt="illustration-empty-cart.svg"
              />
              Your added items will appear here
            </div>
          )}
          {cart.length >= 1 && (
            <div className="flex flex-col gap-4 grow-0">
              {cart.map((item) => (
                <div key={item.id}>
                  {item.quantity >= 1 && (
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
                      <div>
                        <img
                          src="/src/assets/images/icon-remove-item.svg"
                          className="cursor-pointer border px-0.5 py-0.5 border-Rose300 rounded-2xl"
                          alt="icon-remove-item"
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-between mx-4">
                <p className="font-redHatRegular text-Rose500">Order Total</p>
                <p className="font-redHatBold text-2xl text-Rose900">
                  ${orderTotal}
                </p>
              </div>
              <div className="bg-Rose100 rounded p-4 flex justify-center gap-4 mx-4 font-redHatRegular text-Rose900 whitespace-nowrap">
                <img
                  src="/src/assets/images/icon-carbon-neutral.svg"
                  alt="icon-carbon-neutral"
                />
                <p>
                  This is a
                  <span className="font-redHatBold"> carbon-neutral </span>
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
