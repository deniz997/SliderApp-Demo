import angular from 'angular';
import htmlTemplate from './slide-item.template.html';
import '../slider-element.module';

export default {

    template: htmlTemplate,
    require: {
        elementCtrl: '^sliderElement'
    },
    transclude: true,
    controller: class SlideItemController {
        constructor() {
            this.visible =  false;
        }
        $onInit() {
            this.id = this.elementCtrl.addSlide(this);
        }
    }
}