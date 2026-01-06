
#  Flare Africa

Welcome to **Flare Africa**, the decentralized home for the next generation of African builders on the Flare Network. This project is entirely content-driven and open-source. We believe that by documenting our journey, we empower the entire continent to lead the data revolution.

---

##  How to Contribute

We use a "Blog-as-Code" approach. Our entire blog system is powered by **Astro Content Collections** and GitHub. You don't need to be a developer to contribute—you just need to know a little Markdown.

### 1. The Workflow

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork to your local machine.
3. **Create** a new branch for your article: `git checkout -b blog/your-post-title`.
4. **Add** your content (see the "Writing the Post" section below).
5. **Push** and open a **Pull Request (PR)**.

---

##  Writing your Post

All blog posts live in the `src/content/blog/` directory. Your file should be named with a slug format: `my-awesome-post.md`.

### The Critical "Frontmatter"

Every post **must** start with a block of metadata called Frontmatter. This tells the website how to display your post in the grid. If this is missing or incorrect, the build will fail.

**Example Template:**
Copy this exact block to the top of your `.md` file:

```markdown
---
title: "Beginner’s Guide to Writing Markdown"
author: "Monday Ese"
date: "2026-01-06"
description: "A simple, practical introduction to writing clean and readable Markdown for documentation, blogging, and technical content."
summary: "This guide walks beginners through the essentials of Markdown—from headings and lists to code blocks, tables, and frontmatter—making it easy to write clean, structured content for blogs, documentation, and GitHub."
---

## Your Content Starts Here
Write your article body here...

```

### Content Requirements

* **Images:** Place images in the `public/images/blog/` folder and reference them using `/images/blog/your-image.jpg`.
* **Tone:** Technical but accessible. We are building for everyone from beginners to pros.
* **Code:** Use triple backticks (```) for code blocks to enable syntax highlighting.

---

## 🛠 Local Development

If you want to see how your post looks before submitting, you can run the site locally:

1. **Install dependencies:**
```bash
npm install

```


2. **Start the development server:**
```bash
npm run dev

```


3. **View the site:**
Open `http://localhost:4321` in your browser.

---

##  Recognition

Once your PR is merged, you will:

* Be listed as an official **Author** on the website.
* Be featured across our **X (Twitter)** and **Telegram** channels.
* Contribute to the collective knowledge of the African Web3 ecosystem.

**Questions?** Join our community on [Telegram] or follow us on [X] and ask the maintainers!
