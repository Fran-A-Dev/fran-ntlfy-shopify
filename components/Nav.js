import React from "react";
import Link from "next/link";
import MiniCart from "./MiniCart";

import { useContext } from "react";
import { CartContext } from "../context/shopContext";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className="border-b sticky top-0 z-20 bg-white ">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              Fran_The_Dev&#39;s Next JS + Shopify + Netlify Demo
            </span>
          </a>
        </Link>
        <a
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}
