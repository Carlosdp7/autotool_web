import * as React from "react"
import {
  input,
  currencySymbol,
  wrap,
  symbolAfter,
} from "./currency-field.module.css"

export function CurrencyField({
  symbol,
  symbolAtEnd,
  style,
  className,
  name,
  ...props
}) {
  return (
    <span
      className={[className, wrap, symbolAtEnd && symbolAfter]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <span className={currencySymbol}>{symbol}</span>
      <input
        type="numeric"
        className={input}
        placeholder={name}
        data-currency={symbol}
        {...props}
      />
    </span>
  )
}
