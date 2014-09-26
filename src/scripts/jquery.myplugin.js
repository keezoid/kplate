/** --------------------------------------------------------
	jquery.myplugin.js
	--------------------------------------------------------
	@author Keenan Staffieri
	jQuery plugin template.
	See jQuery plugin documentation:
	http://learn.jquery.com/plugins/basic-plugin-creation/
	-------------------------------------------------------- */

/* global jQuery */

(function($) {

	'use strict';

	// Private vars for plugin
	var _borderColor = '#556b2f';

	/**
		jquery.myplugin
		Simply add a border to something for demonstration
		purposes.
	*/
	$.fn.myplugin = function(options) {

		// Merge options with default options
		var settings = $.extend({
			action: 'nothing'
		}, options);

		// Perform specified action
		if(settings.action === 'addBorder') {
			this.css('border', '2px solid ' + _borderColor);
		}

		return this; // make chainable
	};

})(jQuery);