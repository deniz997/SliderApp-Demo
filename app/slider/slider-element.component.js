import htmlTemplate from './slider-element.template.html';
import './slider-element.style.css';

export default {
  template: htmlTemplate,
  transclude: true,
  controller: class SliderElementController {
    constructor($interval) {
      this.images = [];
      this.currentIndex = 0;
      this.onAutoplay = false;
      this.$interval = $interval;
      this.autoplayPromise = null;
    }

    toggleAutoplay() {
      // console.log(`Autoplay is: ${this.onAutoplay.toString()}`);
      if (this.onAutoplay) {
        this.autoplayPromise = this.$interval(() => {
          this.nextSlide();
        }, 500);
      } else {
        this.$interval.cancel(this.autoplayPromise);
      }
    }

    addSlide(image) {
      if (this.images.length === 0) {
        image.showImage();
      } else {
        image.hideImage();
      }
      this.images.push(image);
      return this.images.length;
    }

    nextSlide() {
      // console.log('nextSlide() clicked');
      this.images[this.currentIndex].hideImage();
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
      this.images[this.currentIndex].showImage();
    }

    previousSlide() {
      this.images[this.currentIndex].hideImage();
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      } else {
        this.currentIndex = this.images.length - 1;
      }
      this.images[this.currentIndex].showImage();
    }
  },
};
