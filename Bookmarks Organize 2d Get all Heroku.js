

import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
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
fs.writeFileSync('./All Heroku Apps URLs, Total: ' + allHerokuAppsURL.length, JSON.stringify(allHerokuAppsURL))