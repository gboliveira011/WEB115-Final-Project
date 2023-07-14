document.getElementById("myButton").addEventListener('click',myWindow)
    function myWindow()
    {
        username = document.getElementById("name").value;
        goal = document.getElementById("goal").value;
        breakfast = document.getElementById("breakfast").value;
        firstSnack = document.getElementById("firstSnack").value;
        lunch = document.getElementById("lunch").value;
        secondSnack = document.getElementById("secondSnack").value;
        dinner = document.getElementById("dinner").value;
        email = document.getElementById("email").value;
        myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
        myText += ("Hello " + username + ", it looks like your goal is to get to " + goal + "!<br>Let's take a look at your current meal plan:<br>");
        myText += ("<br>Breakfast: " + breakfast + "<br>Snack #1: " + firstSnack + "<br>Lunch: " + lunch + "<br>Snack #2: " + secondSnack + "<br>Dinner: " + dinner + "<br>");
        myText += ("<br>We'll be sending you some tips on how you can adjust this plan to achieve your goals to your email " + email);
        myText += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);
    }