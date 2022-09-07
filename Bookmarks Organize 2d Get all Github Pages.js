import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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