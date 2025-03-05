
import { loadCartFetch } from '../data/cart.js';
import { LoadProducts, LoadProductsFetch } from '../data/products.js';
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

//import '../data/backend-practice.js'
//import '../data/cart-class.js'


//this is a shortcut way instead of using promise 



async function loadpage()
{

try
{

  //  await LoadProductsFetch();

    //  await loadCartFetch();
    /*
    await new Promise((resolve,reject)=>{
    loadCart(()=>{
   // reject('error8')
    resolve();

    })
    
    })
    */

await Promise.all([


loadCartFetch(),
LoadProductsFetch()

]);




    
    renderOrderSummary()
    renderPaymentSummary()

}catch(error)
{
    console.log('unexpected error . please try again later ')
}


}

loadpage()






/*

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
/*

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
