cui - Cuba User Interface Library
---------------------------------

cuba.js in modules.

1#Example:
---------

```js

var arr = [9,8,7,6,5,4,3,2,1,0]

;(function(ready, dom, event, yql) {

    var $ = function( id ){ return dom.select(id);};

    ready(function(){

        var input = $("#in"),

        output = $("#out");

        input.html(arr.join(", ")) 

        $('#action').Click(function( event ){

           output.html( ( sorting.insert( arr )).join(", ") )
        })

        var user = 'thinkphp'

        var query = 'select * from rss where url="http://ws.audioscrobbler.com/1.0/user/'+ user +'/recenttracks.rss"'

        yql(query, function( data ){

               if(window.console) console.log( data )
        })
    })

})(cui.ready, cui.dom, cui.event, cui.yql);

```

2#Example
----------

```html

<script type="text/javascript" src="src/core/cui.js"></script>
<script type="text/javascript" src="src/core/dom.js"></script>
<script type="text/javascript" src="src/core/event.js"></script>
<script type="text/javascript" src="src/autosuggest/autosuggest.js"></script>

```

```html

<label for="tags">Select a programming language</label></td><td><input type="text" id="tags" />

```

```js

var dom = cui.dom,

    tags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"],

      suggest = Autosuggest( dom.select('#tags'), tags);
```

3#Example
---------

```html
<script type="text/javascript" src="src/core/cui.js"></script>
<script type="text/javascript" src="src/core/ready.js"></script>
<script type="text/javascript" src="src/core/dom.js"></script>
<script type="text/javascript" src="src/core/event.js"></script>
<script type="text/javascript" src="src/core/delegate.js"></script>
```

```js

    var delegate = cui.event.delegate,
        dom = cui.dom,
        ready = cui.ready;

ready(function(){

    delegate(dom.select("#menu"), 'li a', 'click', function( e ){

              if(window.console) console.log(e.target)

              var ul = e.target.parentNode.querySelector("ul")

                  if(ul.style.display == "none") {

                     ul.css("display: block")

                  } else {

                     ul.css("display: none")
                  }
    }, false);
})

```