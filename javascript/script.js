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



