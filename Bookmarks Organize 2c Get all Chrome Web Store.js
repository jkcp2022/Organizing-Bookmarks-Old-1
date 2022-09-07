import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allCWSURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `chrome.google.com`){
        allCWSURLs.push(b.url)
    }
})

allCWSURLs = [...new Set(allCWSURLs)]
console.log(allCWSURLs.length)
fs.writeFileSync('./All CWS URLs, Total: ' + allCWSURLs.length, JSON.stringify(allCWSURLs))