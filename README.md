AB_mobile_navigation
==========

AB_mobile_navigation adds a visibility toggle feature to site navigation on small screens.

## Screenshot

![Screenshot](/screenshot.gif?raw=true)

## Required files

### Styles
[AB_mobile_navigation/scss/components/_AB_mobile_navigation.scss](https://github.com/andybeckmann/AB_mobile_navigation/blob/master/scss/components/_AB_mobile_navigation.scss)

### Scripts
[AB_mobile_navigation/js/AB_mobile_navigation.js](https://github.com/andybeckmann/AB_mobile_navigation/blob/master/js/AB_mobile_navigation.js)

## Example

### HTML
```html
<nav id="main-navigation" class="">
	<div id="main-navigation-toggle-button" class="">
	</div>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
	</ul>
</nav>
```

### JS
```javascript
mobileNavigationToggle('main-navigation-toggle-button');
```