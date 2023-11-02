$(function() {
    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });
  });

  $(function() {
    $('#mobile-main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });
    

    feather.replace();

  });



  let year = new Date().getFullYear()
  // console.log(year);
  document.getElementById("current-year").textContent=year;



  document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#home-main-slider' ).mount();


    var splide2 = new Splide( '#category-slider', {
              type    : 'loop',
              autoplay: 'pause',
              fixedWidth : '220px',
              gap        : '1rem',
              pagination:false,
            } ).mount();

  } );



