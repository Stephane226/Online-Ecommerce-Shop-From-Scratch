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
    console.log(productParent);
    alert('clik')

}