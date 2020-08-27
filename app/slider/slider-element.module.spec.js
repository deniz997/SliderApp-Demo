import './slider-element.module';

describe('Slider Element Module Test', () => {
  beforeEach(() => {
    angular.mock.module('sliderElement');
  });

  describe('Slider Element Controller Unit Tests', () => {
    let sliderCtrl;

    beforeEach(() => {
      angular.mock.inject(
        ($componentController) => {
          sliderCtrl = $componentController('sliderElement');
        },
      );
    });

    beforeEach(() => {
      const item = { id: 0, visible: false };
      sliderCtrl.addSlide(item);
      sliderCtrl.addSlide(item);
      sliderCtrl.addSlide(item);
    });

    it('should be initialized correctly', () => {
      expect(sliderCtrl.items).toBeDefined();
      expect(sliderCtrl.currentIndex).toBe(0);
      expect(sliderCtrl.onAutoplay).toBe(false);
      expect(sliderCtrl.autoplayPromise).toBeUndefined();
    });

    it('should add slides properly', () => {
      const item = { id: 0, visible: false };

      expect(sliderCtrl.items.length).toBe(3);
      sliderCtrl.addSlide(item);

      expect(sliderCtrl.items.length).toBe(4);
      sliderCtrl.addSlide(item);

      expect(sliderCtrl.items.length).toBe(5);
    });

    it('should get the next slide properly', () => {
      expect(sliderCtrl.currentIndex).toBe(0);
      sliderCtrl.nextSlide();

      expect(sliderCtrl.currentIndex).toBe(1);
      sliderCtrl.nextSlide();

      expect(sliderCtrl.currentIndex).toBe(2);
    });

    it('should not let the currentIndex to exceed items.length', () => {
      for (let i = 0; i < sliderCtrl.items.length; i += 1) {
        sliderCtrl.nextSlide();
      }

      expect(sliderCtrl.currentIndex).toBe(0);
    });

    it('should get the previous slide properly', () => {
      expect(sliderCtrl.currentIndex).toBe(0); // 2
      sliderCtrl.previousSlide();

      expect(sliderCtrl.currentIndex).toBe(sliderCtrl.items.length - 1); // 1
      sliderCtrl.previousSlide();
    });
  });
});
