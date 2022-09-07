import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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