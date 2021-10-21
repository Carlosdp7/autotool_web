import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <button
      type="submit"
      className={`${addToCartStyle} mt-4`}
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Añadir al carrito" : "No disponible"}
    </button>
  )
}
