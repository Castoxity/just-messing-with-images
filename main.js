let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Increment slideIndex and reset to 1 if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';
    
    // Call showSlides() again after 2 seconds (adjust as needed for timing)
    setTimeout(showSlides, 2000);
}
