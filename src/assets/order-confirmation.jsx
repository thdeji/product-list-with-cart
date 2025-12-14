import { useEffect } from "react";
import orderConfirmedIcon from "./images/icon-order-confirmed.svg";

function OrderConfirmation({ cart, orderTotal }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div className="max-h-full bg-black/50 fixed inset-0 lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center z-50">
        <div className="bg-Rose100 flex flex-col gap-10 p-10 w-full md:w-auto rounded-2xl max-h-[80vh] overflow-y-auto fixed bottom-0 md:static md:my-auto">
          <img src={orderConfirmedIcon} className="w-20" />

          <div className="text-left">
            <h1 className="text-Rose900 font-redHatBold text-4xl mb-2">
              Order
              <br />
              Confirmed
            </h1>
            <p className="text-Rose400 font-redHatRegular">
              We hope you enjoy your food!
            </p>
          </div>

          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-4">
                    <img src={item.thumbNail} className="h-[50%]" />
                    <div className="flex flex-col gap-1">
                      <div className="font-redHatSemibold text-Rose900">
                        {item.itemName}
                      </div>
                      <div className="flex gap-4">
                        <div className="font-redHatSemibold text-thisRed">
                          {item.quantity}x
                        </div>
                        <div className="font-redHatSemibold text-Rose300">
                          @ ${item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-redHatSemibold text-Rose400">
                    ${item.quantity * item.price}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between mx-4">
              <p className="font-redHatRegular text-Rose500">Order Total</p>
              <p className="font-redHatBold text-2xl text-Rose900">
                ${orderTotal}
              </p>
            </div>
          </div>

          <button
            className="bg-thisRed font-redHatSemibold text-Rose50 rounded-full w-full p-4 hover:cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
