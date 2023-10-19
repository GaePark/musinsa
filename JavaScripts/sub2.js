// 메뉴
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("headertop").style.top = "0";
    } else {
        document.getElementById("headertop").style.top = "-60px";
    }
    prevScrollpos = currentScrollpos;
}

function myFunction(smallImg) {
    var fullImg = document.getElementById("commodity-b1");
    fullImg.src = smallImg.src;
  }
  
  let quantity = 1
  let cell = 71250
  
  let minus = () => {
    if(quantity > 1) {
      quantity -= 1
      document.getElementById("quantity").innerText = quantity
      document.getElementById("cell").innerText = quantity * cell
    } else {
  
    }
  }
  
  let plus = () => {
    if(quantity < 10) {
      quantity += 1
      document.getElementById("quantity").innerText = quantity
      document.getElementById("cell").innerText = quantity * cell
    } else {
      
    }
  }