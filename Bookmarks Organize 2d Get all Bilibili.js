import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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