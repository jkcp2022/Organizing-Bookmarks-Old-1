import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allGoogleSearchURLs = []
allBookmarks.forEach(b => {
    let urlObj = new URL(b.url)
    let hostname = urlObj.hostname
    let pathname = urlObj.pathname
    if((hostname == `google.com` || hostname == 'www.google.com') && pathname == '/search'){
        allGoogleSearchURLs.push(b.url)
    }
})

allGoogleSearchURLs = [...new Set(allGoogleSearchURLs)]
console.log(allGoogleSearchURLs.length)
fs.writeFileSync('./All Google Search URLs, Total: ' + allGoogleSearchURLs.length, JSON.stringify(allGoogleSearchURLs))