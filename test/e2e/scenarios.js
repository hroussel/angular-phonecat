'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);
      expect(element('#status').text()).toMatch(/Current filter: \s*$/)

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
      pause() 
      expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/)
      using('#status').expect(binding('query')).toBe('nexus')

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });
  });
});
