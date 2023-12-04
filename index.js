const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImage = document.querySelectorAll(".option_image");

optionImage.forEach((image, index) => {
    image.addEventListener("click", () => {
        image.classList.add("active");

        optionImage.forEach((image2, index2) =>{
            console.log(index, index2);
        })
    })
})
