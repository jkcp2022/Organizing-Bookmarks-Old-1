import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allFacebookURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `facebook.com` || hostname == 'www.facebook.com'){
        allFacebookURLs.push(b.url)
    }
})

allFacebookURLs = [...new Set(allFacebookURLs)]
console.log(allFacebookURLs.length)
fs.writeFileSync('./All Facebook URLs, Total: ' + allFacebookURLs.length, JSON.stringify(allFacebookURLs))