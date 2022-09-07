import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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