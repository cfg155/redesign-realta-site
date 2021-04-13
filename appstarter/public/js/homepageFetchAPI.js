async function fetchAPI(URL){
    let fetchURL = await fetch(URL)
    let response = await fetchURL.json()

    console.log(response)
}

fetchAPI('./json/homepage.json')
    .then((response)=> {
        console.log(response)
    })