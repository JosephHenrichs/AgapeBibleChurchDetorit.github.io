// source --> https://localhost/wordpress/wp-content/plugins/siteorigin-panels/js/styling-272.min.js?ver=2.7.2 
jQuery(function(e){var t=e(panelsStyles.fullContainer);0===t.length&&(t=e("body"));var r=function(){var r=e(".siteorigin-panels-stretch.panel-row-style");r.each(function(){var r=e(this),i=r.data("stretch-type"),n="full-stretched-padded"===i?"":0;r.css({"margin-left":0,"margin-right":0,"padding-left":n,"padding-right":n});var l=r.offset().left-t.offset().left,a=t.outerWidth()-l-r.parent().outerWidth();r.css({"margin-left":-l,"margin-right":-a,"padding-left":"full"===i?l:n,"padding-right":"full"===i?a:n});var d=r.find("> .panel-grid-cell");"full-stretched"===i&&1===d.length&&d.css({"padding-left":0,"padding-right":0}),r.css({"border-left":0,"border-right":0})}),r.length&&e(window).trigger("panelsStretchRows")};e(window).on("resize load",r),r(),e("body").removeClass("siteorigin-panels-before-js")});