# Slider App Module
This module is developed with AngularJS 1.8, which provides slide deck with autoplay function.

## Functions

>Navigation

>Autoplay with 500ms

>Generic content

## Installation

```
npm install @deniz.tecimer/slider-app
```

## Example Usage

### Module
```javascript
import angular from 'angular';
import slider from '@deniz.tecimer/slider-app';

angular.module('appModule',[slider]);
```

### Template
```html
<div ng-app="sliderElement">
    <slider-element>
        <slide-item>
            <img src="../images/pi-works-ucell.png">
        </slide-item>
        <slide-item>
            <img src="../images/pi-works-turkcell.png">
        </slide-item>
        <slide-item>
            <img src="../images/pi-works-top100.jpg">
        </slide-item>
    </slider-element>
</div>
```

### How it looks

![alt text](app/images/example-image.jpg)
