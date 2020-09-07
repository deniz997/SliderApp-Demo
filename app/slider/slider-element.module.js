import sliderElementComponent from './slider-element.component';
import slideItemComponent from './slide-item/slide-item.component';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

angular.module('sliderElement', [])
  .component('sliderElement', sliderElementComponent)
  .component('slideItem', slideItemComponent);
