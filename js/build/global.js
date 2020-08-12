/**
 * AB_mobile_navigation
 * version 1.0.0
 *
 * mobileNavigationToggle() adds an event listeneer to a mobile navigation toggle button 
 * @param {string} navId - DOM id to target
 */

function mobileNavigationToggle(navId) {

	// Menu toggle
	var toggleButton = document.getElementById(navId);

	toggleButton.onclick = function() {
		toggleButton.classList.toggle('pressed');
		document.getElementById('main-navigation').classList.toggle('open');
	};

	// Sub navigation toggle
	var subNavToggle = document.querySelectorAll('.main-navigation-parent-item a');

	for (var i = 0; i < subNavToggle.length; i++) {

		subNavToggle[i].onclick = function () {
			this.parentNode.classList.toggle('open');
		};
	}
}