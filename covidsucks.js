// var itemName = new Array;
// var itemLocation = new Array;
// var itemDescription = new Array;
//
// itemName.push('Rice');
// itemLocation.push('Los Angeles');
// itemDescription.push('I have rice');
//
// for(i=0; i<itemName.length; i++){
//   document.querySelector("#resourceList").innerHTML += "Item: " + itemName;
// }

// document.querySelector("#submit").addEventListener("click", function(){
//   newhtml = "Item: " + document.querySelector("#item").value + "<br>";
//   newhtml += "Location: " + document.querySelector("#location").value + "<br>";
//   newhtml += "Description: " + document.querySelector("#description").value + "<br><br>";
//   document.querySelector("#addNew").innerHTML += newhtml;
// });

$(document).ready(function(){
  $(".itemI").hide();
});

var checkItem = function(){
  if(document.getElementById('food').checked){
    $("#foodI").show();
  }
  if(document.getElementById('water').checked){
    $("#waterI").show();
  }
  if(document.getElementById('firstAid').checked){
    $("#aidI").show();
  }
  if(document.getElementById('medicine').checked){
    $("#medI").show();
  }
  if(document.getElementById('tp').checked){
    $("#tpI").show();
  }
  if(document.getElementById('toiletries').checked){
    $("#toilI").show();
  }
  if(document.getElementById('pickme').checked){
    $(".pickup").show();
    $(".delivery").hide();
  }
  if(document.getElementById('deliverme').checked){
    $(".pickup").hide();
    $(".delivery").show();
  }
}

document.querySelector("#submitForm").addEventListener("click", function(){
  checkItem();
})
