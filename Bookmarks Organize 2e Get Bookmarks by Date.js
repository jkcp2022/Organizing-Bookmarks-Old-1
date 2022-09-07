import fs from 'fs'

let allBookmarks1 = fs.readFileSync('./All Bookmarks p1.json')
allBookmarks1 = JSON.parse(allBookmarks1.toString())
let allBookmarks2 = fs.readFileSync('./All Bookmarks p2.json')
allBookmarks2 = JSON.parse(allBookmarks2.toString())

let allBookmarks = [...allBookmarks1, ...allBookmarks2]
console.log(allBookmarks.length)

let bId_2016 = []
let bId_2017 = []
let bId_2018 = []
let bId_2019 = []
let bId_2020 = []
let bId_2021 = []
let bId_2022 = []
let bId = {
    bId_2016, bId_2017, bId_2018, bId_2019, bId_2020, bId_2021, bId_2022
}

let b_2016 = []
let b_2017 = []
let b_2018 = []
let b_2019 = []
let b_2020 = []
let b_2021 = []
let b_2022 = []
let bItem = {
    b_2016, b_2017, b_2018, b_2019, b_2020, b_2021, b_2022
}

let years = [2016, 2017, 2018, 2019, 2020, 2021, 2022]
let lengths = []

allBookmarks.forEach((b, i) => {
    i == 100 && console.log(b)
    let bDateAdded = b.date_added
    // bDateAdded = new Date(bDateAdded).getFullYear()


    bDateAdded = new Date(Date.UTC(1601,0,1) + bDateAdded / 1000).getFullYear(); // 2018-05-07T06:17:02.089Z

    lengths.push(bDateAdded)

    if(!bDateAdded) {
        // console.log(i)
        return
    }
    
    years.forEach(year => {
        if(bDateAdded == year){
            bId['bId_' + year].push(b.guid)
            bItem['b_' + year].push(b)
        }
    })
})


years.forEach(year => {
        console.log(year)
        console.log(bId['bId_' + year].length, bItem['b_' + year].length)
    
        fs.writeFileSync(`./Results/All Years/${year} All Bookmark IDs, Total: ` + bId['bId_' + year].length, JSON.stringify(bId['bId_' + year]))
        fs.writeFileSync(`./Results/All Years/${year} All Bookmark Items, Total: ` + bItem['b_' + year].length, JSON.stringify(bItem['b_' + year]))
        
})

lengths = [...new Set(lengths)]
console.log(lengths)
