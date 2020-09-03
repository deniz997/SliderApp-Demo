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
      this.id = undefined;
    }

    $onInit() {
      this.elementCtrl.addSlide(this);
    }
  },
};
