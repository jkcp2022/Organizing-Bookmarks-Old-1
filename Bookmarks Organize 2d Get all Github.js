import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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