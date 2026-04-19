# A Decor Story

Bespoke Nikkah and wedding decoration — London. Plain HTML/CSS/JS, no build step.

## Local Preview

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Replacing Gallery Placeholders

Drop real photos into `assets/placeholders/` as `01.jpg` through `12.jpg` (800px wide recommended). The gallery page loads them automatically.

## Updating Copy

Each page is a self-contained `.html` file — open it in any text editor and edit the copy directly. Fonts, colours, and layout are in `css/styles.css`.

## Netlify Deploy

1. Log in to [netlify.com](https://netlify.com)
2. **Add new site → Import from Git → GitHub**
3. Select `zaid5678/adecorstory`
4. Build command: *(leave empty)*
5. Publish directory: `.`
6. Click **Deploy**

After deploy, go to **Site settings → Forms** to confirm the contact form is detected by Netlify.

## Environment

No environment variables or build steps required. The site is static HTML.
