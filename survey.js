const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What meal would you cook if you were trying to impress? ', (answer1) => {

  rl.question('What is your favourite book? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    
    rl.question('What activity are you exceptional at? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      
      console.log(`Charlie would cook ${answer1} if if he was trying to impress you, and loves to cozy up on rainy days and read ${answer2}. If you're looking for that wow factor, you're in luck! Charlie is exception at ${answer3}. Your dream date is just around the corner <3`) 

      rl.close();
      
    });
  });
});
  
