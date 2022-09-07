import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allYoutubeURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `youtube.com` || hostname == 'www.youtube.com'){
        allYoutubeURLs.push(b.url)
    }
})

allYoutubeURLs = [...new Set(allYoutubeURLs)]
console.log(allYoutubeURLs.length)
fs.writeFileSync('./All Youtube URLs, Total: ' + allYoutubeURLs.length, JSON.stringify(allYoutubeURLs))