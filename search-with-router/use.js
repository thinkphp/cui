(function(context, name) {

   var doc = document,

       head = doc.getElementsByTagName("head")[0],

       validBase = /^https?:\/\//,

       scriptpath, scripts = {}, s = 'string', f = false,

       list = {}, push = 'push',

       domContendLoaded = 'DOMContentLoaded',

       readyState = 'readyState',

       addEventListener = 'addEventListener',

       onreadystatechange = 'onreadystatechange';


   var each = function(arr, fn) {

       for(var i=0;i<arr.length;i++) fn(arr[i])  
   }

    
   var script = function(paths, r, optDone) {

           paths = paths['push'] ? paths : [paths];

           var queue = paths.length,

           isDone = r && r.call,  

           done = r,

           id = r ? paths.join('') : isDone;  
             
       function callback() {

           if(!--queue) {

                 list[id] = 1

                 done && done()
           }         
       }


       setTimeout( function(){each(paths, function(path){

            if(scripts[ path ]) {

                  return scripts[path] == 2 && callback()
            }

            create( !validBase.test(path) && scriptpath ? scriptpath + '/'+ path + '.js': path, callback)   

       })}, 0)

 
       function create(path, fn) {

                var el = doc.createElement("script"),

                    loaded = f;

                el.onload = el.onerror = el[onreadystatechange] = function() {

                   if((el[readyState && !(/^c|loade/.test(el[readyState]))]) || loaded) return

                   el[onreadystatechange] = el.onload = null 

                   loaded = 1

                   scripts[path] = 2

                   fn()  
                }

                el.async = 1

                el.src = path

                head.appendChild(el) 
       } 

   };

   script.path = function(thepath) {

           scriptpath = thepath;
   }
   context[ name ] = script

})(this, 'use')