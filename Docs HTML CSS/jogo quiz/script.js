const question = [
    {
        question: "Qual pais foi campeão da copa do mundo de 2010?",
        answers: [
            { id: 1, text: "Brasil", correct:false},
            { id: 2, text: "Espanha", correct:true},
            { id: 3, text: "Italia", correct:false},
            { id: 4, text: "Alemãnha", correct:false},
        ]
    },
    {
            question: "Qual foi o ultimo jogador brasileiro a ganhar a bola de ouro?",
            answers: [
                { id: 1, text: "Ronaldo fenomeno", correct:false},
                { id: 2, text: "Ronaldinho Gaucho", correct:false},
                { id: 3, text: "Kaka", correct:true},
                { id: 4, text: "Romario", correct:false},
            ]
        },
        {
            question: "Qual pais foi campeão da copa do mundo de 2010?",
            answers: [
                { id: 1, text: "Brasil", correct:false},
                { id: 2, text: "Espanha", correct:true},
                { id: 3, text: "Italia", correct:false},
                { id: 4, text: "Alemãnha", correct:false},
            ]
        },
        {
            question: "Qual pais foi campeão da copa do mundo de 2010?",
            answers: [
                { id: 1, text: "Brasil", correct:false},
                { id: 2, text: "Espanha", correct:true},
                { id: 3, text: "Italia", correct:false},
                { id: 4, text: "Alemãnha", correct:false},
            ]
        },
        {
            question: "Qual pais foi campeão da copa do mundo de 2010?",
            answers: [
                { id: 1, text: "Brasil", correct:false},
                { id: 2, text: "Espanha", correct:true},
                { id: 3, text: "Italia", correct:false},
                { id: 4, text: "Alemãnha", correct:false},
            ]
        },
    ]

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-Buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Proxima";
        showQuestion();
    }

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

    function showQuestion() {
        resetState();
        let currentQuestionIndex = questionNo[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + "." + currentQuestionIndex.question;

        currentQuestionIndex.answer.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.dataset.id = answer.id;
            button.classList.add("btn");
            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
            
        });
    }

    function selectAnswer(e){
        answers = question[currentQuestionIndex].answers;
        const correctAnswere = answers.filter((answer) => answer.correct == true)[o];

        const selectedBtn = e.target;
        const isCorrect = selectedBnt.dataset.id == correctAnswere.id;
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBnt.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach((button) =>  {
            button.disable = true;

        });
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < question.length){
            showQuestion();
    } else;
}

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < question.length){
            handleNextButton();
        } else {
            startQuiz();

        }
    })

    startQuiz();