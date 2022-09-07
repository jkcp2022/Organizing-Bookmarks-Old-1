import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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
fs.writeFileSync('./All Codespaces URLs, Total: ' + allCodespacesURLs.length, JSON.stringify(allCodespacesURLs))