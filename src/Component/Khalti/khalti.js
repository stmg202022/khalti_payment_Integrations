import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

const Khalti = () => {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };

  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: 1000 })}
        style={buttonStyles}
      >
        pay Vai khalti
      </button>
    </div>
  );
};

export default Khalti;
