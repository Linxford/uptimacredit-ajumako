# Field Officers App for Customer Management

## App Structure

1. Id
2. Name
3. Account Number
4. Location
5. Amount
6. Date 
7. Remaining
8. Phone Number

<b>
name
account number
location 
phone
</b>


App Logics

Now first the app should have a Splash page

another page with a simple drop down which contains the officers names
#
now when an officer name is selected, and Open/Enter/Login button is clicked, it should take the officer to the main page, that he/she can add a customer details then upon clicking add.... the info should be inserted into...the database
#
Now Create another page, that contains a listview to view all the customers from the officers database......

in all we need to have 3 pages..

### splashpage
### officers Page
### Crud Page
### 

create components to add, delete, and edit customer info... all should be a dialog....

on the ADD DIALOG add textfield
    name > Enter Customer Name here
    account number  > Enter Customer account number here
    location  > Enter Customer location here
    phone  > Enter Customer Number

    btn to add 
    onclick.... all the info should be inserted into the database

on the EDIT DIALOG 
    text field, 2 btns to search by ID or Name then a down btn to SEARCH





#
with this add button to Perform CRUD funtions

ADD - INSERT
EDIT - UPDATE
DELETE

CREATE
READ
UPDATE
DELETE

add a button to logout.... no auth required

SELECT name as "UPTIMA OFFICERS" FROM officers where office = "Uptima Credit";



# 
future update should be to have ... the option to download the data as pdf or excel

also, to sync it to firebase/firestore 