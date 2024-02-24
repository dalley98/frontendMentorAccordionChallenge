let accordions = document.querySelectorAll('.container');

for(i = 0; i < accordions.length; i++){
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active")

        // Hide other accordion contents
        let siblings = this.parentElement.querySelectorAll('.container');
        siblings.forEach(sibling => {
            if (sibling !== this) {
                sibling.classList.remove('active');
            }
        });
    })
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        let focusedElement = document.activeElement;

        if(focusedElement.classList.contains('container')){
            let accordionContent =focusedElement.nextElementSibling;
            focusedElement.classList.toggle('active');
            accordionContent.classList.toggle('active');
        }
    }
});
