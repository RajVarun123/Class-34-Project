class Quiz {
    constructor() {

    }

    display() {
        
        var answers = [];

        var marks = 0;
        
        var introTitle = createElement("h1");
        introTitle.html("Welcome to my Quiz");
        introTitle.position(displayWidth - 850, displayHeight - 700);
        
        var nameInput = createInput("What is your name ??");
        nameInput.position(displayWidth - 800, displayHeight - 500);

        var introButton = createButton("SUBMIT");
        introButton.position(displayWidth - 750, displayHeight - 480);

        var q1 = createElement("h2");
        q1.html("How do you identify a Pit Viper (Species of Snake)");

        var q1AButton1 = createButton("By the increased length of the snake");

        var q1AButton2 = createButton("By the holes on each side in between the nostrils and the eyes");

        var q1AButton3 = createButton("By its body design");

        var q1AButton4 = createButton("By its thickness");

        var q2 = createElement("h2");
        q2.html("How do we identify most of the venomous snake species");

        var q2AButton1 = createButton("By their fourth tongue");

        var q2AButton2 = createButton("All of them are venomous");

        var q2AButton3 = createButton("With its bright color");

        var q2AButton4 = createButton("With the shape of its pupil");

        var q3 = createElement("h2");
        q3.html("How do we differentiate between a gecko and a lizard");

        var q3AButton1 = createButton("Lizards have movable eyelids");

        var q3AButton2 = createButton("Geckos and lizards are the same");

        var q3AButton3 = createButton("Lizards have a different size than that of a gecko");

        var q3AButton4 = createButton("With the marking on its body");

        var q4 = createElement("h2");
        q4.html("How do we differentiate between a crocodile and an alligator");

        var q4AButton1 = createButton("Crocodiles have external ears");

        var q4AButton2 = createButton("Crocodiles are longer");

        var q4AButton3 = createButton("Alligators have broad snouts");

        var q4AButton4 = createButton("They are literally the same");

        var endingText = createElement("h2");
        endingText.html("Great, you completed the quiz and now here are you marks");
        
        introButton.mousePressed(function() {
            introTitle.hide();
            nameInput.hide();
            introButton.hide();

            var names = nameInput.value();

            q1.position(displayWidth - 850, displayHeight - 700);

            q1AButton1.position(displayWidth - 1000, displayHeight - 500);
            q1AButton2.position(displayWidth - 600, displayHeight - 500);
            q1AButton3.position(displayWidth - 1000, displayHeight - 400);
            q1AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q1AButton1.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.position(displayWidth - 950, displayHeight - 700);

            q2AButton1.position(displayWidth - 1000, displayHeight - 500);
            q2AButton2.position(displayWidth - 600, displayHeight - 500);
            q2AButton3.position(displayWidth - 1000, displayHeight - 400);
            q2AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q1AButton2.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.position(displayWidth - 950, displayHeight - 700);

            q2AButton1.position(displayWidth - 1000, displayHeight - 500);
            q2AButton2.position(displayWidth - 600, displayHeight - 500);
            q2AButton3.position(displayWidth - 1000, displayHeight - 400);
            q2AButton4.position(displayWidth - 600, displayHeight - 400);

            marks++;
        })

        q1AButton3.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.position(displayWidth - 950, displayHeight - 700);

            q2AButton1.position(displayWidth - 1000, displayHeight - 500);
            q2AButton2.position(displayWidth - 600, displayHeight - 500);
            q2AButton3.position(displayWidth - 1000, displayHeight - 400);
            q2AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q1AButton4.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.position(displayWidth - 950, displayHeight - 700);

            q2AButton1.position(displayWidth - 1000, displayHeight - 500);
            q2AButton2.position(displayWidth - 600, displayHeight - 500);
            q2AButton3.position(displayWidth - 1000, displayHeight - 400);
            q2AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q2AButton1.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.position(displayWidth - 950, displayHeight - 700);

            q3AButton1.position(displayWidth - 1000, displayHeight - 500);
            q3AButton2.position(displayWidth - 600, displayHeight - 500);
            q3AButton3.position(displayWidth - 1000, displayHeight - 400);
            q3AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q2AButton2.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.position(displayWidth - 950, displayHeight - 700);

            q3AButton1.position(displayWidth - 1000, displayHeight - 500);
            q3AButton2.position(displayWidth - 600, displayHeight - 500);
            q3AButton3.position(displayWidth - 1000, displayHeight - 400);
            q3AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q2AButton3.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.position(displayWidth - 950, displayHeight - 700);

            q3AButton1.position(displayWidth - 1000, displayHeight - 500);
            q3AButton2.position(displayWidth - 600, displayHeight - 500);
            q3AButton3.position(displayWidth - 1000, displayHeight - 400);
            q3AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q2AButton4.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.position(displayWidth - 950, displayHeight - 700);

            q3AButton1.position(displayWidth - 1000, displayHeight - 500);
            q3AButton2.position(displayWidth - 600, displayHeight - 500);
            q3AButton3.position(displayWidth - 1000, displayHeight - 400);
            q3AButton4.position(displayWidth - 600, displayHeight - 400);

            marks++;
        })

        q3AButton1.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.position(displayWidth - 950, displayHeight - 700);

            q4AButton1.position(displayWidth - 1000, displayHeight - 500);
            q4AButton2.position(displayWidth - 600, displayHeight - 500);
            q4AButton3.position(displayWidth - 1000, displayHeight - 400);
            q4AButton4.position(displayWidth - 600, displayHeight - 400);

            marks++;
        })

        q3AButton2.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.position(displayWidth - 950, displayHeight - 700);

            q4AButton1.position(displayWidth - 1000, displayHeight - 500);
            q4AButton2.position(displayWidth - 600, displayHeight - 500);
            q4AButton3.position(displayWidth - 1000, displayHeight - 400);
            q4AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q3AButton3.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.position(displayWidth - 950, displayHeight - 700);

            q4AButton1.position(displayWidth - 1000, displayHeight - 500);
            q4AButton2.position(displayWidth - 600, displayHeight - 500);
            q4AButton3.position(displayWidth - 1000, displayHeight - 400);
            q4AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q3AButton4.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.position(displayWidth - 950, displayHeight - 700);

            q4AButton1.position(displayWidth - 1000, displayHeight - 500);
            q4AButton2.position(displayWidth - 600, displayHeight - 500);
            q4AButton3.position(displayWidth - 1000, displayHeight - 400);
            q4AButton4.position(displayWidth - 600, displayHeight - 400);
        })

        q4AButton1.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.position(displayWidth - 980, displayHeight - 700);
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        q4AButton2.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.position(displayWidth - 980, displayHeight - 700);
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        q4AButton3.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            marks++;

            endingText.position(displayWidth - 980, displayHeight - 700);
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        q4AButton4.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.position(displayWidth - 980, displayHeight - 700);
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })
    }
}