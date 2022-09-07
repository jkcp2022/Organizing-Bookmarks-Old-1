// import { JSDOM } from "jsdom";
import jsdom from "jsdom";
import fetch from 'node-fetch'
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
    let getAllDomainsDescPromise = [];
    let allDomainsDesc = [];

    let allDomains = fs.readFileSync("./All Domains, Total: 17905");
    allDomains = JSON.parse(allDomains.toString());
    console.log(allDomains.length);

    let start = 0, end = 17910

    allDomains.forEach((domain, index) => {
        // if (!(index > 55 && index < 65)) return;
        // if(!(index > 100)) return
        // if(!(index > 100 && index < 200)) return
        // if(index == 60 )return
        // console.log(index)

        

        if(!(index >= start && index < end) )return

        let p = (function (domain, index) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const controller = new AbortController()

// 5 second timeout:
const timeoutId = setTimeout(() => controller.abort(), 10000)


                    fetch("https://" + domain, { signal: controller.signal })
                        .then(async (res) => {
                            let a = await res.text();
                            // console.log(a)
                            let doc;
                            console.log(index, domain);
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
                            let c = doc.querySelector('meta[name="description"]');

                            let desc = c?.getAttribute("content");
                            if (!desc) {
                                desc = "N/A";
                            }

                            // desc && (console.log("\ndomain", domain, index), console.log('"' + desc + '"'));

                            let domainDescObj = {
                                index,
                                domain: domain,
                                description: desc,
                            };

                            allDomainsDesc.push(domainDescObj);
                            resolve(domainDescObj);

                            domainDescObj = null;
                        })
                        .catch((e) => {
                            console.log(index, domain, e.toString());
                            let domainDescObj = {
                                index,
                                domain: domain,
                                error: e.toString(),
                            };
                            allDomainsDesc.push(domainDescObj);
                            resolve();
                        });
                }, 150 * (index - start));
            });
        })(domain, index);

        getAllDomainsDescPromise.push(p);
    });

    await Promise.all(getAllDomainsDescPromise);
    // console.log(allDomainsDesc);
    fs.writeFileSync("All Domains Descriptions, Start: " + start + ' ,End: ' + end, JSON.stringify(allDomainsDesc));
    console.log("done");
    console.timeEnd("a");
})();
