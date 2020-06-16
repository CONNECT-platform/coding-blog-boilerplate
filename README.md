# [`coding.blog`](https://coding.blog) boilerplate

Starter project for [`coding.blog`](https://coding.blog) blogs.

## Prerequisites

You need [NPM](https://www.npmjs.com/get-npm), [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
and [**CODEDOC** cli](https://codedoc.cc/docs/cli).

## Local Setup

1. [Fork this repo](https://github.com/CONNECT-platform/coding-blog-boilerplate/fork)
2. Clone your fork
3. Go to the cloned folder and run this:
```
codedoc install
codedoc serve
```

By default, your blog will be served on [localhost:3000/coding-blog-boilerplate](http://localhost:3000/coding-blog-boilerplate). Checkout [**CODEDOC** documentation](https://codedoc.cc) to learn how to change that (or generally work with **CODEDOC**).


## Publishing

### To [`coding.blog`](https://coding.blog)

You need to have an account with a domain (i.e. `<your>.coding.blog`) setup. You can request one [over here](https://coding.blog/creators).

If you have an account with a domain, simply head [to your account page](https://coding.blog/account/blog) 
and connect your domain with your Git repo, i.e. `https://github.com/<your-username>/<your-coding-blog>.git`. You can then
either publish your blog directly from that interface, or use the provided webhook to automatically publish
for example when you push to master branch.

> **NOTE** that always your _master_ branch will be published.

### To GitHub Pages

This boilerplate comes with a preset workflow for publishing to GitHub Pages. Push something so that your `gh-pages` branch
is created, enable GitHub Pages and set it to use `gh-pages` branch, and push another time for GitHub to pick up your
blog. Note that the contents of `gh-pages` will be automatically generated via the preset workflow.
