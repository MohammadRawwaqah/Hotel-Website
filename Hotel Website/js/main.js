let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 32.559299, lng: 35.841709 },
    zoom: 8
  })};


  // Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150 && window.scrollY < 680 ) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else if(window.scrollY > 680)
     {
      document.querySelector('#navbar').style.opacity = 0.6;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
  });
  


  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });