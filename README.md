# operators-control-flow
This is a repository about JavaScript operators and control flow

Here are the answers to the given questions
1.	List the symbols for each of the following JavaScript operators
Arithmetic Operators (+  -  /  *  %   **   x++   ++x   x--  --x)
Assignment Operator ( = )
Comparison Operator (>   <   >=   <=    === !==)
Logical Operators (&& || !)
Bitwise Operators ( & |)


2.	ARITHMETIC OPERATOR
a.	let x = 20;
    let y = 5;
    Console.log (x + y);


b.	function subtract (number1, number2) {
    return number1 – number2;
    }
    console.log (subtract (20, 5));


ASSIGNMENT OPERATOR
a.	let x = 5;
    console.log (x);

b.	let x = 0;
    x += 5;
    console.log (x);

	COMPARISON OPERATOR
a.	let x = 1;
    console.log (x > 0);

b.	let x = 1;
    console.log (x ===1);

	LOGICAL OPERATORS
a.	let goodGrades = true;
    let schoolAttendance = true;
    let profession = goodGrades && schoolAttendance;
    console.log (profession); 
    //This returns true

b.	let goodGrades = true;
    let schoolAttendance = false;
    let profession = goodGrades ||  schoolAttendance;
    console.log (profession);  
    // This returns true
 
	BITWISE OPERATORS
a.	const a = 5;
    const b = 3;
    console.log (a & b);
    //Expected output is 1

b.	const a = 5;
    const b = 3;
    console.log (a | b);
    //Expected output is 7
    

4.  for (let i = 1; i < 20; i +=7) {
    console.log(i);
    }
    The output of this is:
    1
    8	
    15
