export function formatCurrency(amount: number, currencyCode: string = "USD"): string {
   try {
      return new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: currencyCode.toUpperCase()
      }).format(amount)
   } catch (error) {
      // Fallback formatting it currency code in invalid
      console.error("Inavlid currency code:", currencyCode, error)
      return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`
   }
}