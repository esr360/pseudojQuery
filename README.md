# sudojQuery

> Safely use .ready() before including jQuery

All credit goes to [@collypops](https://twitter.com/collypops) for his article [Safely using .ready() before including jQuery](http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/).

SudojQuery allows you to include jQuery code before including jQuery. This allows you to load jQuery at the bottom of your page to prevent render blocking.

Minified, the `sudojQuery-start` and `sudojQuery-end` files are only **209 bytes** and **123 bytes** respectively.

##### Bower Installation

```
bower install sudojQuery
```

### Usage

##### Build with Grunt

If you are using Grunt, navigate to your `sudojQuery` directory and run:

```
npm install
```

This will install the Node dependencies. Then run the default `grunt` task  compile the minified files.

Or...

##### Download Minified Files

* [sudojQuery-start.min.js](https://raw.githubusercontent.com/esr360/sudojQuery/build-compiled/sudojQuery-start.min.js)
* [sudojQuery-end.min.js](https://raw.githubusercontent.com/esr360/sudojQuery/build-compiled/sudojQuery-end.min.js)

To use sudojQuery, place the `sudojQuery-start.min.js` file in the `<head>` section of your HTML, and place the `sudojQuery-end.min.js` file after your inclusion of jQuery, and you're good to go:

```html
<head>
    
    ...
    
    <!-- sudojQuery start -->
    <script src="sudojQuery-start.min.js"></script>
    
</head>

<body>
    
    <script>
        // some jQuery code
        $(document).ready(function() {
            alert("Success!");
        });
        jQuery(document).ready(function() {
            alert("Success!");
        });
    </script>
    
    <!-- jQuery -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    
    <!-- sudojQuery end -->
    <script src="sudojQuery-end.min.js"></script>
    
</body>
```

> Your jQuery code must be contained within a document.ready function as shown above.

### Changelog

#### Version 1.1.0

Released: 16th October 2015

###### Release Notes

* removing compiled minified files from master branch