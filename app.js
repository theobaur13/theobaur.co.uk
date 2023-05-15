const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('moving-image');
        } 
        else {
            entry.target.classList.remove('static-image');
        }
    });
});

const movingImage = document.querySelector('.static-image');
movingImage.forEach((element) => {observer.observe(element)});