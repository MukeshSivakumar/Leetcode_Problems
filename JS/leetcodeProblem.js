"use strict";


// LCM and HCF program

let numberArr = [120,200,80,25,20];

let hcfValue = hcfCalculation(numberArr);
let lcmValue = lcmCalculation(numberArr);

console.log(`HCF Value is ${hcfValue} \nLCM Value is ${lcmValue}`) 

function hcfCalculation(arr)
{

    arr.sort((a,b) => a-b);
 
    console.log(arr);
      let highestCommonDivisor = 1;
      for(let i=0; i<= arr[0] ; i++)
        {
          let factorCount = 0;

          for(let j=0; j < arr.length ; j++)
            {
              if(arr[j]%i == 0)
                {
                  factorCount++;
                }
            }

            if(factorCount == arr.length)
              {
                highestCommonDivisor = i;
              }
        }

        return highestCommonDivisor;
 
}


function lcmCalculation(arr)
{

   for(let i=1;;i++)
    {
      let multiple = arr[arr.length-1]*i;
      let count = 0;
      for(let j=0; j < arr.length ; j++)
        {
          if(multiple % arr[j] == 0)
            {
              count++;
            }
        }

        if(count == arr.length)
          {
            return multiple;
          }
    }
}
