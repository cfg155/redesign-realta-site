fetch('./js/dummyJSON.json')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(item => {
            console.log(item)
        });
    })