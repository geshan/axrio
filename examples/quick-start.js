const axrio = require('../lib/axrio');

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
