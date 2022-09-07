import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allCodespacesURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(t){
        allCodespacesURLs.push(b.url)
    }
})

allCodespacesURLs = [...new Set(allCodespacesURLs)]
console.log(allCodespacesURLs.length)
fs.writeFileSync('./Results/All Codespaces URLs, Total: ' + allCodespacesURLs.length, JSON.stringify(allCodespacesURLs))