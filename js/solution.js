import solutionData from './solutionData.js'

function generateCategory(){
    let data = []
    data.push(solutionData[0].category)
    let dataCount = data[0].length 

    let cardContainer = ""

    data[0].forEach(item => {
        cardContainer += 
        `
        <div class="category__card">
            <img src="assets/${item.headerIMG_URL}" class="category__card--header">
            <div class="category__card--title">
                <div class="logo"></div>
                <h2>${item.title}</h2>
            </div>
            <div class="category__card--tag">${item.tag}</div>
            <div class="category__card--body">${item.body}</div>
        </div>
        `
    })

    console.log(cardContainer)

    document.querySelector('.category').innerHTML += cardContainer

}

generateCategory()