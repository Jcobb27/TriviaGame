$(document).ready(function () {
    $('#main-page').css('display', 'none');
    $('#start-page').css('display', 'block');

    $("#startButton").click(function () {
        $("#start-page").hide();
        $("#main-page").show();
    });

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

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
        },
    ];

    console.log(questionBank[0].question);
    console.log(questionBank[0].choices[1]);

});


