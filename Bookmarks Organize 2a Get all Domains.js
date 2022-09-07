import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allDomains = []
allBookmarks.forEach(b => {
    allDomains.push(new URL(b.url).hostname)
})

allDomains = [...new Set(allDomains)]
console.log(allDomains.length)
fs.writeFileSync('./All Domains, Total: ' + allDomains.length, JSON.stringify(allDomains))