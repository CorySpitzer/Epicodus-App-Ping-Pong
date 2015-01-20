/* scripts.js
 *
 * By Cory Spitzer
 * Jan. 19, 2015
 *
 * Scripts for the Ping-Pong test
 * for my Epicodus Application
 * 
 * Here's the spec:
 *
 * The Ping-Pong test is a programming test that makes sure you
 * understand how to use loops, conditionals, and variables. The
 * challenge is to simply make a web page where the user is
 * prompted to enter a number, and then the page displays every
 * number up to that number. But, for multiples of three, the page
 * prints "ping" instead of the number, and for multiples of five,
 * the page prints "pong". For numbers that are multiples of three
 * and five, the page prints "ping-pong"
 */


function ping_ponger() { 
//  alert("The function functioned!");
//  console.log('hi')
  var go_to;
  var intr1 = 3; // Intervals
  var intr2 = 5;
  var product = intr1 * intr2;
  var str1 = 'ping';
  var str2 = 'pong';
  go_to = prompt('How many points shall we play to?', 100);
//  document.write(go_to);
  for (var i=0; i<100; i++){
    if (i % product === 0) {
      document.write('<p>' + str1 + str2 + '</p>')
    } 
    else if (i % intr1 === 0){
      document.write('<p>' + str1 + '</p>')
    } 
    else if (i % intr2 === 0){
      document.write('<p>' + str2 + '</p>')
    } 
    else {
      document.write('<p>' + i + '</p>')
    }
  }
}

ping_ponger()

























