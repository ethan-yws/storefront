/* Price Formatter eg. $28 to $28.00 */
const priceFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default priceFormatter;
