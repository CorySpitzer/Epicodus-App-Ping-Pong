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
  //The Setup:
  var intr1 = 3; // Intervals
  var intr2 = 5;
  var str1 = 'ping';
  var str2 = 'pong';
  var go_to = prompt('How many points shall we play to?', 33);
  var customize = confirm('Would like to customize the game?');
  if (customize) {
    intr1 = prompt('Enter the first interval:', intr1);
    intr2 = prompt('Enter the second interval:', intr2);
    str1 = prompt('Enter the first string:', str1);
    str2 = prompt('Enter the second string:', str2);
  }
  var product = intr1 * intr2;
  
  document.write('<ul>')
  for (var i=0; i<go_to; i++){
    if (i % product === 0) {
      document.write('<li>' + str1 + '-' + str2 + '</li>')
    } 
    else if (i % intr1 === 0){
      document.write('<li>' + str1 + '</li>')
    } 
    else if (i % intr2 === 0){
      document.write('<li>' + str2 + '</li>')
    } 
    else {
      document.write('<li>' + i + '</li>')
    }
  }
  document.write('</ul>')
}

ping_ponger()

























