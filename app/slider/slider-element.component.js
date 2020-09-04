import htmlTemplate from './slider-element.template.html';
import './slider-element.style.css';

export default {
  template: htmlTemplate,
  transclude: true,
  controller: class SliderElementController {
    constructor($interval) {
      this.items = [];
      this.currentIndex = 0;
      this.onAutoplay = false;
      this.$interval = $interval;
      this.autoplayPromise = undefined;
    }

    toggleAutoplay() {
      // console.log(`Autoplay is: ${this.onAutoplay.toString()}`);
      if (this.onAutoplay) {
        this.autoplayPromise = this.$interval(
          () => { this.nextSlide(); }, 500,
        );
      } else {
        this.$interval.cancel(this.autoplayPromise);
      }
    }

    addSlide(item) {
      const slideItem = item;
      if (this.items.length === 0) {
        slideItem.visible = true;
      } else {
        slideItem.visible = false;
      }
      slideItem.id = this.items.length;
      this.items.push(slideItem);
      return this.items.length;
    }

    nextSlide() {
      // console.log('nextSlide() clicked');
      this.items[this.currentIndex].visible = false;
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
      this.items[this.currentIndex].visible = true;
    }

    previousSlide() {
      this.items[this.currentIndex].visible = false;
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      } else {
        this.currentIndex = this.items.length - 1;
      }
      this.items[this.currentIndex].visible = true;
    }

    emptyFeature() {
      return this.currentIndex;
    }
  },
};
