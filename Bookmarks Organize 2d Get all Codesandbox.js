import fs from 'fs'

let allBookmarks = fs.readFileSync('./AllBookmarks')
allBookmarks = JSON.parse(allBookmarks.toString())
console.log(allBookmarks.length)

let allCodesandboxURLs = []
allBookmarks.forEach(b => {
    let hostname = new URL(b.url).hostname
    if(hostname == `codesandbox.io` || hostname == 'www.codesandbox.io'){
        allCodesandboxURLs.push(b.url)
    }
})

allCodesandboxURLs = [...new Set(allCodesandboxURLs)]
console.log(allCodesandboxURLs.length)
fs.writeFileSync('./All CodeSandbox URLs, Total: ' + allCodesandboxURLs.length, JSON.stringify(allCodesandboxURLs))