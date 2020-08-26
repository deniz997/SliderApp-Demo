import angular from 'angular';
import './slider-element.module';
import './slide-item/slide-item.component';
import htmlTemplate from './slider-element.template.html';

export default {
    template: htmlTemplate,
    transclude: true,
    controller:class SliderElementController{
        constructor(){
            this.images = [];
            this.currentIndex = 0;
        }

        addSlide(image){
            this.images.length === 0 ? image.visible = true : image.visible = false;
            this.images.push(image);
            return this.images.length;
        }

        nextSlide(){
            console.log("nextSlide() clicked");
            this.images[this.currentIndex].visible = false;
            if (this.currentIndex < this.images.length-1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
            this.images[this.currentIndex].visible = true;
        }
        previousSlide(){
            this.images[this.currentIndex].visible = false;
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.images.length - 1;
            }
            this.images[this.currentIndex].visible = true;
        }
    }
}
