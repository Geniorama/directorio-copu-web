export const formatCurrency = (price:number, locale:string, currency:string) => {
    // Format the price above to USD using the locale, style, and currency.
    let convertion = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0
    });

    return convertion.format(price)
}