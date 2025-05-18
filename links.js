

const links = {
    "links":[
        {"linkName":"Link Name", "href":"https://remeil.co.nz/", "favicon":"https://remeil.co.nz/favicon-16x16.png"},
        {"linkName":"Keiran's Sandbox", "href":"https://remeil.co.nz/", "favicon":"https://remeil.co.nz/favicon-16x16.png"},
        {"linkName":"Pokedex", "href":"https://pokedex.remeil.co.nz/", "favicon":"https://remeil.co.nz/favicon-16x16.png"},
        {"linkName":"Status Widget", "href":"https://remeil.co.nz/status.html", "favicon":"https://remeil.co.nz/favicon-16x16.png"}
    ]
}
function createLinksElements() {
let linksList = ""
for (let i = 0;i < links.links.length; i++) {
    linksList += '<li><a href=\"' + links.links[i].href + '\" target=\"_blank\"><img height=\"18px\" src=\"' + links.links[i].favicon + '\" /> ' + links.links[i].linkName + '</a></li>'
}
    document.getElementById("linksUL").innerHTML = linksList
}

createLinksElements()


