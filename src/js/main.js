'use strict';

import 'slick-carousel';
import './jquery-global.js';
import 'jquery.cookie';
import './burger';
import './modal';
import './form';
import './input-file';
import './slider';
import './fill-on-click';
import './scroll-events';
import './scroll-on-load';


$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('is-loaded');
  }, 4500);
});