
import {cart} from '../../data/cart.js'
import { GetProduct } from '../../data/products.js';
import { GetDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import { addOrder } from '../../data/order.js';
export function renderPaymentSummary()
{
let productPriceCents =0;
let shippingPriceCents=0
    cart.forEach(cartItem => {
        const product =GetProduct(cartItem.productId)
 productPriceCents +=   product.priceCents*cartItem.quantity;


 const deliveryOption=GetDeliveryOption(cartItem.deliveryOptionId);
 shippingPriceCents+=deliveryOption.priceCents
    });

const totalBeforeTaxCents =productPriceCents+shippingPriceCents;
const taxCents =totalBeforeTaxCents*0.1;
const totalCents =totalBeforeTaxCents+taxCents;


const payementSummaryHTML =

`
        <div class="payment-summary-title">
                    Order Summary
                </div>

                <div class="payment-summary-row">
                    <div>Items (3):</div>
                    <div class="payment-summary-money">
                    $${formatCurrency(productPriceCents)}
                    </div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">
                    $${formatCurrency(shippingPriceCents)}
                    </div>
                </div>

                <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">
                    $${formatCurrency(totalBeforeTaxCents)}
                    </div>
                </div>

                <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">
                    $${formatCurrency(taxCents)}
                    </div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">
                    $${formatCurrency(totalCents)}
                    </div>
                </div>

                <button class="place-order-button button-primary js-place-order">
                    Place your order
                </button>


`;

document.querySelector(`.js-payment-summary`)
.innerHTML=payementSummaryHTML


try 
{
    
 document.querySelector('.js-place-order')
.addEventListener(('click'),async ()=>{

const response =await fetch('https://supersimplebackend.dev/orders',{

method:'POST',
headers:{

'Content-Type':'application/json'
},

body:JSON.stringify({
    cart:cart

})

})

const order =await response.json();
addOrder(order)

window.location.href='orders.html';

})

} 
catch (error) {
  console.log('unexpected error : try again later')
}



}

