import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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
fs.writeFileSync('./All Reddit URLs, Total: ' + allRedditURLs.length, JSON.stringify(allRedditURLs))