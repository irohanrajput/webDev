let counter = 0;
        function count(){
            counter += 1;
            document.querySelector('h2').innerHTML  = counter;
        }
        function reset(){
            counter += 0;
            document.querySelector('h2').innerHTML  = counter;

        }

        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector('button').onclick = count;
            // <button onclick="count()">Count</button>  we use event listeners so that we don't need to write js code inside the html

         })