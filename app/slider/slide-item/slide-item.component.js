import htmlTemplate from './slide-item.template.html';

export default {

  template: htmlTemplate,
  require: {
    elementCtrl: '^sliderElement',
  },
  transclude: true,
  controller: class SlideItemController {
    constructor() {
      this.visible = false;
    }

    showImage() {
      this.visible = true;
    }

    hideImage() {
      this.visible = false;
    }

    $onInit() {
      this.elementCtrl.addSlide(this);
    }
  },
};
