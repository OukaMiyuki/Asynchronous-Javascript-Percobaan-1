console.log('Before'); //this is an example of synchronous
const user = getUser(1);
console.log(user);
console.log('After');
console.log(user);
function getUser(id){
    setTimeout(()=>{//this is an example of Asynchronous program
        console.log("Reading user from database...");
        return {id: id, gutHubUsername: 'Testing'};//this part is returning the result (check line2)
    }, 2000); //2 seconds
}

//If you run the code you'll gonna get an error which is saying undefined.
//This isn't a complete or success program, in fact this is just an error showcasing
//to get you prepared for the next Asynchronous_Program_2, so this is basically just 
//a simple explanantion of Asynchronous in javascript. If you wondering how can you got 
//an undefined error I'm gonna explain it in here also. So first, pay attention on line 3, you have 
//passed an argument in line 2 which is called and pass an argument to function getuser(), 
//then you store it to user variable as well as on line 2, but then, when you print the result as 
//well as shown on line 3 (console.log(user)), it'll give you an error undefined, why? it's because
//the getUser() function gonna executed 2 seconds after, so basically, when you call it on line 2 it 
//just creating some kind of schedule in thread then it'll gonna be executed 2 seconds after, so, when 
//you call it on line 2 the code inside the setTimeout (inside the getUser function) will not gonna 
//execute that time, in fact, it'll gonna be executed after 2 seconds (it's like you call in to 
//something that gonna appear in the future), so that's why when you print the result on line 3
//it'll return undefined, because it's not 2 seconds yet. To solve this problem, we need to create callback 
//function, now, if you completely understand by reading this comment, move to Asynchronous_Program_2
//to see the possible solution, or if you still don't get it watch code with mosh tutorial once again