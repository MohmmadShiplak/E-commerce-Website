export function formatCurrency(priceCents)
{
//return (priceCents/100).toFixed(2)

return (Math.round(priceCents)/100).toFixed(2)
}



