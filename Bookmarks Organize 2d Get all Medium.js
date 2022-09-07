import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allMediumURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `medium.com` || hostname == 'www.medium.com'){
        allMediumURLs.push(b.url)
    }
})

allMediumURLs = [...new Set(allMediumURLs)]
console.log(allMediumURLs.length)
fs.writeFileSync('./All Medium URLs, Total: ' + allMediumURLs.length, JSON.stringify(allMediumURLs))