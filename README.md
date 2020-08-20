# [`coding.blog`](https://coding.blog) boilerplate

Starter project for [`coding.blog`](https://coding.blog) blogs that uses [CODEDOC](https://codedoc.cc/) and the [`coding.blog` Plugin](https://connect-platform.github.io/coding-blog-plugin/).

## Prerequisites

You need [NPM](https://www.npmjs.com/get-npm), [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
and [**CODEDOC** cli](https://codedoc.cc/docs/cli).

## Local Setup

1. [Use this repo as a template](https://github.com/CONNECT-platform/coding-blog-boilerplate/generate)
2. Clone your blog repo
3. Go to the cloned folder and install dependencies:
```
codedoc install
```
4. Configure your blog by changing `.codedoc/config.ts`. Running `codedoc check` will instruct you on configurations
you need to change:
```
codedoc check
```
5. Run local server:
```
codedoc serve
```

By default, your blog will be served on [localhost:3000/coding-blog-boilerplate](http://localhost:3000/coding-blog-boilerplate). Checkout [**CODEDOC** documentation](https://codedoc.cc) to learn how to change that (or generally work with **CODEDOC**).

### Using Docker

```bash
docker-compose up
```

The default `Dockerfile` and `docker-compose.yml` included in the repo will setup and run a local version of your blog on port `3000`. If you want
to create your own custom docker setup, remember to exclude `.codedoc/node_modules` from volumes.


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
