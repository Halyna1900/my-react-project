// src/Product.jsx
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
export default function Product({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />

      <p>
        Price: <PiCurrencyCircleDollarLight className="my-icon" size="24" />
        {price} credits
      </p>
    </>
  );
}
