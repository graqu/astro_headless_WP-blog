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
## 🧱 Features
* Fetch blog posts from WordPress.com REST API

* Static generation with Astro

* Dynamic blog post pages