window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


document.addEventListener("DOMContentLoaded", function() {
    let adsButton = document.querySelector(".play-button .btnn");
    let modal = document.querySelector(".modal-canvas");
  
    let closeButton = document.querySelector(".modal-close span");
  
    adsButton.addEventListener("click", function() {
      modal.classList.remove("hidden"); 
    });
  
    closeButton.addEventListener("click", function() {
      modal.classList.add("hidden"); 
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const totalElement = document.getElementById('total');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const courseSelect = document.getElementById('course');
      const quantityInput = document.getElementById('quantity');
  
      const coursePrice = parseFloat(courseSelect.value);
      const quantity = parseInt(quantityInput.value);
  
      const total = coursePrice * quantity;
  
      totalElement.textContent = `Total Cost: $${total}`;
    });
  });
  
  
