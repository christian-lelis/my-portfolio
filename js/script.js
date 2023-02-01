const target = document.querySelectorAll('[data-slide]')
const animationClass = 'animation'
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


function animationScroll(){
    const windowTop= window.pageYOffset + window.innerHeight*0.75;
    target.forEach(function (elemento){
      console.log(elemento)
        if(windowTop > elemento.offsetTop){
            elemento.classList.add(animationClass)
        }
        console.log(elemento.offsetTop)
    })
}

window.addEventListener('scroll', debounce(function(){
    animationScroll()
},100));