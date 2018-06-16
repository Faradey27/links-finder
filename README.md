# links-finder
> Small lib to find all links in a string and get their positions or wrap them with something(like html `<a>` tag)

### Install library
```
  npm install --save links-finder
```
or
```
  yarn add links-finder
```
or

[Download](https://raw.githubusercontent.com/Faradey27/links-finder/master/dist/links-finder.min.js) our minified version

or

[Download](https://github.com/Faradey27/links-finder/blob/master/dist/links-finder.min.js.gz?raw=true) our gziped version

-------

### Live demo
Take a look [here](http://faradey27.github.io/links-finder/)

-------

### Examples of finding links

##### Default usage

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.findLinks('magic http://blah.com another')); // will log [{start: 6, end: 20}]
```

##### Several links

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.findLinks('magic http://blah.com and https://x.com')); // will log [{start: 6, end: 20}, {start: 26, end: 38}]
```

##### No links

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.findLinks('magic')); // will log []
```

##### Links without http

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.findLinks('magic www.blah.com and some')); // will log [{start: 6, end: 17}]
  console.log(linksFinder.findLinks('magic blah.com')); // will log [{start: 6, end: 13}]
```

### Examples of wrapping links

##### Example of wrapping link with <a> in [React](https://reactjs.org/) way

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.wrapLinks('magic http://blah.com', {
    onMatch: (link) => <a href={link}>{link}</a>
  })); // will log 'magic <a href="http://blah.com"/>http://blah.com</a>'
```

##### Example of removing all links

```javascript
  import linksFinder from 'links-finder';
  console.log(linksFinder.wrapLinks('magic http://blah.com', {
    onMatch: (link) => ''
  })); // will log 'magic '
```

### Examples with tree shaking

```javascript
  import { findLinks } from 'links-finder';
  console.log(findLinks('magic http://blah.com')); // will log [{start: 6, end: 20}]
```

```javascript
  import { wrapLinks } from 'links-finder';
  console.log(wrapLinks('magic http://blah.com', {
    onMatch: (link) => <a href={link}>{link}</a>
  })); // will log 'magic <a href="http://blah.com"/>http://blah.com</a>'
```

##### For more example, you can take a looks to our [test spec file](/__test__/links-finder.spec.js)

-------

##### This lib is super fast and super tiny(< 6kb)

##### We support all modern browsers starting from IE9

-------

Feel free to open [ISSUES](https://github.com/Faradey27/links-finder/issues) and [create pull requests](https://github.com/Faradey27/links-finder/pulls)
