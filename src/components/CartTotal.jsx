//import React from 'react'

import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";

const CartTotal = () => {

    const {currency, delivey_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTALS'} />
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>{currency} {delivey_fee}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivey_fee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal