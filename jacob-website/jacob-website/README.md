# Jacob O'Connor Marvin: website

A simple website with no special tools needed. It's plain HTML and CSS
files, plus two "data" files that hold the talks and the calendar.

## What's in the folder

```
index.html            the home page (hero, calendar, blog, about, booking form)
talks.html            the Talks library page
talk.html             ONE page that shows any talk or bundle (talk.html?id=...)
css/style.css         the design: colours, fonts, sizes (colours are at the top)
js/talks-data.js      ← EDIT THIS to add or change talks, prices, links, trailers
js/calendar-data.js   ← EDIT THIS to change where you'll be
js/site.js            the engine that builds the pages. No need to touch it.
images/               photos (stage.jpg, ephesus.jpg) and the paper texture
images/thumbnails/    put talk thumbnails here (1280 × 720 JPGs work best)
```

## Common jobs

| I want to... | Open this file | What to do |
|---|---|---|
| Add a new talk | `js/talks-data.js` | Copy one talk block `{ ... },`, paste it, change the details |
| Add a Gumroad link | `js/talks-data.js` | Paste the product link between the quotes after `gumroad:` |
| Add a trailer | `js/talks-data.js` | Paste the YouTube/Vimeo link after `trailer:` |
| Add a thumbnail | `images/thumbnails/` then `js/talks-data.js` | Upload the picture, then write its path after `thumbnail:` e.g. `'images/thumbnails/potosi.jpg'` |
| Add the Potosí photo | `images/` then `js/talks-data.js` | Upload it as `potosi.jpg`, then set `photo: 'images/potosi.jpg'` in the Spain topic |
| Change the 3 talks on the home page | `js/talks-data.js` | Edit `FEATURED_TALKS` at the bottom |
| Update the calendar | `js/calendar-data.js` | Edit, add or delete sailing blocks |
| Change any other wording | `index.html` or `talks.html` | Find the words and type over them |
| Change colours | `css/style.css` | Edit the list at the top |

**Golden rule for the data files:** text goes in 'quote marks', text with an
apostrophe goes in "double quotes", and items are separated by commas. If a
page suddenly looks empty after an edit, a quote mark or comma has gone
missing. Undo and try again.

## Still to fill in

Search the files for `[` and `TO DO` to find them all:

- Real talk titles, lengths, Gumroad links, trailers and thumbnails (`js/talks-data.js`)
- The teaser for "Where the Hand of God Cannot Reach" (`index.html`, Blog section)
- Two bracketed lines in the About section (`index.html`)
- Instagram handle and email address (the footer, on all three pages)
- The Formspree form address for "Book a Talk" (`index.html`; instructions are there)
- The Potosí photo

## Putting it online with GitHub Pages (free)

1. Sign in at github.com and click **New repository**. Give it a name
   (for example `website`), set it to **Public**, and click **Create repository**.
2. On the new repository page, click **uploading an existing file**.
3. Unzip the zip file on your computer, open the `jacob-website` folder, select
   **everything inside it** (not the folder itself) and drag it into the
   GitHub page. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", choose **main** and **/ (root)**,
   then **Save**.
5. After a minute or two, the page shows your site's address, something like
   `https://yourname.github.io/website/`.

**To edit later:** open any file on GitHub, click the pencil icon, make
your change, and click **Commit changes**. The live site updates within a
couple of minutes.

**Your own domain:** once you've bought one, add it under **Settings → Pages →
Custom domain**. GitHub shows the settings to give your domain provider.

## Trying it on your own computer

Double-clicking `index.html` works for a quick look. If something doesn't
appear, it's usually the browser being cautious about local files. Uploading
to GitHub is the real test.
