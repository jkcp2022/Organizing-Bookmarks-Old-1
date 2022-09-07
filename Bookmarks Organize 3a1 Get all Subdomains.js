import fs from 'fs'

let allDomainsFile = 'All Domains, Total: 17905'
let allDomains = fs.readFileSync(allDomainsFile)
allDomains = JSON.parse(allDomains.toString())

let AllDomains_ = []

allDomains.forEach(domain => {
    let s = domain.split('.')
    s.length == 3 && s.shift()
    
    let Domain = s.join('.')
    AllDomains_.push(Domain)

})

console.log(AllDomains_.length)
AllDomains_ = [...new Set(AllDomains_)]

fs.writeFileSync('All Domains (sub as 1), Total: ' + AllDomains_.length, JSON.stringify(AllDomains_))
