

import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let allHerokuAppsURL = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname.includes('herokuapp.com') ){
        allHerokuAppsURL.push(b.url)
    }
})

allHerokuAppsURL = [...new Set(allHerokuAppsURL)]
console.log(allHerokuAppsURL.length)
fs.writeFileSync('./Results/All Heroku Apps URLs, Total: ' + allHerokuAppsURL.length, JSON.stringify(allHerokuAppsURL))