// Show Description 
function showText(id) {
  document.getElementById(id).style.visibility = "visible";
}

function hideText(id) {
  document.getElementById(id).style.visibility = "hidden";
}

// Load text file and insert into the page
fetch("welcome.txt")
  .then(response => response.text())
  .then(data => {
    document.getElementById("welcome-text").innerText = data;
  })
  .catch(error => console.error("Error loading welcome text:", error));


// Load open hours / closing hours
function UpdateShopStatus(){
  const now = new Date();
  const hours = now.getHours();
  const openHour = 9;
  const closedHour = 18;

  const IsOpen = (hours >=  openHour && hours <= closedHour)

  const StatusElement = document.getElementById("shop-status");
  if (IsOpen){
    StatusElement.innerText="✅ Wij zijn open! Kom lekker binnen.";
    StatusElement.style.color="green";
  } else{
    StatusElement.style.color="red";
    StatusElement.innerText="❌ Wij zijn helaas dicht! Vanaf 9 s'morgens zijn wij weer open.";
  }
  
}

UpdateShopStatus();

  setInterval(UpdateShopStatus, 60000);


  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
