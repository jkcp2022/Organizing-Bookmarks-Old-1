import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allChromePagesURLs = []
allBookmarks.forEach(b => {
    let protocol = new URL(b.url).protocol
    if(protocol == `chrome:`){
        allChromePagesURLs.push(b.url)
    }
})

allChromePagesURLs = [...new Set(allChromePagesURLs)]
console.log(allChromePagesURLs.length)
fs.writeFileSync('./All Chrome Pages URLs, Total: ' + allChromePagesURLs.length, JSON.stringify(allChromePagesURLs))