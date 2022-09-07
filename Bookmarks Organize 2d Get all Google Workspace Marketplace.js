import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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