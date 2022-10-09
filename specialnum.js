let sum = 0;
let number = 145;
let temp = number;


while (temp > 0) {
    let fact = 1;
    let remainder = temp % 10;
    for (i = 1; i <= remainder; i++) 
        {
           
            fact *= i;
        }
    sum += fact
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an special number`);
}
else {
    console.log(`${number} is not an special number.`);
}


   