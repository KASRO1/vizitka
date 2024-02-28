

function animation_writing_text(el, speed, text, text_remove = true, font_size = 100){
    const animation_text = document.getElementById(el);
    if(text_remove){
        animation_text.innerHTML = "";
    }
    animation_text.style.fontSize = font_size;
    let i = 0;
    function typing(){
        if(i < text.length){
            animation_text.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
setTimeout(function(){
    animation_writing_text('animation_text', 150, 'Готов знакомиться?');
    setTimeout(()=>{
        animation_writing_text('animation_text', 150, 'Меня зовут Никита', font_size=100);
    }, 4000)

}, 2000)
document.addEventListener("DOMContentLoaded", function () {
    let bannerContent = document.getElementById("banner_content");
    let bannerWidth = document.querySelector(".banner_section").offsetWidth;
    let contentWidth = bannerContent.offsetWidth;

    if (contentWidth > bannerWidth) {
        bannerContent.style.animation = `slideText 50s linear 0s infinite, slideTextRepeat 50s linear 50s infinite`;
    }
});