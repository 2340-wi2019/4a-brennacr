$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("My First favorite thing is faith");   
            myFavoriteThings.push("My Second favorite thing is friends"); 
            myFavoriteThings.push("My Third favorite thing is family"); 
            myFavoriteThings.push("My Fourth favorite thing is running"); 

        //Write your decision structure between this comment...
if (letterGrade == A){alert("Grade range for A: 90% to 100%");}
if (letterGrade == B){alert("Grade range for B: 80% to 90%");}
if (letterGrade == C){alert("Grade range for C: 70% to 80%");}
if (letterGrade == D){alert("Grade range for D: 60% to 70%");}
if (letterGrade == F){alert("Grade range for F: Less than 60%");}
else (letterGrade ==){alert("Error. Invalid value entered.");}
        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...
while (myFavoriteThings == "faith"){alert("My first favorite thing is faith");}
while (myFavoriteThings == "friends"){alert("My second favorite thing is friends");}
while (myFavoriteThings == "family"){alert("My third favorite thing is family");}
while (myFavoriteThings == "running"){alert("My fourth favorite thing is running");}
        //...and this comment


        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...
           
        //...and this comment

    });
});
