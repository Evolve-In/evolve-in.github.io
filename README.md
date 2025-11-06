
# EvolveIn - Change Your Version

[![Build and Deploy](https://github.com/Ruhanyat-994/CVT-mentor/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/Ruhanyat-994/CVT-mentor/actions/workflows/build-and-deploy.yml)

Welcome to the official repository for **EvolveIn**, a Jekyll-powered website dedicated to personal growth, fitness, and productivity. Our motto is **"Change Your Version,"** and this platform is designed to provide the community with the articles, guides, and motivation to do just that.

This site is built with [Jekyll](https://jekyllrb.com/) and deployed using [GitHub Pages](https://pages.github.com/).

### Live Site: [https://Ruhanyat-994.github.io/CVT-mentor/](https://Ruhanyat-994.github.io/CVT-mentor/)

---

## ✨ Features

* **Modern Homepage:** A side-by-side layout featuring the site's mission and a dynamic "Quote of the Day."
* **Dynamic "Quote of the Day":** The quote card on the homepage randomly selects a new quote from a central data file on every page load.
* **Program-Based Content:** Blog posts are associated with one of four main programs:
    * Increase Productivity
    * Pray 5 Times
    * Home Workout
    * Gym Plan
* **Writer Collections:** A dedicated `_writers` collection to manage author profiles, separate from blog posts.
* **Dedicated Pages:**
    * `/about`: Automatically lists all author profiles from the `_writers` collection.
    * `/blog`: A clean, grid-based page listing all blog posts, sorted by most recent.
* **Clickable Metadata:** Author names and program names in blog posts are clickable, linking directly to their respective pages.
* **Smooth Scrolling:** "Contact" links in the header and footer smoothly scroll to the contact section.
* **Automatic Deployment:** Deploys to GitHub Pages automatically on every push to the `main` branch using a modern GitHub Actions workflow.

---

## 🚀 Getting Started (Local Development)

To run this website on your local machine, you'll need to have Ruby and Bundler installed.

### Prerequisites

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (v3.0 or higher)
* [Bundler](https://bundler.io/) (`gem install bundler`)
* [Git](https://git-scm.com/downloads)

### 1. Clone the Repository

```sh
git clone [https://github.com/Ruhanyat-994/CVT-mentor.git](https://github.com/Ruhanyat-994/CVT-mentor.git)
cd CVT-mentor
````

### 2\. Install Dependencies

This will install Jekyll and all the other gems listed in the `Gemfile`.

```sh
bundle install
```

### 3\. Run the Local Server

This command starts the Jekyll server, watches for file changes, and makes the site available at `localhost:4000`.

```sh
bundle exec jekyll serve --livereload --baseurl ""
```

  * `--livereload` automatically refreshes your browser when you save a file.
  * `--baseurl ""` is **critical** for local development so that all links work correctly.

Open your browser and navigate to **`http://localhost:4000`** to see the site.

-----

## 📁 How the Site Works: Content Structure

This project uses Jekyll's content collections to make managing content simple.

  * `_posts/`: This is where all the **blog articles** live. Each file must be named `YYYY-MM-DD-your-title.md`.
  * `_writers/`: This is where all the **author profiles** live. Each file can be named anything (e.g., `sami_chowdhury.md`).
  * `_data/quotes.yml`: This file stores all the quotes used by the "Quote of the Day" randomizer.
  * `quotes.json`: A file that makes the quotes readable for the browser's JavaScript.
  * `_includes/`: This folder contains reusable parts of the site, like the `header.html`, `footer.html`, `hero.html`, and `quote-of-the-day.html`.
  * `_layouts/`: This contains the main templates (`default.html`, `post.html`, `writer.html`).
  * `programs/`: This folder contains the landing pages for each of the four main programs.
  * `assets/`: Contains all static files like `css/style.css`, images, and JavaScript.

-----

## 🤝 How to Contribute

We welcome all contributions from the community\! The easiest way to contribute is by adding content.

### Adding Content (The Easiest Way\!)

You can add new blog posts, new writer profiles, or new quotes.

#### To Add a New Blog Post:

1.  Create a new file in the `_posts` folder.
2.  Name it in the format `YYYY-MM-DD-your-title-here.md`.
3.  Copy and paste the following template (front matter) at the top of the file and fill it out:

<!-- end list -->

```markdown
---
layout: post
title: "Your Awesome New Blog Post Title"
date: YYYY-MM-DD
author: "Your Full Name"
description: "A short, 1-2 sentence description of your post."
image: "/assets/images/posts/your-post-image.jpg"
tags: ["Tag1", "Tag2"]

# This is the Program. It MUST match one of the program names exactly.
# This is case-sensitive!
#
# Choose one of:
# category: "Home Workout"
# category: "Gym Plan"
# category: "Pray 5 Times"
# category: "Increase Productivity"
#
category: "Home Workout" 
---

## Your First Heading

Start writing your amazing blog post here using Markdown...
```

#### To Add a New Writer Profile:

1.  Add your profile picture to the `assets/images/` folder (or a subfolder like `assets/images/writers/`).
2.  Create a new file in the `_writers` folder (e.g., `your_name.md`).
3.  Copy and paste the following template and fill it out:

<!-- end list -->

```markdown
---
layout: "writer"
name: "Your Full Name"
role: "Personal Trainer"
image: "/assets/images/your-profile-pic.png"
---

This is your bio. Write a paragraph or two about yourself, your specialties,
and your philosophy.

You can use Markdown here.

### Specialties
* Specialty 1
* Specialty 2
* Specialty 3
```

#### To Add a New Quote:

1.  Open the `_data/quotes.yml` file.
2.  Go to the bottom of the file and add your quote in the correct format:

<!-- end list -->

```yaml
- quote: "The new quote you want to add."
  author: "Author's Name"
```

### Reporting Bugs or Suggesting Features

If you find a bug or have an idea for a new feature, please **[open an issue](https://www.google.com/search?q=https://github.com/Ruhanyat-994/CVT-mentor/issues)**\!

1.  Go to the "Issues" tab.
2.  Click "New Issue."
3.  Provide a clear title and a detailed description of the bug or feature request.

-----

## 💬 Be a Part of the Community

The EvolveIn community is the most important part of this project.

  * **GitHub Discussions:** Have a question? Want to share your progress? Or just want to talk about personal development? Head over to our **[Discussions Tab](https://www.google.com/search?q=https://github.com/Ruhanyat-994/CVT-mentor/discussions)**.
  * **Contribute Content:** The best way to join is to share your knowledge. Write a post, add a quote, or fix a typo. Every contribution helps\!
  * **Share the Project:** Know someone who could benefit? Share a link to the site\!

-----

## 📜 License

This project is licensed under the **MIT License**. You can find the full license text in the `LICENSE` file.

