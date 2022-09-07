

import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allVisualStudioCodeMarketplaceURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `marketplace.visualstudio.com`){
        allVisualStudioCodeMarketplaceURLs.push(b.url)
    }
})

allVisualStudioCodeMarketplaceURLs = [...new Set(allVisualStudioCodeMarketplaceURLs)]
console.log(allVisualStudioCodeMarketplaceURLs.length)
fs.writeFileSync('./All Visual Studio Code Marketplace URLs, Total: ' + allVisualStudioCodeMarketplaceURLs.length, JSON.stringify(allVisualStudioCodeMarketplaceURLs))