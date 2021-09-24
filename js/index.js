
// Search hide/show js 
let search_btn = document.querySelector('.search-icon');
let main_search = document.querySelector('.main-search');
let check = true;
function search_hideshow() {
    if (check) {
        main_search.style.width = '100%';
        check = false;
    }
    else {
        main_search.style.width = '0';
        check = true;
    }

}
search_btn.addEventListener('click', search_hideshow);




// CAROUSAL SLIDER CODE 
let carousal_track_left = document.querySelector('.carousal_track');
let carousal_track = document.querySelector('.carousal_track').children;
let slides = Array.from(carousal_track);

let get_slide_info = slides[0].getBoundingClientRect();
let slideWidth = get_slide_info.width;


const Add_left = (element, index) => {
    element.style.left = slideWidth * index + 'px';
}
let addition = 1;
const sliding = ()=>{
    if (addition < slides.length) {
        carousal_track_left.style.transform = 'translateX(-' + slideWidth * addition + 'px)';
        addition += 1;
    }
    else {
        carousal_track_left.style.transform = 'translateX(' + 0 + 'px)';
        addition = 1;
    }
}
let speed = 3000;
slides.forEach(Add_left);
setInterval(() => {
    sliding();
}, speed);
