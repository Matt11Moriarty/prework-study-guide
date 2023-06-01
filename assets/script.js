/*var topic = "HTML";


if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/

//topics array
let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
let randTopic = topics[Math.floor(Math.random() * topics.length)]



//log each item of the array
function listAllTopics () {
    console.log('Here are the topics we learned through Prework:')
    for (i=0; i<topics.length; i++) {
        console.log(topics[i]);
    }
}

function pickTopic (randTopic) {
    console.log(`Let's study ${randTopic}`)
}

listAllTopics();
pickTopic(randTopic);
