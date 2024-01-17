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
    


  });



  const preloader = document.getElementById('preloader');

  window.addEventListener('load', function () {
    if (preloader) {
      // // Show the preloader
      // preloader.style.display = 'flex';
  
      // Set a minimum display time (1 seconds in this example)
      const minimumDisplayTime = 1000;
  
      // Get the start time
      const startTime = new Date().getTime();
  
      // Use setTimeout to hide the preloader after the minimum display time
      setTimeout(function () {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
  
        // Calculate the remaining time to meet the minimum display time
        const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);
  
        // Use setTimeout again to hide the preloader after the remaining time
        setTimeout(function () {
          preloader.style.display = 'none';
        }, remainingTime);
      }, 0); // Use 0 for timeout to allow the browser to render the preloader before starting the timeout
    }
  });
  












