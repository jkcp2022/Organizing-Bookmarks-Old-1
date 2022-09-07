import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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