import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allBingURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `bing.com` || hostname == 'www.bing.com'){
        allBingURLs.push(b.url)
    }
})

allBingURLs = [...new Set(allBingURLs)]
console.log(allBingURLs.length)
fs.writeFileSync('./All Bing URLs, Total: ' + allBingURLs.length, JSON.stringify(allBingURLs))