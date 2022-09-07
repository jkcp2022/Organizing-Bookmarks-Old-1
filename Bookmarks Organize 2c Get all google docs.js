import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
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
fs.writeFileSync('./Results/All Google Docs URLs, Total: ' + allGoogleDocsURLs.length, JSON.stringify(allGoogleDocsURLs))