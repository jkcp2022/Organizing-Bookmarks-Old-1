

import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allAlternativeToURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `alternativeto.net` || hostname == 'www.alternativeto.net'){
        allAlternativeToURLs.push(b.url)
    }
})

allAlternativeToURLs = [...new Set(allAlternativeToURLs)]
console.log(allAlternativeToURLs.length)
fs.writeFileSync('./All AlternativeTo URLs, Total: ' + allAlternativeToURLs.length, JSON.stringify(allAlternativeToURLs))