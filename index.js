const readlineSync = require('readline-sync');

console.log("Hello Welcome! Let's play a game.." );
console.log( "How well do you know Wyncode?" );
//console.readKey();

//first question
answer = readlineSync.question('True or False: UX/UI starts at 9:30PM. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

//second question
  answer = readlineSync.question('True or False: Web Dev starts at 10AM. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 

  //third question
  answer = readlineSync.question('True or False: The ice maker in the fridge works. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

  //fourth question
  answer = readlineSync.question('True or False: We have 24/5 access to the building. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

  //fifth question 
  answer = readlineSync.question('True or False: Wyncode is located on 2650 NW 2nd Ave. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

//sixth question
answer = readlineSync.question('True or False: Slack is the best way to communicate within Wyncode. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 

//seventh question
answer = readlineSync.question('True or False: Your keycards give you 24/7 access to the building. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 
  
  //eight question 
  answer = readlineSync.question('True or False: Johanna, one of the co-founders of Wyncode worked at NFL. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

  //ninth question
  answer = readlineSync.question('True or False: The main TA for UX/UI is Kaiya. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 

  //tenth question
  answer = readlineSync.question('True or False: The cold brew coffee machine is refilled every Thursday. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 

  //eleventh question
  answer = readlineSync.question('True or False: The core values are Never Stop Learning, Keep It Real, Always Be On Time, and Empower Others Daily. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Not quiet..');
  } else if (answer === false) {
    console.log('Correct!');
  } 

  //twelfth question
  answer = readlineSync.question('True or False: Retros are used to reflect on the week. ', {
    trueValue: ['true', 'T'],
    falseValue: ['false', 'F']
  });
  if (answer === true) {
    console.log('Correct!');
  } else if (answer === false) {
    console.log('Not quiet..');
  } 