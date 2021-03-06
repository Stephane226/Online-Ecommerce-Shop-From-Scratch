

var productItem = document.getElementsByClassName('style-products-item');
var i;

for(i=0; i < productItem.length; i++){
    
    productItem[i].addEventListener('mouseover', showUl);
    productItem[i].addEventListener('mouseout', hideUl);


  

function showUl(event){

    var targetElem = event.target.parentElement;
   // var firstImgSrc = targetElem.getElementsByTagName('img')[0];
    targetElem.getElementsByTagName('ul')[0].style.display = 'block';
      
     
  
    
      
   
                 
 }

 function hideUl(event){

    var targetElem = event.target.parentElement;
    targetElem.getElementsByTagName('ul')[0].style.display = 'none'; 
                 
 }


   
}



    var imgCont = document.getElementById('imgCont');
    var imgList = imgCont.getElementsByTagName('img');
  
    var u ;
    for(u=0; u < imgList.length; u++){
        imgList[0].addEventListener('mouseover', function(event){
              event.target.src = 'images/products/stylesCreationsSecong0.jpg'
        })
        imgList[0].addEventListener('mouseout', function(event){
            event.target.src = 'images/products/stylesCreationsA1.jpg'
      })


      imgList[1].addEventListener('mouseover', function(event){
        event.target.src = 'images/products/stylesCreationsSecong1.jpg'
  })
  imgList[1].addEventListener('mouseout', function(event){
      event.target.src = 'images/products/stylesCreationsB1.jpg'
})
         


imgList[2].addEventListener('mouseover', function(event){
    event.target.src = 'images/products/stylesCreationsSecong2.jpg'
})
imgList[2].addEventListener('mouseout', function(event){
  event.target.src = 'images/products/stylesCreationsC1.jpg'
})
      


imgList[3].addEventListener('mouseover', function(event){
    event.target.src = 'images/products/stylesCreationsSecong3.jpg'
})
imgList[3].addEventListener('mouseout', function(event){
  event.target.src = 'images/products/stylesCreationsD1.jpg'
})

        

      
        
        
        
      
    }
   
    //close the shopping cart

    let closeCart = document.getElementById('close-shopping-cart');
    closeCart.addEventListener('click', function(){
        document.getElementsByClassName('shopping-cart-pop')[0].style.display = 'none';
    })
   //show the shopping cart
    let showCart = document.getElementById('show-cart');
    showCart.addEventListener('click', showCartFunction);

    function showCartFunction(){
        document.getElementsByClassName('shopping-cart-pop')[0].style.display = 'block';
    }



    //Function when hovering products show information about that specific product

    var productItemHover = document.getElementsByClassName('button-products-item');

    var y;
    for(y=0; y < productItemHover.length; y++){

        var imgProductItemHover = productItemHover[y].getElementsByTagName('button')[0];
        imgProductItemHover.addEventListener('click', showDescProdc);
        imgProductItemHover.addEventListener('click', hideDescProdc);
      

    }
let booleans = true;
    function showDescProdc(event){


        var parentShowDescProdc = event.target.parentElement.parentElement;
        console.log(parentShowDescProdc);
        var shortDescription = parentShowDescProdc.getElementsByClassName('hover-descritpion-products')[0];
        shortDescription.style.display = 'block';
        booleans = false


        
      

    }
function hideDescProdc(event){
    var parentShowDescProdc = event.target.parentElement.parentElement;
    var shortDescription = parentShowDescProdc.getElementsByClassName('hover-descritpion-products')[0];
    shortDescription.style.display = 'none'
}