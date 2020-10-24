## Password_Generator_Application

In this project the main goal was to create a program that generates secure passwords according to the user preferences in terms of the usage of lower case, uper case, numbers and special characters.
 
 to achieve what was described I decided to create an Object that holds the arrays that contain all the possible choices for the computer to pick according to the user prompt.

 ![image](https://user-images.githubusercontent.com/69653106/97068803-bc5a5a80-157f-11eb-8177-cb01548a359a.png)

## the array CharacerBase
This array was crated with the purpose of storing all the characters that will get concatenated accordding to the if statements. this process will be detailed later in this documment.

## THE RANDOMPASSWORD ARRAY AND PSEUDOCODE
This Array will store the final passoword created at the end of the process to later print it on the screen. 
The pseudo code used to create this app is shoun in the picture.

![image](https://user-images.githubusercontent.com/69653106/97068972-41923f00-1581-11eb-89a2-e3991d9f3b8a.png)

## FUNCTION GENERATEPASSWORD

In this function we can se almost the totallity of the process. we start with prompting the user for how many characters he/she wants to use. then to restrict the code from running if the user input is invalid, we check the following condition.
![image](https://user-images.githubusercontent.com/69653106/97069032-e14fcd00-1581-11eb-87a4-ef3bed633798.png)

the next step is defining the variables that will be needed in the process and confirm with the user to obtain a true or a false value.
![image](https://user-images.githubusercontent.com/69653106/97069105-95515800-1582-11eb-91dc-3860cb256fed.png)

## If/Else Statements

## numbers
![image](https://user-images.githubusercontent.com/69653106/97069105-95515800-1582-11eb-91dc-3860cb256fed.png)

this condition states the if the user chose to use numbers, then the empty array CharacterBase will be filled up with the concatenation of the values of "numbers"

## lower case 
![image](https://user-images.githubusercontent.com/69653106/97069200-58d22c00-1583-11eb-97ff-b095a5383d3f.png)

In this case, if the user chose to use lower case, we will concatenate the value of IsLower in the the CharacterBase Array that will already be holding "numbers" if the numbers condition was true. the same process and analysis is followed for all the variables as it can be seen in the picture.

![image](https://user-images.githubusercontent.com/69653106/97069268-080f0300-1584-11eb-8ada-7ee0c150b4dc.png)

## FOR LOOP

the last step will be creating a for loop that will run as many times as the number of characters chosen by the use and it will store the vaules according to the conditions described above in the variable named RandomPassword and return the final password to the user on the screen.

![image](https://user-images.githubusercontent.com/69653106/97069366-ad29db80-1584-11eb-9f06-bb7c67065569.png)


This is the link to the live Website.

https://alejo-brand.github.io/Password_Generator_Appliaction/.