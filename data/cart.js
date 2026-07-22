export let cart=[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}];
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

  export function removingfromcart(productId)
  {
    const newCart=[];
    cart.forEach((item)=>{
      if(item.productId!==productId)
      {
        newCart.push(item);
      }

    });
    cart=newCart;
  }