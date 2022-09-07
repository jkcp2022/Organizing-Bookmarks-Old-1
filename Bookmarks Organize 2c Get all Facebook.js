import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allFacebookURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `facebook.com` || hostname == 'www.facebook.com'){
        allFacebookURLs.push(b.url)
    }
})

allFacebookURLs = [...new Set(allFacebookURLs)]
console.log(allFacebookURLs.length)
fs.writeFileSync('./Results/All Facebook URLs, Total: ' + allFacebookURLs.length, JSON.stringify(allFacebookURLs))