import initTilt from './js/tilt';
import initSr from './js/sr';
import images from './js/images';
import './style/main.scss';

// Update image sources
document.addEventListener('DOMContentLoaded', () => {
  // Update favicon
  document.querySelector("link[rel='shortcut icon']").href = images.favicon;
  
  // Update profile image
  document.querySelector("#about img").src = images.profile;
  
  // Update project images
  const projectImages = {
    'project-0': images.aws,
    'project-1': images.project,
    'project-2': images.quiz,
    'project-3': images.ux
  };
  
  Object.entries(projectImages).forEach(([id, src]) => {
    const img = document.querySelector(`#${id} .img-fluid`);
    if (img) img.src = src;
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
