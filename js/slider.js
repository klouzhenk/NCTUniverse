// ---------------- building slider --------------------

export const slider = function(el, widthSpace, numSlides){
    const element = document.querySelector(`.slider--${el}`);
    console.log(element);
    const slides = element.querySelectorAll('.slide');
    const btnLeft = element.querySelector('.arrow--prev')
    const btnRight = element.querySelector('.arrow--next')

    // console.log(element, slides, btnLeft, btnRight);

    let curSlide = 0;
    const maxSlide = slides.length;
    
    // FUNCTIONS
    const goToSlide = function(slide){
        slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * widthSpace}%)`);
    }

    // next slide

    const nextSlide = function(){
        if(curSlide === maxSlide - numSlides){          // if -2 - at the end u can see only 2 blocks
            curSlide = 0;
        }
        else{
            curSlide++;
        }
        goToSlide(curSlide);
    }

    const prevSlide = function(){
        if(curSlide === 0){
            curSlide = maxSlide - numSlides;
            // console.log(curSlide);
        }
        else{
            curSlide--;
            // console.log(curSlide);
        }
        goToSlide(curSlide);
    }

    const init = function(){
        goToSlide(0);
    }

    init();

    // event handlers
    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
}