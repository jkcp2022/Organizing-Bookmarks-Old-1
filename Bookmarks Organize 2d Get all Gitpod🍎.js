import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allGitpodURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `gitpod.com` || hostname == 'www.gitpod.com'){
        allGitpodURLs.push(b.url)
    }
})

allGitpodURLs = [...new Set(allGitpodURLs)]
console.log(allGitpodURLs.length)
fs.writeFileSync('./All Gitpod URLs, Total: ' + allGitpodURLs.length, JSON.stringify(allGitpodURLs))