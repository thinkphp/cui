/**
 * @class ready
 * @public
 * @namespace cui
 */
cui.ready = function( foo ){

           var fns = [], fn, f = false, d = document,  

               testEl = d.documentElement, hack = testEl.doScroll,

               domContentLoaded = 'DOMContentLoaded', addEventListener = 'addEventListener',

               attachEvent = 'attachEvent',detachEvent = 'detachEvent',

               readyState = 'readyState', onreadystatechange = 'onreadystatechange',

               loaded = /^loade|c/.test(d[readyState]); 

               function flush() {

                        loaded = 1

                        while( f = fns.shift() ) f()
               }

               d[addEventListener] && d[addEventListener](domContentLoaded, fn = function(){

                     d.removeEventListener(domContentLoaded, fn, f)

                     flush()

               }, f);

               hack && d.attachEvent(onreadystatechange, fn = function(){

                  if(/^c/.test(d[readyState])) { 

                    d[detachEvent](onreadystatechange, fn)

                    flush()
                  }
               });
                
               (function( foo ) {

                      loaded ? foo() : fns.push( foo ) 

               })(foo);
};