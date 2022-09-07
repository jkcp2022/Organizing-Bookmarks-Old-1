import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allRedditURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `reddit.com` || hostname == 'www.reddit.com'){
        allRedditURLs.push(b.url)
    }
})

allRedditURLs = [...new Set(allRedditURLs)]
console.log(allRedditURLs.length)
fs.writeFileSync('./Results/All Reddit URLs, Total: ' + allRedditURLs.length, JSON.stringify(allRedditURLs))