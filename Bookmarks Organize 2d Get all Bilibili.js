import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allBilibiliURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname.includes(`bilibili.com`) || hostname == 'www.bilibili.com'){
        allBilibiliURLs.push(b.url)
    }
})

allBilibiliURLs = [...new Set(allBilibiliURLs)]
console.log(allBilibiliURLs.length)
fs.writeFileSync('./All Bilibili URLs, Total: ' + allBilibiliURLs.length, JSON.stringify(allBilibiliURLs))