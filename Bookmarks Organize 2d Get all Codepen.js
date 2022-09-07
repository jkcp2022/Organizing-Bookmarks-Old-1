import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allCodepenURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `codepen.io` || hostname == 'www.codepen.io'){
        allCodepenURLs.push(b.url)
    }
})

allCodepenURLs = [...new Set(allCodepenURLs)]
console.log(allCodepenURLs.length)
fs.writeFileSync('./All Codepen URLs, Total: ' + allCodepenURLs.length, JSON.stringify(allCodepenURLs))