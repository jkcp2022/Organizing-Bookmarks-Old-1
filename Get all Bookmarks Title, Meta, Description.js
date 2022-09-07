// import { JSDOM } from "jsdom";
import jsdom from "jsdom";
import fetch from "node-fetch";
const { JSDOM } = jsdom;

import cheerio from "cheerio";

import fs from "fs";

console.time("a");

process.on("uncaughtException", (err) => {
    console.log("whoops! There was an uncaught error", err);
    // do a graceful shutdown,
    // close the database connection etc.
});

(async function main() {
    let getAllBookmarkMeta = [];
    let allBookmarksURLOGMeta = [];

    let allBookmarks = fs.readFileSync("/workspace/Organizing-Bookmarks/Bookmark Organizing/AllBookmarks");
    allBookmarks = JSON.parse(allBookmarks.toString());
    console.log(allBookmarks.length);

    let start = 10000,
        end = 20000
        // end = allBookmarks.length

    allBookmarks.forEach((bookmark, index) => {
        // if (!(index > 55 && index < 65)) return;
        // if(!(index < 100)) return
        // if(!(index > 100 && index < 200)) return
        // if(index == 60 )return
        // console.log(index)
        // return

        if (!(index >= start && index < end)) return;

        let p = (function (bookmark, index) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const controller = new AbortController();

                    // 5 second timeout:
                    const timeoutId = setTimeout(() => controller.abort(), 10000);

                    fetch(bookmark.url, { signal: controller.signal })
                        .then(async (res) => {
                            let a = await res.text();
                            // console.log(a)
                            let doc;
                            // console.log(index, bookmark);
                            try {
                                const virtualConsole = new jsdom.VirtualConsole();
                                virtualConsole.on("error", () => {
                                    console.log("JSDOM Error", index);
                                    resolve();
                                });

                                doc = new JSDOM(a, { virtualConsole }).window.document;
                            } catch (e) {
                                console.log("parse error");
                                resolve();
                            }

                            // const doc = cheerio.load(a);

                            // $('h2.title').text('Hello there!');
                            // $('h2').addClass('welcome');
                            //         let c = doc.querySelector('meta[name="description"]');

                            let title = doc.querySelector('title')
                            let allMeta = [...doc.querySelectorAll("meta")];

                            allMeta = allMeta.map((meta) => meta.outerHTML);

                            // desc && (console.log("\ndomain", domain, index), console.log('"' + desc + '"'));

                            let urlMetaObj = {
                                index,
                                bookmarkURL: bookmark.url,
                                title,
                                allMeta
                            };

                            allBookmarksURLOGMeta.push(urlMetaObj);
                            resolve(urlMetaObj);

                            urlMetaObj = null;
                        })
                        .catch((e) => {
                            // console.log(index, bookmark, e.toString());
                            let urlMetaObj = {
                                index,
                                bookmarkURL: bookmark.url,
                                error: e.toString(),
                            };
                            allBookmarksURLOGMeta.push(urlMetaObj);
                            resolve();
                        });
                }, 150 * (index - start));
            });
        })(bookmark, index);

        getAllBookmarkMeta.push(p);
    });

    await Promise.all(getAllBookmarkMeta);
    // console.log(allDomainsDesc);
    let title = "All Bookmarks Meta, Start: " + start + " ,End: " + end
    console.log(title)
    fs.writeFileSync(title, JSON.stringify(allBookmarksURLOGMeta));
    console.log("done");
    console.timeEnd("a");
})();
