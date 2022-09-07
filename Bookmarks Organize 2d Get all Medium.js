import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allMediumURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `medium.com` || hostname == 'www.medium.com'){
        allMediumURLs.push(b.url)
    }
})

allMediumURLs = [...new Set(allMediumURLs)]
console.log(allMediumURLs.length)
fs.writeFileSync('./All Medium URLs, Total: ' + allMediumURLs.length, JSON.stringify(allMediumURLs))