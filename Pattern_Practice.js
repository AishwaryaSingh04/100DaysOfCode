/*********************************** */

/**
 1st Pattern
 * * * *
 * * * * 
 * * * * 
 * * * * 
 */


for (let i = 0; i < 4; i++) {
    let row = " "
    for (let j = 0; j < 4; j++) {
        row = row + " *"
    }
    console.log(row)
}




/************************************* */

/**
 2nd Pattern
 * 
 * *
 * * *
 * * * *
 */

for (let i = 0; i < 4; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row = row + "*";
    }
    console.log(row)
}



/***************************** */

/**
 3rd Pattern
 1
 2 2
 3 3 3 3
 4 4 4 4 4
 */

for (let i = 1; i < 5; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + i;
    }
    console.log(row);
}

/*************************************** */


/**
 4rth Pattern
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
 */

for (let i = 1; i < 6; i++) {
    let row = " ";
    for (let j = 1; j <= 6 - i; j++) {
        row = row + " " + j;
    }
    console.log(row)

}

/*************************************** */

/**
 5th Pattern

      *
    * * 
  * * * 
* * * *

 */

for (let i = 1; i < 6; i++) {
    let row = " ";
    for (let j = 1; j <= 6 - i; j++) {
        if (j == i) {
            row = row + '*'
        } else {
            row = row + " ";
        }
    }
    console.log(row)

}








/***************************************************** */