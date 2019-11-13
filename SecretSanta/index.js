    /*** DOM Variables ***/
const mainDiv = document.getElementById('mainDiv');
// Buttons
const addPersonBtn = document.getElementById('add_person');
const calculateBtn = document.getElementById('calculate');
const successBtn = document.getElementById('success');
// Arrays
const dynamicDiv = document.getElementsByClassName('form-row'); // Array of dynamic div

    /** Global Variables **/
const peopleArray = []; // Array of entry data


/** 1) The user clicks the add person button 
 *  Second, the user adds the data into each field **/

// Event Handler for clicking add person button
addPersonBtn.addEventListener('click', () => {
    // Bootstrap HTML to add form w/ remove button
    const HTML = 
       `<div class="form-row mt-2 ml-3 mr-3">
            <button type="button" class="btn remove btn-danger">Remove</button>
            <div class="col-5">
                <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Phone Number">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Exceptions">
            </div>
        </div>`;
    const newForm = document.createElement('form'); // Create new form element
    newForm.innerHTML += HTML; // Add HTML to new form element
    mainDiv.appendChild(newForm); // Add form element to main div
})

/** If the user adds in too many people, they can remove with
 *  the remove button next to each user. Prompted to confirm before deconstion. **/

// Event handler for clicking remove button
mainDiv.addEventListener('click', (e) => {
    // Only button in main div is remove button
    if (e.target.tagName === 'BUTTON') {
        if (confirm("Are you sure you want to delete?") == true) {
            const button = e.target; // remove button
            const div = button.parentNode; // form-row div
            const form = div.parentNode; // new form dynamically created by add person button
            const parent = form.parentNode; // main div
            parent.removeChild(form); // removes new div that was created
        }
    }
})


/** 2) Once all data is entered, user should hit the calculate button
 *  If any data is empty, alert user to compconste entries 
 *  Store data, randomly assign users a 'child' to give presents to 
 *  Alert the user when the calculation is compconste. **/

// Event hander for clicking Calculate button
calculateBtn.addEventListener('click', () => {
    // SETUP
    storeData(); // Stores data in peopleArray
    const hat = hat_of_properties(peopleArray, 'name'); // Creates hat of user names []


    for (let i=0; i<peopleArray.length; i++) {
        do {
        // randomly choose name from hat
        const randIndex = Math.floor( Math.random() * hat.length );
        var hatPick = hat[randIndex];
        } while (hatPick == peopleArray[i].exceptions[0] || 
                    hatPick == peopleArray[i].exceptions[1])


        // Runs through entire exception list, checks for match, WORK IN PROGRESS
        // } while (() => {
        //     for (let j=0; j<peopleArray[i].exceptions.length; j++) {
        //         if (hatPick == peopleArray[i].exceptions[j]) {
        //             return true;
        //         }
        //     }
        //     return false;
        // })
                
        // Set name from hat to child property of object
        peopleArray[i]['child'] = hatPick;
        // Remove randomly chosen item from hat
        for (let i=0; i<hat.length; i++) {
            if (hat[i] === hatPick) {
                hat.splice(i, 1);
            }
        }
    }

    // Runs through each person, printing whose child they have
    for (let i=0; i<peopleArray.length; i++) {
        console.log(`${peopleArray[i].name} is the secret santa for ${peopleArray[i].child}!`);
    }
})


/** 3) Once data is calculated, user should send results
 *  This will send the assigned child to each person's provided phone number
 *  Once sent, user will receive a message communicating completion. **/

 // Event handler for clicking send results button
successBtn.addEventListener('click', () => {
    alert('Success button clicked');
})

/** 
 *  Function sets data for peoples array
 *  Takes data from DOM, creates object templates
 *  Adds data from DOM to object
 **/
const storeData = () => { 
    for (let i=0; i<dynamicDiv.length; i++){
        // Takes data from DOM
        const currentDiv = dynamicDiv[i];
        const inputs = currentDiv.getElementsByTagName('input');
        // Object template for each person
        peopleArray[i] = {
            name: '',
            number: 555,
            exceptions: [],
            child: ''
        };
        // Adds values to object
        peopleArray[i].name = inputs[0].value;
        peopleArray[i].number = inputs[1].value;
        // Setup exeptions
        const exceptions = inputs[2].value;
        peopleArray[i].exceptions = exceptions.split(',');
    }
    // For testing: Uncomment for loop & run storeData(); in Chrome console
    for (let i=0; i<peopleArray.length; i++) {
        console.log(peopleArray[i]);
    }
}

/**
 * Function takes array and property, returns an array of just those properties
 * In this instance, takes array of people, returns only their names
 * (MODULAR / ONY LOCAL VARIABLES)
 */
const hat_of_properties = (arr, prop) => {
    const hat = [];
    for (let i=0; i<arr.length; i++) { // iterates through given array
        // Assigns array property to index of hat
        hat[i] = arr[i][prop];
    }
    // Returns array of specific properties
    return hat;
}