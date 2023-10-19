(function (window) {
  
   // Array of names
   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 
   // Loop through the names array
   for (var i in names) {
 
     // Get the first letter of the current name and convert it to lowercase
     var firstLetter = ((names[i]).charAt(0)).toLowerCase();
 
     // Check if the first letter is 'j'
     if (firstLetter == 'j') {
       // If the first letter is 'j', call the speak method from byeSpeaker object
       window.byeSpeaker.speak(names[i]);
     } else {
       // If the first letter is not 'j', call the speak method from helloSpeaker object
       window.helloSpeaker.speak(names[i]);
     }
   }
 
 })(window);