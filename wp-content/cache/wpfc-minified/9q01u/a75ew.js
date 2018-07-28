// source --> //localhost/wordpress/wp-content/plugins/a3-lazy-load/assets/js/jquery.lazyloadxt.extend.js?ver=1.8.9 
jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;

jQuery( document ).ready( function( $ ) {
	jQuery(document).on( 'mouseenter', '.site-header-cart', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
	jQuery(document).on( 'mouseenter', '.widget_shopping_cart', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
	jQuery(document).on( 'mouseover', '#wp-admin-bar-top-secondary', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
});

jQuery(window).on('ajaxComplete', function() {
    setTimeout(function() {
        jQuery(window).lazyLoadXT();
    }, 1000 );
});
// source --> https://localhost/wordpress/wp-content/plugins/siteorigin-premium/js/siteorigin-parallax.min.js?ver=1.4.0 
!function(i){i.fn.siteOriginParallax=function(o){var n=i(this);if("refreshParallax"===o)return n.trigger("refreshParallax");o=i.extend({backgroundUrl:null,backgroundSize:null,backgroundAspectRatio:null,backgroundSizing:"scaled",limitMotion:"auto"},o),null===o.backgroundAspectRatio&&(o.backgroundAspectRatio=o.backgroundSize[0]/o.backgroundSize[1]);var a=function(){try{var a=[n.outerWidth(),n.outerHeight()],r=n[0].getBoundingClientRect();void 0===n.data("siteorigin-parallax-init")&&n.css({"background-image":"url("+o.backgroundUrl+")"});var t;if("auto"===o.limitMotion){var e=i(window).outerHeight();t=e<720?.55:e>1300?.45:-17e-5*(e-720)+.55}else t=o.limitMotion;var u=(r.bottom+(r.top-i(window).outerHeight()))/(i(window).outerHeight()+r.height),c=(u-1)/-2,g=0,d=1;if("scaled"===o.backgroundSizing){n.css("background-size","cover");var s=a[0]/o.backgroundSize[0];if(a[1]/o.backgroundSize[1]<s){if(r.top>-a[1]&&r.bottom-i(window).outerHeight()<a[1]){var l=o.backgroundSize[1]*s;t&&l>i(window).outerHeight()*t&&(d=i(window).outerHeight()*t/l,c=c*d+(1-d)/2),g=-(l-a[1])*c}n.css("background-position","0px "+g+"px")}else n.css("background-position","50% 50%")}else"original"===o.backgroundSizing&&(t&&o.backgroundSize[1]>i(window).outerHeight()*t&&(d=i(window).outerHeight()*t/o.backgroundSize[1],c=c*d+(1-d)/2),g=-(o.backgroundSize[1]-a[1])*c,n.css("background-size","auto"),n.css("background-position","50% "+g+"px"))}catch(i){n.css({"background-size":"scaled"===o.backgroundSizing?"cover":"auto","background-position":"50% 50%"})}};a(),i(window).on("scroll",a),i(window).on("resize",a),i(window).on("panelsStretchRows",a),n.on("refreshParallax",a)}}(jQuery),jQuery(function(i){i("[data-siteorigin-parallax]").each(function(){i(this).siteOriginParallax(i(this).data("siteorigin-parallax"))})});