
import { LoadProducts } from '../data/products.js';
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

//import '../data/backend-practice.js'
//import '../data/cart-class.js'

LoadProducts(()=>{

renderOrderSummary()
renderPaymentSummary()

});
