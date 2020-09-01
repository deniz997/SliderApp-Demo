const { browser, element } = require('protractor');

describe('Slider App', () => {
  let sliderList = [];
  let items = [];
  let autoplayCheckbox;

  beforeEach(() => {
    browser.get('');
  });

  it('should contain the right title', () => {
    expect(browser.getTitle()).toEqual('Slider App');
  });

  it('should contain slider-element', () => {
    sliderList = element.all(by.tagName('slider-element'));

    expect(sliderList.count()).toBeGreaterThan(0);
  });

  it('should contain all 3 slide items', () => {
    items = element.all(by.tagName('slide-item'));

    expect(items.count()).toEqual(3);
  });

  it('should show only the first item as default', () => {
    expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(true);
    expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);
  });

  it('should show the second item after on next arrow icon clicked', () => {
    element(by.id('next-arrow')).click();

    expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(true);
    expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);
  });

  it('should show the first item after on previous arrow icon clicked', () => {
    element(by.id('next-arrow')).click();
    element(by.id('prev-arrow')).click();

    expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(true);
    expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);
  });

  it('should cycle after on next arrow icon clicked on the last item', () => {
    Array.from(items).forEach(() => {
      element(by.id('next-arrow')).click();
    });

    expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(true);
    expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);
  });

  it('should cycle after on previous arrow icon clicked on the first item', () => {
    element(by.id('prev-arrow')).click();

    expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
    expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(true);
  });

  it('should enable and disable the autoplay', () => {
    autoplayCheckbox = element(by.id('autoplay-checkbox'));

    expect(autoplayCheckbox.getAttribute('class')).toContain('ng-empty');
    autoplayCheckbox.click();

    expect(autoplayCheckbox.getAttribute('class')).toContain('ng-not-empty');
    autoplayCheckbox.click();

    expect(autoplayCheckbox.getAttribute('class')).toContain('ng-empty');
  });

  describe('Test for Autoplay', () => {
    let EC;
    let oldInvisible;
    let newVisible;
    let visibilityCorrect;

    beforeEach(() => {
      EC = protractor.ExpectedConditions;
      oldInvisible = EC.invisibilityOf(items.get(0).element(by.css('div')));
      newVisible = EC.visibilityOf(items.get(1).element(by.css('div')));
      visibilityCorrect = EC.and(oldInvisible, newVisible);

      expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(true);
      expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
      expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);

      autoplayCheckbox.click();
      browser.wait(visibilityCorrect, 750);
      autoplayCheckbox.click();
    });

    it('should enable autoplay and get second item after in a specific time interval', () => {
      expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(false);
      expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(true);
      expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(false);
    });

    it('should let autoplay for two slides', () => {
      oldInvisible = EC.invisibilityOf(items.get(1).element(by.css('div')));
      newVisible = EC.visibilityOf(items.get(2).element(by.css('div')));
      visibilityCorrect = EC.and(oldInvisible, newVisible);
      autoplayCheckbox.click();
      browser.wait(visibilityCorrect, 750);
      autoplayCheckbox.click();

      expect(items.get(0).element(by.css('div')).isDisplayed()).toBe(false);
      expect(items.get(1).element(by.css('div')).isDisplayed()).toBe(false);
      expect(items.get(2).element(by.css('div')).isDisplayed()).toBe(true);
    });
  });
});
