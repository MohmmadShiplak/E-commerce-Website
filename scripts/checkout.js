
import { loadCart } from '../data/cart.js';
import { LoadProducts, LoadProductsFetch } from '../data/products.js';
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

//import '../data/backend-practice.js'
//import '../data/cart-class.js'

Promise.all([
LoadProductsFetch(),
new Promise((resolve)=>{
LoadProducts(()=>{
resolve();
})

}),


new Promise((resolve)=>{

loadCart(()=>{

resolve();  
})


})


]).then(()=>{

renderOrderSummary();
renderPaymentSummary()


})






/*
new Promise((resolve)=>{

LoadProducts(()=>{

resolve('value1');
});


}).then((value1)=>{
     console.log(value1)
     return new Promise((resolve)=>{
loadCart(()=>{

    resolve();
});


}) .then(()=>{
renderOrderSummary();
renderPaymentSummary()

})

})

*/

/*
LoadProducts(()=>

loadCart(()=>{
renderOrderSummary();
renderPaymentSummary()

})


)
*/

/*
LoadProducts(()=>{

renderOrderSummary()
renderPaymentSummary()

});
*/