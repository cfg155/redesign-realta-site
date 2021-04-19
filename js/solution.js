import solutionData from './solutionData.js'

function generateCategory(){
    let data = []
    data.push(solutionData[0].category)
    let dataCount = data[0].length 

    let cardContainer = ""

    data[0].forEach(item => {
        cardContainer += 
        `
        <div class="category__card col-md-6">
        <img src="assets/${item.headerIMG_URL}" class="category__card--header w-100">
        <div class="category__card--title my-3">
            <div class="logo"></div>
            <h2>${item.title}</h2>
        </div>
        <div class="category__card--tag my-2">${item.tag}</div>
        <div class="category__card--body w-100 text-justify my-3">${item.body}</div>
        </div>
        `
    })

    cardContainer += `<div class="category__card col-md-6"></div>`
    document.querySelector('.category__wrapper').innerHTML += cardContainer

}

generateCategory()