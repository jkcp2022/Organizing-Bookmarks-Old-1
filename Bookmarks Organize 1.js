// import bookmarksJson from '/Users/jordan/Library/Application Support/Google/Chrome/Profile 10/Bookmarks'
import { profile } from "console";
import fs from "fs";

let bookmarksJson;
let allBookmarks = [];
let totalLength = 0;

for (let i = 1; i < 29; i++) {
    l(i, `/Users/jordan/Library/Application Support/Google/Chrome/Profile ${i}/Bookmarks`);
    l(i, `/Users/jordan/Documents/Chrome-Personal/Profile ${i}/Bookmarks`)
}
l(undefined, '/Users/jordan/Library/Application Support/BraveSoftware/Brave-Browser/Default/') // brave

function l(i, profileBookmarkPath) {
    try {
        let profileB = [];
        // console.log('\nStep: 1', `Index: ${i}`, profileB.length)

        bookmarksJson = i ? fs.readFileSync(profileBookmarkPath) : fs.readFileSync('/Users/jordan/Library/Application Support/BraveSoftware/Brave-Browser/Default/Bookmarks');
        
        // console.log(i, JSON.parse(bookmarksJson.toString()).roots.bookmark_bar.children.length)
        // console.log('Step 2', bookmarksJson.toString().length)
        bookmarksJson = JSON.parse(bookmarksJson.toString());
        bookmarksJson = bookmarksJson?.roots?.bookmark_bar?.children;
        console.log(bookmarksJson.length)
        //  console.log(profileB)
        let a = flattenBookmarks(bookmarksJson, profileB);
        
        profileBookmarkPath && profileB.forEach(b => {
            b.Path = profileBookmarkPath.replaceAll(`/Users/jordan/Library/Application Support/Google/`, '').replaceAll('/Users/jordan/Documents/', '')
        })
        // console.log(allBookmarks)
        console.log("Step 4", "Index: " + i, profileB.length);
        allBookmarks = [...allBookmarks, ...profileB];
        totalLength += profileB.length;
        // console,log(totalLength)
    } catch (e) {
        // console.log('user doesn\'t exist')
        // console.log(e)
    } finally {
    }
}




console.log(totalLength);
console.log(allBookmarks.length);

const half = Math.ceil(allBookmarks.length / 2);    

const firstHalf = allBookmarks.slice(0, half)
const secondHalf = allBookmarks.slice(half)

fs.writeFileSync("./All Bookmarks p1.json", JSON.stringify(firstHalf));
fs.writeFileSync("./All Bookmarks p2.json", JSON.stringify(secondHalf));

// bookmarksJson = JSON.parse(bookmarksJson.toString()).roots.bookmark_bar
// console.log(JSON.parse(bookmarksJson.toString()).roots.bookmark_bar.children.length)

function flattenBookmarks(node, barr) {
    // console.log(node)
    // console.log('a', barr)
    let typeOfNode = Array.isArray(node) ? "array" : "object";

    if (typeOfNode == "array") {
        // console.log('array', node)
        node.forEach((subNode) => flattenBookmarks(subNode, barr));
    } else if (typeOfNode == "object") {
        // console.log('object', node)

        let hasChildren = !!node.children;
        // console.log('hasChildren', hasChildren)

        if (hasChildren) {
            flattenBookmarks(node.children, barr);
        } else {
            barr.push(node);
        }
    }
}

// chrome.bookmarks.getTree(tree => flattenBookmarks(tree))
