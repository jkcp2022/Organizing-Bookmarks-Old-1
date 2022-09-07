import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allGithubURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `github.com` || hostname == 'www.github.com'){
        allGithubURLs.push(b.url)
    }
})

allGithubURLs = [...new Set(allGithubURLs)]
console.log(allGithubURLs.length)
fs.writeFileSync('./All Github URLs, Total: ' + allGithubURLs.length, JSON.stringify(allGithubURLs))