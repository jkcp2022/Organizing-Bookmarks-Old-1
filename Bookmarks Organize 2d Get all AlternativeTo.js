

import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allAlternativeToURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `alternativeto.net` || hostname == 'www.alternativeto.net'){
        allAlternativeToURLs.push(b.url)
    }
})

allAlternativeToURLs = [...new Set(allAlternativeToURLs)]
console.log(allAlternativeToURLs.length)
fs.writeFileSync('./All AlternativeTo URLs, Total: ' + allAlternativeToURLs.length, JSON.stringify(allAlternativeToURLs))