import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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