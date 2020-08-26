import angular from 'angular';
import sliderElementComponent from './slider-element.component';
import slideItemComponent from './slide-item/slide-item.component';

angular.module('sliderElement', [])
  .component('sliderElement', sliderElementComponent)
  .component('slideItem', slideItemComponent);
