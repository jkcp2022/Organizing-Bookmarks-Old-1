import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allGoogleWorkspaceMarketplace = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `workspace.google.com` ){
        allGoogleWorkspaceMarketplace.push(b.url)
    }
})

allGoogleWorkspaceMarketplace = [...new Set(allGoogleWorkspaceMarketplace)]
console.log(allGoogleWorkspaceMarketplace.length)
fs.writeFileSync('./All Google Workspace Marketplace URLs, Total: ' + allGoogleWorkspaceMarketplace.length, JSON.stringify(allGoogleWorkspaceMarketplace))