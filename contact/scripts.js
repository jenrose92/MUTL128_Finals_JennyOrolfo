// adding clasa to selected elements
$('h2').addClass("poppins-light");

$('h4').addClass("poppins-light");

// h5
$('h5').addClass("poppins-light");


// h6
$('h6').addClass("poppins-regular");


$('p').addClass("poppins-regular");


function resize() {
    if ($(window).width() < 700) {
      $('#aboutme').removeClass('col-6').addClass('col');
    }
  }

  //watch window resize
$(window).on('resize', function() {
    resize()
  });



  const aboutmenow = document.getElementById("aboutme");
  const coltools = document.getElementById("col-tols");
  const colskills = document.getElementById("col-skills");

  const smallDevice = window.matchMedia("(max-width: 600px)");
  
  smallDevice.addListener(handleDeviceChange);
  
  function handleDeviceChange(e) {
    if (e.matches) {

        aboutmenow.classList.remove('col-6');
        aboutmenow.classList.add('col-12');
    
        coltools.classList.remove('col-6');
        coltools.classList.add('col-12');
    
        colskills.classList.remove('col-6');
        colskills.classList.add('col-12');
       
    }

    
   
    else {

        aboutmenow.classList.remove('col-12');
        aboutmenow.classList.add('col-6');
    
        coltools.classList.remove('col-12');
        coltools.classList.add('col-3');
    
        colskills.classList.remove('col-12');
        colskills.classList.add('col-3');
    }

   
    
  }
  
  // Run it initially
  handleDeviceChange(smallDevice);
  



