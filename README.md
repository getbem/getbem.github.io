[getbem.com](http://getbem.com)
=====================

This repository contains the source for the [getbem.com](http://getbem.com) site.

### Usage

```
npm install
npm start

open http://localhost:3000
```

### Production build

```
npm run build
http-server -c=3600 -o
```

### Deploying

We are working on better deployment method, but for now you can just push to `gh-pages` after production build.

```
git checkout gh-pages
git merge master
git push
```

### License

[MIT](license)
