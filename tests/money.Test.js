import {formatCurrency} from '../scripts/utils/Money.js'





console.log('test suite : formatCurrency')

console.log('convets cents into dollars')

if(formatCurrency(2095) ==='20.95')
{
console.log('Passed')   
}
else
{
    console.log('failed')
}

console.log('works with 0')
if(formatCurrency(0) ==='0.00')
    {
    console.log('Passed')   
    }
    else
    {
        console.log('failed')
    }

    console.log('rounds up to the nearest cents')

    if(formatCurrency(2000.5) ==='20.01')
        {
        console.log('Passed')   
        }
        else
        {
            console.log('failed')
        }



      
