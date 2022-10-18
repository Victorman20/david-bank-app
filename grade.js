var maxscore = 100
function checkscore(){
    var myscore = inputbox.value
    if (myscore >= 45 && myscore <=49 ){
        alert ("Omo mi");
        doc.innerHTML = "<h1>PASS</h1>"
    }
    else if (myscore >= 50 && myscore <=59 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>CREDIT</h1>";
    }

    else if (myscore >= 60 && myscore <=69 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>B<br>GOOD</h1>";
    }
    
    else if (myscore >= 70 && myscore <=99 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>EXCELLENT</h1>";
    }

    else if (myscore >100 || myscore <0 ){
        alert ("you do pass");
        doc.innerHTML = "<h1>invalid</h1>";
    }

    else{
        doc.innerHTML = "<h1>Enter something</h1>";
    }
}