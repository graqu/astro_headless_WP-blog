# 🚀 Astro + Headless WordPress.com Boilerplate

This is a starter project for building a fast, modern Astro website using [WordPress.com](https://wordpress.com/) as a headless CMS via its REST API.

## ⚙️ Quick Setup

### 1. **Clone the repo**

```bash
git clone [repo ssh or https]
```

### 2. **Instal dependencies**
```bash 
npm i 
```

### 3. **Create a .env file**

Create a `.env` file in the root of the project and add:

```bash
WP_URL=https://public-api.wordpress.com/rest/v1.1/sites/astroheadlessjw5.wordpress.com/posts/
```

Replace "astroheadlessjw5.wordpress.com" with your actual WordPress.com site address.

⚠️ This setup is made for WordPress.com API. If you're using a self-hosted WordPress.org, note that its API is slightly different. For example, fetching a single post usually uses a slug, not an ID.

👉 In that case:

Replace 
`src/pages/blog/posts/[id].astro` with 
`src/pages/blog/posts/[slug].astro`

Update your API call to use the slug field instead of id

See: https://developer.wordpress.org/rest-api/

### 4. Start the development server

```bash
npm run dev
```

## 🖍️ Customize to your needs

Add your own pages, change existing. First, get familiar with documentation of Astro: 


https://docs.astro.build/en/getting-started/

## 🌐 DEPLOY 

### Option A - Static: 
You can run `npm run build` and then upload all the files from the `dist/` folder to your FTP server. This is a simple and classic deployment method. However, it has one important limitation: whenever you edit something or add a new post in WordPress, you'll need to rebuild the project and re-upload the updated `dist/` folder to reflect the new content and routes on your website.

>Currently, all code responsible for rendering post content runs during the Astro build process. The final site is static and doesn’t update dynamically. This means you won’t see any new changes from WordPress unless you rebuild the site, even previously rendered posts remain static. To enable automatic updates without rebuilding, you need to move the content fetching to the client side inside the `[id].astro` file. This way, post content will be fetched dynamically from the WordPress API when a user visits the page.



### Option B - Dynamic: 
You can deploy your Astro site to any platform that supports Node.js (e.g., Netlify, Vercel, or your own VPS). These platforms handle the build process automatically. Just push your code to a connected Git repository, and the platform will install dependencies, `run the build`, and serve the static files from the `dist/` folder. This approach makes updates easier—every time you rebuild (manually or via webhooks), new content from WordPress is included automatically. Remember to enable SSR first:
https://docs.astro.build/en/guides/content-collections/#building-for-server-output-ssr

## 🧱 Features
* Fetch blog posts from WordPress.com REST API

* Static generation with Astro

* Dynamic blog post pages



## Some Wordpress.com API cheat sheet:

Get details and content of post (or subpage)
* https://public-api.wordpress.com/rest/v1.1/sites/[your-wordpress-site.com]/posts/${ID}
Get all posts on your webside (with id's)
* https://public-api.wordpress.com/rest/v1.1/sites/[your-wordpress-site.com]/posts
Get all id's of subpages on your webside (with id's)
* https://public-api.wordpress.com/rest/v1.1/sites/[your-wordpress-site.com]/dropdown-pages/