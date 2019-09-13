let url = "https://api.hgbrasil.com/finance"

fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })