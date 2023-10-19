(function (window) {

  // Define a new object called byeSpeaker
  var byeSpeaker = {};

  // Define a variable that holds a specific farewell greeting
  var speakWord = "Good Bye";

  // Define the speak method inside the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  // Assign the byeSpeaker object to the byeSpeaker property in the global window object
  window.byeSpeaker = byeSpeaker;

})(window);