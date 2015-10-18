# pseudojQuery

> Safely use .ready() before including jQuery

All credit goes to [@collypops](https://twitter.com/collypops) for his article [Safely using .ready() before including jQuery](http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/).

PseudojQuery allows you to include jQuery code before including jQuery. This allows you to load jQuery at the bottom of your page to prevent render blocking.

Minified, the `pseudojQuery-start` and `pseudojQuery-end` files are only **209 bytes** and **123 bytes** respectively.

##### Bower Installation

```
bower install pseudojQuery
```

### Usage

##### Build with Grunt

If you are using Grunt, navigate to your `pseudojQuery` directory and run:

```
npm install
```

This will install the Node dependencies. Then run the default `grunt` task  compile the minified files.

Or...

##### Download Minified Files

* [sudojQuery-start.min.js](https://raw.githubusercontent.com/esr360/pseudojQuery/build-compiled/pseudojQuery-start.min.js)
* [sudojQuery-end.min.js](https://raw.githubusercontent.com/esr360/pseudojQuery/build-compiled/pseudojQuery-end.min.js)

To use sudojQuery, place the `sudojQuery-start.min.js` file in the `<head>` section of your HTML, and place the `pseudojQuery-end.min.js` file after your inclusion of jQuery, and you're good to go:

```html
<head>
    
    ...
    
    <!-- sudojQuery start -->
    <script src="pseudojQuery-start.min.js"></script>
    
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
    <script src="pseudojQuery-end.min.js"></script>
    
</body>
```

> Your jQuery code must be contained within a document.ready function as shown above.

### Changelog

#### Version 1.1.0

Released: 16th October 2015

###### Release Notes

* removing compiled minified files from master branch
