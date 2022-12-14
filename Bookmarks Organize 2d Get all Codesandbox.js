import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allCodesandboxURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `codesandbox.io` || hostname == 'www.codesandbox.io'){
        allCodesandboxURLs.push(b.url)
    }
})

allCodesandboxURLs = [...new Set(allCodesandboxURLs)]
console.log(allCodesandboxURLs.length)
fs.writeFileSync('./Results/All CodeSandbox URLs, Total: ' + allCodesandboxURLs.length, JSON.stringify(allCodesandboxURLs))