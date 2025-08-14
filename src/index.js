import initTilt from './js/tilt';
import initSr from './js/sr';
import { profileImage, awsImage, projectImage, quizImage, uxImage, favicon } from './js/images';
import './style/main.scss';

// Set favicon
document.querySelector('link[rel="shortcut icon"]').href = favicon;

// Set up images after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Profile image
  document.querySelector('#about img').src = profileImage;
  
  // Project images
  const projectImages = document.querySelectorAll('.project-wrapper__image img');
  projectImages.forEach((img, index) => {
    switch(index) {
      case 0:
        img.src = awsImage;
        break;
      case 1:
        img.src = projectImage;
        break;
      case 2:
        img.src = quizImage;
        break;
      case 3:
        img.src = uxImage;
        break;
    }
  });
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
