import './slider-element.module';

describe('Slider App Unit Test', () => {
  beforeEach(() => {
    angular.mock.module('sliderElement');
  });

  describe('Slider Element Controller Test', () => {
    let sliderCtrl;

    beforeEach(() => {
      angular.mock.inject(
        ($componentController) => {
          sliderCtrl = $componentController('sliderElement');
        },
      );
      const item = {
        id: 0,
        visible: false,
      };
      sliderCtrl.addSlide(item);
      sliderCtrl.addSlide(item);
      sliderCtrl.addSlide(item);
    });

    it('should be initialized correctly', () => {
      expect(sliderCtrl.items)
        .toBeDefined();

      expect(sliderCtrl.currentIndex)
        .toBe(0);

      expect(sliderCtrl.onAutoplay)
        .toBeFalse();

      expect(sliderCtrl.autoplayPromise)
        .toBeUndefined();
    });

    it('should add slides properly', () => {
      const item = {
        id: 0,
        visible: false,
      };

      expect(sliderCtrl.items.length)
        .toBe(3);
      sliderCtrl.addSlide(item);

      expect(sliderCtrl.items.length)
        .toBe(4);
      sliderCtrl.addSlide(item);

      expect(sliderCtrl.items.length)
        .toBe(5);
    });

    it('should get the next slide properly', () => {
      expect(sliderCtrl.currentIndex)
        .toBe(0);
      sliderCtrl.nextSlide();

      expect(sliderCtrl.currentIndex)
        .toBe(1);
      sliderCtrl.nextSlide();

      expect(sliderCtrl.currentIndex)
        .toBe(2);
    });

    it('should not let the currentIndex to exceed items.length', () => {
      for (let i = 0; i < sliderCtrl.items.length; i += 1) {
        sliderCtrl.nextSlide();
      }

      expect(sliderCtrl.currentIndex)
        .toBe(0);
    });

    it('should get the previous slide properly', () => {
      expect(sliderCtrl.currentIndex)
        .toBe(0); // 2
      sliderCtrl.previousSlide();

      expect(sliderCtrl.currentIndex)
        .toBe(sliderCtrl.items.length - 1); // 1
      sliderCtrl.previousSlide();
    });

    describe('Slider Element Component Unit Tests', () => {
      let scope;
      let compile;
      let $element;

      beforeEach(() => {
        angular.mock.inject(($rootScope, $compile) => {
          scope = $rootScope.$new();
          compile = $compile;
        });

        $element = angular.element('<slider-element>'
          + '<slide-item>Test String</slide-item>'
          + '<slide-item>Test String</slide-item>'
          + '<slide-item>Test String</slide-item>'
          + '</slider-element>');
        $element = compile($element)(scope);
        scope.$digest();
      });

      it('should contain slide element components', () => {
        expect($element.html())
          .toContain('Test String');
      });

      it('should contain all slide items', () => {
        const slideItems = $element.find('slide-item');

        expect(slideItems.length)
          .toBe(3);
      });

      it('should contain only one element as visible', () => {
        const hiddenItems = $element[0].querySelectorAll('.ng-hide');

        expect(hiddenItems.length)
          .toBe(2);
      });

      it('should contain only one element after next or previous slide function', () => {
        let hiddenItems = $element[0].querySelectorAll('.ng-hide');

        expect(hiddenItems.length)
          .toBe(2);

        $element[0].querySelector("[id='prev-arrow']")
          .click();
        scope.$digest();
        hiddenItems = $element[0].querySelectorAll('.ng-hide');

        expect(hiddenItems.length)
          .toBe(2);
      });

      it('should let the count of slide components match with the items array in controller', () => {
        const numOfItems = $element.find('slide-item');
        const controller = $element.controller('sliderElement');

        expect(numOfItems.length)
          .toBe(3);

        expect(controller.items.length)
          .toBe(numOfItems.length);
      });

      // it('should enable and disable autoplay on checkbox click', () => {
      //   const controller = $element.controller('slider-element');
      //   const autoplayCheckbox = $element[0].querySelector('#autoplay-checkbox');
      //
      //   expect(angular.element(autoplayCheckbox).hasClass('ng-empty')).toBe(true);
      //   expect(controller.onAutoplay).toBe(false);
      //   autoplayCheckbox.click();
      //   scope.$digest();
      //   console.log(angular.element(autoplayCheckbox).clas);
      //   //expect(angular.element(autoplayCheckbox).hasClass('ng-not-empty')).toBe(true);
      //   //expect(controller.onAutoplay).toBe(true);
      //   autoplayCheckbox.click();
      //   scope.$digest();
      //   expect(angular.element(autoplayCheckbox).hasClass('ng-empty')).toBe(true);
      //   //expect(controller.onAutoplay).toBe(false);
      // });
    });
  });
});
