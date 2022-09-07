import fs from 'fs'

let allDomainsFile = './Results/All Domains, Total: 28574'
let allDomains = fs.readFileSync(allDomainsFile)
allDomains = JSON.parse(allDomains.toString())

let AllDomains_1 = []
let AllDomains_2 = []
let AllDomains_3 = []

allDomains.forEach(domain => {
    if(domain.includes('chrome-bookmarks-tags-symbols')) console.log(domain)
    let s = domain.split('.')
    s = s.filter(a => !!a)
    if(s.length == 1){
        AllDomains_1.push(s)
    }else if(s.length == 3){
        s.shift()

        let Domain = s.join('.')
        AllDomains_2.push(Domain)
    }else if(s.length > 3){
        let Domain = s.join('.')
        AllDomains_3.push(Domain)

    }
     
    
    

})



fs.writeFileSync('./Results/All Subdomains 1 only?, Total: ' + AllDomains_1.length, JSON.stringify(AllDomains_1))
fs.writeFileSync('./Results/All Subdomains\'s Domains (Path=3), Total: ' + AllDomains_2.length, JSON.stringify(AllDomains_2))
fs.writeFileSync('./Results/All Subdomains larger than 3 (to be further organized), Total: ' + AllDomains_2.length, JSON.stringify(AllDomains_3))
