# Nice Spy
A library used to update classnames of links based on scroll position

## Demos



## Installation
- [npm](https://www.npmjs.com/package/nice-spy)
- [standalone](https://raw.githubusercontent.com/appleple/nice-spy/master/js/nice-spy.js)

via npm
```shell
npm install nice-spy --save
```

or yarn

```shell
yarn add nice-spy
```

### Basic

```html
<nav>
  <ul>
    <li><a href="#section1" class="js-nicespy">section1</a></li>
    <li><a href="#section2" class="js-nicespy">section2</a></li>
    <li><a href="#section3" class="js-nicespy">section3</a></li>
  </ul>
</nav>
<section data-spy="section1">
  section1
</section>
<section data-spy="section2">
  section2
</section>
<section data-spy="section3">
  section3
</section>
```

```js
new NiceSpy('.js-nicespy', {
  offsetTop: 20, // space between the sticky element and the top of the window
});
```
