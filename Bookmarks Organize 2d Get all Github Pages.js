import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allGithubPagesURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname.includes(`github.io`)){
        allGithubPagesURLs.push(b.url)
    }
})

allGithubPagesURLs = [...new Set(allGithubPagesURLs)]
console.log(allGithubPagesURLs.length)
fs.writeFileSync('./All Github Pages URLs, Total: ' + allGithubPagesURLs.length, JSON.stringify(allGithubPagesURLs))