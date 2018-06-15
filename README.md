# links-finder
> Small lib to find all links in a string and get their positions or wrap them with something(like html `<a>` tag)

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
