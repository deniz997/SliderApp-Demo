import sliderElementComponent from './slider-element.component';
import slideItemComponent from './slide-item/slide-item.component';

const sliderModule = angular.module('sliderElement', [])
  .component('sliderElement', sliderElementComponent)
  .component('slideItem', slideItemComponent);

export default sliderModule;
