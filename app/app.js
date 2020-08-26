import angular from 'angular';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './slider/slider-element.module';
import './slider/slider-element.component';
import './slider/slider-element.template.html';
import './slider/slider-element.style.css';

angular.module('sliderDemo',['sliderElement']);