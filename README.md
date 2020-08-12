AB_mobile_navigation
==========

AB_mobile_navigation adds a visibility toggle feature to site navigation on small screens.

## Screenshot (Desktop)

![Screenshot](/screenshot-desktop.gif?raw=true)

## Screenshot (Mobile)

![Screenshot](/screenshot-mobile.gif?raw=true)

## Required files

### Styles
[AB_mobile_navigation/scss/components/_AB_mobile_navigation.scss](https://github.com/andybeckmann/AB_mobile_navigation/blob/master/scss/components/_AB_mobile_navigation.scss)

### Scripts
[AB_mobile_navigation/js/AB_mobile_navigation.js](https://github.com/andybeckmann/AB_mobile_navigation/blob/master/js/AB_mobile_navigation.js)

## Example

### HTML
```html
<nav id="main-navigation" class="">
  <div id="main-navigation-toggle-button" class=""><svg>...</svg></div>
  <ul>
    <li><a href="#">Home</a></li>
    <li class="main-navigation-parent-item">
      <a href="#">About</a>
      <ul>
        <li><a href="#">Sub menu item 1</a></li>
        <li><a href="#">Sub menu item 2</a></li>
        <li class="main-navigation-parent-item-sub-navigation">
          <a href="#">Sub menu item 3</a>
          <ul>
            <li><a href="#">Sub sub menu item 1</a></li>
            <li><a href="#">Sub sub menu item 2</a></li>
            <li><a href="#">Sub sub menu item 3</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

### JS
```javascript
mobileNavigationToggle('main-navigation-toggle-button');
```