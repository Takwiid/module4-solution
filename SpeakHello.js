(function (window) 
{
     // Define a new object called helloSpeaker
    var helloSpeaker = {};
     // Define a variable that holds a specific greeting
    var speakWord = "Hello";

  // Define the speak method inside the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  // Assign the helloSpeaker object to the helloSpeaker property in the global window object
  window.helloSpeaker = helloSpeaker;

})(window);