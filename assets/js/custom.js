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
      // Show the preloader
      preloader.style.display = 'flex';
  
      // Set a minimum display time (1 second in this example)
      const minimumDisplayTime = 100;
  
      // Get the start time
      const startTime = new Date().getTime();
  
      // Calculate the time to wait before hiding the preloader
      const delayTime = Math.max(0, minimumDisplayTime - (new Date().getTime() - startTime));
  
      // Hide the preloader after the minimum display time
      setTimeout(function () {
        preloader.style.display = 'none';
      }, delayTime);
    }
  });

  // const preloader = document.getElementById('preloader');

  // window.addEventListener('load', function () {
  //   if (preloader) {
  //     // // Show the preloader
  //     // preloader.style.display = 'flex';
  
  //     // Set a minimum display time (1 seconds in this example)
  //     const minimumDisplayTime = 1000;
  
  //     // Get the start time
  //     const startTime = new Date().getTime();
  
  //     // Use setTimeout to hide the preloader after the minimum display time
  //     setTimeout(function () {
  //       const currentTime = new Date().getTime();
  //       const elapsedTime = currentTime - startTime;
  
  //       // Calculate the remaining time to meet the minimum display time
  //       const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);
  
  //       // Use setTimeout again to hide the preloader after the remaining time
  //       setTimeout(function () {
  //         preloader.style.display = 'none';
  //       }, remainingTime);
  //     }, 0); // Use 0 for timeout to allow the browser to render the preloader before starting the timeout
  //   }
  // });
  














   // Get all buttons with the class 'spinner-button'
   const buttons = document.querySelectorAll('.spinner-button');

   // Iterate over each button and attach the event listener
   buttons.forEach(button => {
       button.addEventListener('click', function () {
           const submitText = button.querySelector('span'); // Get the submit text element
           const spinner = button.querySelector('.spinner');

           // Get the initial height of the button
           const initialHeight = button.offsetHeight;

           // Set a fixed height for the button to prevent changing size
           button.style.height = `${initialHeight}px`;

           // Hide submit text and show spinner
           submitText.style.display = 'none';
           spinner.classList.remove('d-none');

           // Simulate loading process - replace with your actual task
           setTimeout(() => {
               // Hide spinner and show submit text again
               spinner.classList.add('d-none');
               submitText.style.display = '';

               // Reset the height of the button to its initial value
               button.style.height = '';
           }, 2000);
       });
   });

