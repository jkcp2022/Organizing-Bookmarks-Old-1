import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allChromePagesURLs = []
allBookmarks.forEach(b => {
    let protocol = new URL(b.url).protocol
    if(protocol == `chrome:`){
        allChromePagesURLs.push(b.url)
    }
})

allChromePagesURLs = [...new Set(allChromePagesURLs)]
console.log(allChromePagesURLs.length)
fs.writeFileSync('./All Chrome Pages URLs, Total: ' + allChromePagesURLs.length, JSON.stringify(allChromePagesURLs))