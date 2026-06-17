fetch("./container/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if(menuToggle && navMenu){
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");

            if(navMenu.classList.contains("show")){
                menuToggle.textContent = "×";
            }else{
                menuToggle.textContent = "☰";
            }
        });
    }

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let current = 0;

    function showSlide(index){
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active-dot"));

        slides[index].classList.add("active");
        dots[index].classList.add("active-dot");
    }

    function nextSlide(){
        current++;

        if(current >= slides.length){
            current = 0;
        }

        showSlide(current);
    }

    let slideInterval = setInterval(nextSlide, 4000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            current = index;
            showSlide(current);

            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 4000);
        });
    });
});

fetch("./container/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});