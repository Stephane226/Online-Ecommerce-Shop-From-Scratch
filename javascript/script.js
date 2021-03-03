//styling for the feature and highlight icons

var featureHIcons = document.getElementsByClassName('icon-feature-items');
for(i=0; i<featureHIcons.length; i++){
  
    featureHIcons[i].addEventListener("mouseover", function(event){
      event.target.style.color = "white"
    })
    featureHIcons[i].addEventListener("mouseout", function(event){
        event.target.style.color = "gray"
      })
}



//Hovering products


//adding products to the basket
var addProductToBasketButton = document.getElementsByClassName('button-add');
var b;
for(b=0; b < addProductToBasketButton.length; b++){

  addProductToBasketButton[b].addEventListener('click', addProductToBasket)
}

function addProductToBasket(event){
    var productParent = event.target.parentElement.parentElement;
      
    var images = productParent.getElementsByTagName('img')[0];
     var productTitle = productParent.getElementsByClassName('product-title-name')[0];

     var AddToCartRow = `
        
     <div class="one-shoping-element">
                        <div class="one-shop-img">
                            <img src="${images.src}" alt="">
                        </div>
                        <div class="one-shop-title-price">
                            <h3>${productTitle}</h3>
                            <span>$79</span>
                        </div>
                        <div class="one-shop-remove-numb">
                             <span>  <i class="fas fa-times"></i> </span>
                             <div class="numb-set">
                                <i class="fas fa-angle-up"></i>
                                  <span>2</span>
                                   <i class="fas fa-angle-down"></i>
                             </div>
                        </div>
                      </div>
     
     
     `;
     var div = document.createElement('div');
     div.innerHTML = AddToCartRow;
var shoppingCartUi = document.getElementById('shopping-card-parent-content');

shoppingCartUi.appendChild(div);


var deleteIcon = document.getElementsByClassName('fa-times')[0];
deleteIcon.addEventListener('click', deleteItemFromCart);

function deleteItemFromCart(){
  productParent.remove()
}

///show the card
showCartFunction()

}