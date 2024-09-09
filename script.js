
document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    
    const buttonText = document.querySelector(".button-text");
    const loader = document.querySelector(".loader");
    buttonText.style.display = "none";
    loader.style.display = "inline-block";


    setTimeout(() => {
    loader.style.display = "none";
    buttonText.style.display = "inline-block";

    
    const leftSide = document.querySelector(".left_side");
    leftSide.style.animation = "slideDownAndDisappear 1s forwards";

    
    const rightSide = document.querySelector(".right_side_image");
    rightSide.style.animation = "scaleOutCenter 1s forwards";

    setTimeout(() => {
        rightSide.style.animation = "scaleInCenter 1.5s forwards";

    
        setTimeout(() => {
        rightSide.style.animation = "slideToRight 1s forwards";

        
        setTimeout(() => {
            leftSide.classList.remove("hidden");
            leftSide.style.animation = "slideDownReappear 1.5s forwards";
        }, 100); 
        }, 1300); 
    }, 500); 
    }, 1500); 
});

