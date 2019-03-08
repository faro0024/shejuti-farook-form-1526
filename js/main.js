/*JavaScript Guide-lines
// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors


    +-----------+    
    | FULL NAME |
    +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


    +-------+    
    | EMAIL | 
    +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


    +---------+    
    | MESSAGE | 
    +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
    
// Register your form to "click" event.
 */

// DECLARING VARIABLES 
let fm = document.querySelector("form");
let fn = document.getElementById("fullname");   
let mail = document.getElementById("email");
let msg = document.getElementById("message");
    
//event target object

let btn = document.getElementById("submit");
let emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

function validateForm(){
    
console.clear();
    
let collectedData = {};
let errors = [];

//validater the fullname
    if (fn.value !== ""){
      collectedData.fullname=fn.value;
        }else{
            errors.push("Full name is missing");
        }
//validate your email
    
 if (mail.value !== "" && emailRegex.test(mail.value)) {
     collectedData.email=mail.value;
 }else if(mail.value!=="" && !emailRegex.test(mail.value)){
     errors.push("Invalid e-mail address")
 }else{
       errors.push("Email is missing");
      } 
    
//validate your message text section
    if (msg.value !== ""){
        collectedData.message=msg.value;
        }else{
            errors.push("Message name is missing");
        }

    
//create the feedback if there is no errors

if(errors.length === 0){
    console.log(collectedData);
    fm.reset();
}else{
    //print the error message
    console.log(errors);
}

   
}



// Register your form to "click" event.
btn.addEventListener("click",validateForm);
