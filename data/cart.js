export const cart=[];
export function addingtocart(productId)
{
  let matchingitem=false;
    cart.forEach((item)=>{
      if(productId===item.productId)
      {
        item.quantity=item.quantity+1;
        matchingitem=true;

      }
    });
    if (matchingitem===false)
    { 
      cart.push({ 
      productId :productId,
      quantity:1
        }
      );
    }
    console.log(cart);
  }
