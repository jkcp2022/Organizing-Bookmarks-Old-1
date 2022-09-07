

import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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