# axrio

A package that combines Axios and Cheerio to get a web page.

## Quick usage example

First install the package with npm like below:

```
npm install @geshan/axrio
```

Then you can start using it like below:

```
const axrio = require('@geshan/axrio');

(async () => {
  try {
    const $ = await axrio.getPage('https://google.com');
    const links = $('a');
    console.log(`Link text: ${$(links[0]).text()}`);
    console.log(`Link Href: ${$(links[0]).attr().href}`);
  } catch (e) {
    console.log(`Error `, e);
  }
})();

```
