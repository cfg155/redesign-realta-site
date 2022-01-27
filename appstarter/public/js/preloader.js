let superContainer = document.querySelector('.super__container')
let svgPreloader = document.getElementById('preload-container')

svgPreloader.style.transition = 'opacity 1s'

window.addEventListener('load',()=>{
    svgPreloader.style.opacity = '0'
    setTimeout(() => {
        superContainer.style.opacity = '1'
        superContainer.style.backgroundColor = '#fafafa'

        setTimeout(() => {
            svgPreloader.remove()
        }, 500);
    }, 500);
})