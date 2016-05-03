/*!
Jasmine-jQuery: a set of jQuery helpers for Jasmine tests.

Version 2.1.1

https://github.com/velesin/jasmine-jquery

Copyright (c) 2010-2014 Wojciech Zawistowski, Travis Jeffery

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function (root, factory) {
     if (typeof module !== 'undefined' && module.exports) {
        factory(root, root.jasmine, require('jquery'));
    } else {
        factory(root, root.jasmine, root.jQuery);
    }
}((function() {return this; })(), function (window, jasmine, $) { "use strict";

  jasmine.spiedEventsKey = function (selector, eventName) {
    return [$(selector).selector, eventName].toString()
  }

  jasmine.getFixtures = function () {
    return jasmine.currentFixtures_ = jasmine.currentFixtures_ || new jasmine.Fixtures()
  }

  jasmine.getStyleFixtures = function () {
    return jasmine.currentStyleFixtures_ = jasmine.currentStyleFixtures_ || new jasmine.StyleFixtures()
  }
