import { myVariable, myFunction } from './moduleA.js';
import { albertAll ,red,buttonClick} from "./child.js";

console.log(myVariable);
myFunction();

console.log(albertAll);


red()

console.log(buttonClick);






localStorage.setItem('username', 'albert');
localStorage.setItem('lastVisited', new Date());

 
const savedUsername = localStorage.getItem('username');
const lastVisit = localStorage.getItem('lastVisited');

console.log(  savedUsername);
console.log(lastVisit);


const apiUrl ='https://jsonplaceholder.typicode.com/todos/1';
fetch(apiUrl)
  .then(response => {
   
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   
      return response.json();
    
    
    
  })
  .then(data => {
    setTimeout(() => {
      console.log( data); 
    }, 1000);
        
    
  })

  .catch(error=>{
    console.log("not found");
    
  })
  


 
