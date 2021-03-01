

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
   