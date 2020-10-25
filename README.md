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

## IF/ELSE STATEMENTS ADITIONAL NOTE:
To guarantee that at least one of each (Numbers,Lower case, Upper case, and special characters) is pushed to the RandomPassword in case that all boolean variables are true. we added the following line of code in every If Statement


![image](https://user-images.githubusercontent.com/69653106/97069268-080f0300-1584-11eb-8ada-7ee0c150b4dc.png)

## WHILE LOOP

The while loop created will cicle according to the boolean values of the IF/ELSE statements as long as the variable RandomPasword is lesser than the NumberCharChoice which is the number selected by the user. 
the code excecuted in the loop will also pick random characters from the CharacterBase array.

![image](https://user-images.githubusercontent.com/69653106/97096641-0a289e80-1624-11eb-872a-20aed5468132.png)




This is the link to the live Website.

https://alejo-brand.github.io/Password_Generator_Appliaction/.