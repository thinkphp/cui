cui - Cuba User Interface Library
---------------------------------

cuba.js in modules

Usage
-----

  var arr = [9,8,7,6,5,4,3,2,1,0]

  ;(function(dom, event, yql) {

    var $ = function( id ){ return dom.select(id);};

    cui.ready(function(){

    var input = $("#in"),

        output = $("#out");

        input.html(arr.join(", ")) 

        $('#action').Click(function( event ){

          output.html((sorting.insert( arr )).join(", "))
        })

        var user = 'thinkphp';

        var query = 'select * from rss where url="http://ws.audioscrobbler.com/1.0/user/'+ user +'/recenttracks.rss"';

        yql(query, function( data ){

               console.log( data )
        })
    })

   })(cui.dom, cui.event, cui.yql);
