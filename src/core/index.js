import { getScrollTop, getOffset, outerHeight, addClass, removeClass } from '../lib';

const assign = require('es6-object-assign').assign;

const defaults = {
  offsetTop: 0,
  target: '[data-spy]',
  targetAttr: 'data-spy',
  className: 'is-active'
};

export default class ScrollSpy {
  constructor(ele, opt) {
    this.opt = assign({}, defaults, opt);
    this.targetElements = typeof ele === 'string' ? document.querySelectorAll(ele) : ele;
    this.sections = typeof this.opt.target === 'string' ? document.querySelectorAll(this.opt.target) : this.opt.target;
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
  }

  onScroll() {
    const scroll = getScrollTop();
    const { offsetTop } = this.opt;
    const find = [].find.call(this.sections, (item) => {
      const top = getOffset(item).top;
      const height = outerHeight(item);
      if (scroll + offsetTop >= top && scroll + offsetTop <= top + height) {
        return true;
      }
      return false;
    });
    if (find) {
      const attr = find.getAttribute(this.opt.targetAttr);
      [].forEach.call(this.targetElements, (item) => {
        const href = item.getAttribute('href');
        if (href.replace('#', '') === attr) {
          addClass(item, this.opt.className);
        } else {
          removeClass(item, this.opt.className);
        }
      });
    }
  }
}
