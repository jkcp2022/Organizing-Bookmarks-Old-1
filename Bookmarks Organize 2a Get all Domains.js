import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allDomains = []
/* allBookmarks.forEach(b => {
    allDomains.push(new URL(b.url).hostname)
})

allDomains = [...new Set(allDomains)]
console.log(allDomains.length)
fs.writeFileSync('./All Domains, Total: ' + allDomains.length, JSON.stringify(allDomains)) */