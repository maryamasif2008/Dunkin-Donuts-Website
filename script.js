document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero-slider");
    const images = [
      'url("https://dunkindonuts.com.pk/public/assets/landing/images/baner1.webp")',
      'url("https://dunkindonuts.com.pk/public/assets/landing/images/banner-3.jpg")',
      'url("https://dunkindonuts.com.pk/public/assets/landing/images/Donut-banner-design-2.webp")'
    ];
    
    let currentImageIndex = 0;
  
    function changeBackgroundImage() {
      heroSection.style.backgroundImage = images[currentImageIndex];
      
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    setInterval(changeBackgroundImage, 5000);
  
    changeBackgroundImage();
  });
  