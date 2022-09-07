import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allDouyinURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `douyin.com` || hostname == 'www.douyin.com'){
        allDouyinURLs.push(b.url)
    }
})

allDouyinURLs = [...new Set(allDouyinURLs)]
console.log('allDouyinURLs', allDouyinURLs.length)
fs.writeFileSync('./All Douyin URLs, Total: ' + allDouyinURLs.length, JSON.stringify(allDouyinURLs))