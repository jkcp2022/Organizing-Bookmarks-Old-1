import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allCodepenURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `codepen.io` || hostname == 'www.codepen.io'){
        allCodepenURLs.push(b.url)
    }
})

allCodepenURLs = [...new Set(allCodepenURLs)]
console.log(allCodepenURLs.length)
fs.writeFileSync('./Results/All Codepen URLs, Total: ' + allCodepenURLs.length, JSON.stringify(allCodepenURLs))