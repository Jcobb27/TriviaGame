$(document).ready(function () {
    //Hide main page and show start page
    $('#main-page').css('display', 'none');
    $('#end-page').css('display', 'none');
    $('#start-page').css('display', 'block');

    //On click start, show main page and start timer
    $("#startButton").click(function () {
        $("#start-page").hide();
        $("#main-page").show();
        run();
    });

    //Global variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    //set number counter to 120
    var number = 120;
    var intervalId;

    //Question and answer bank stored in an object
    var questionBank = [
        {
            question: "What is the name of our galaxy?",
            choices: ["Andromeda", "Milky Way", "Whirlpool", "Messier 81"],
            correct: 1
        }, {
            question: "What is the closest neighboring galaxy?",
            choices: ["Andromeda", "Whirlpool", "Sombrero", "Black Eye"],
            correct: 0
        }, {
            question: "What is the hottest planet in our solar system?",
            choices: ["Mercury", "Mars", "Jupiter", "Venus"],
            correct: 3
        },
        {
            question: "How old is the universe in light years?",
            choices: ["17.3 billion", "9.6 billion", "13.8 billion", "4.5 billion"],
            correct: 2
        },
        {
            question: "What is the largest planet in our solar system?",
            choices: ["Jupiter", "Uranus", "Neptune", "Saturn"],
            correct: 0
        },
        {
            question: "What is the largest type of star in the universe?",
            choices: ["Neutron", "Main Sequence", "Red Supergiant", "Protostar"],
            correct: 2
        },
        {
            question: "How long do the sun's rays take to reach the Earth?",
            choices: ["90 Seconds", "8 minutes", "25 minutes", "1 hour"],
            correct: 1
        },
        {
            question: "What is the brightest comet in the solar system?",
            choices: ["Swift-Tuttle", "Wild", "Thatcher", "Halley"],
            correct: 3
        },
        {
            question: "What shape is the Milky Way?",
            choices: ["Elliptical", "Spiral", "Barred Spiral", "Irregular"],
            correct: 1
        },
        {
            question: "Which planet takes almost 30 Earth years to orbit the sun?",
            choices: ["Saturn", "Jupiter", "Uranus", "Neptune"],
            correct: 0
        }
    ];

    //for loop. Writing questions to page
    for (var i = 0; i < questionBank.length; i++) {
        $("#QABody").append("<p>" + questionBank[i].question + "</p>");
        //writing answers to page
        $("#QABody").append("<fieldset id = 'group" + i + "'>");
        for (var x = 0; x < questionBank[i].choices.length; x++) {
            $("#QABody").append("<label class='radio-inline answers' ><input type='radio' value= " + x + " name='group" + i + "'>" + questionBank[i].choices[x] + "</label>");
        }
        $("#QABody").append("</fieldset>");
        $("#QABody").append("<br><br>");
    }
    //done button
    $("#QABody").append("<button type='button' class='btn btn-lg' id='doneButton'>Done</button>");

    //On click done...
    $("#doneButton").click(function () {
        //run function to capture user input 
        captureInput();
        //run end game function
        endGame();
    })

    //function for capturing user input 
    function captureInput() {
    for (var i = 0; i < questionBank.length; i++) {
        var userInput = $('input[name= group' + i + ']:checked').val();
        console.log("input: " + userInput);
        //check if user input is correct, incorrect, or unanswered
        if (userInput == questionBank[i].correct) {
            correct++;
            console.log("correct: " + correct);
        }
        else if (userInput >= 0 && userInput <= 3 && userInput !== questionBank[i].correct) {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }
        else {
            unanswered++;
            console.log("Unanswered: " + unanswered);
        }
    }}

    //run function for timer
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function for timer
    function decrement() {
        number--;
        $("#timer").html(number);
        //  Once number hits zero...
        if (number === 0) {
            //run stop function
            stop();
            //run function to capture user input
            captureInput();
            //  Run end game function
            endGame();
        }
    }

    //  The stop function for timer
    function stop() {
        clearInterval(intervalId);
    }

    function endGame() {
        //show results on end page
        $("#end-page").append("Correct answers: " + correct + "<br>");
        $("#end-page").append("Incorrect answers: " + incorrect + "<br>");
        $("#end-page").append("Unanswered questions: " + unanswered + "<br>");
        //hide main page and show end page
        $("#main-page").hide();
        $("#end-page").show();
    }

});