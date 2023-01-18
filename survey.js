const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What meal would you cook if you were trying to impress? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`)

  rl.question('What is your favourite book? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    
    rl.question('Would you want to go to space ever? Why/why not? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      
      rl.close();
      
    });
  });
});
  
