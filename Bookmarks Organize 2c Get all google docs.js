import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allGoogleDocsURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `docs.google.com`){
        allGoogleDocsURLs.push(b.url)
    }
})

allGoogleDocsURLs = [...new Set(allGoogleDocsURLs)]
console.log(allGoogleDocsURLs.length)
fs.writeFileSync('./All Google Docs URLs, Total: ' + allGoogleDocsURLs.length, JSON.stringify(allGoogleDocsURLs))