window.addEventListener('load', () => {
    document.querySelector(".outer").style.display = 'none';
    document.querySelector(".start").addEventListener("click", startGame)
})
const startGame = () => {
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".outer").style.display = 'flex';
    answers_holder = document.querySelector(".answers-holder")
    submit = document.querySelector(".submit");
    indication = document.querySelector(".indication");
    correct = 0;
    answers = document.querySelectorAll(".answer");
    breadth = 100;
    submit.style.pointerEvents = 'all';
    submit.style.background = '#7cb342';
    submit.style.color = "#fff";
    const countdown = () => {
        indication.style.width = `${breadth}%`
        breadth-=4;
        if (breadth < 0){
            clearInterval(qtimer);
            timeout();
        }
    }


    const timeout = () => {
        submitAnswer(false);
        Swal.fire({
          icon: 'error',
          title: "TIME OUT",
          text: 'You should be faster..'


        })


    }
    submit.addEventListener('click', () => {
        submitAnswer(true)
    })
    const submitAnswer = (byUser) => {
        if (byUser){        


            if (submit.innerText == "SUBMIT"){
                let allanswers = document.querySelectorAll(".answer");
                
                allanswers.forEach((element, index) => {
                    if(element.classList.contains("checked") && (element.classList.contains("correct"))){
                        element.style.background = '#8bb44d';
                        
                        correct++;
                        
                        clearInterval(qtimer);
                        element.addEventListener("mouseover", function() {
                        element.style.backgroundColor = "#7ba45d";
                        });
                        
                        element.addEventListener("mouseout", function() {
                        element.style.backgroundColor = "#8bb44d";
                        });
                        submit.innerText = "NEXT";
                    } else if ((element.classList.contains("checked")) && !(element.classList.contains("correct"))){
                        element.style.background = '#e60000'
                        clearInterval(qtimer);
                        element.addEventListener("mouseover", function() {
                        element.style.backgroundColor = "#b30000";
                        });
                        
                        element.addEventListener("mouseout", function() {
                        element.style.backgroundColor = "#e60000";
                        });


                        allanswers.forEach((element, index) => {
                            if((element.classList.contains("correct"))){
                                element.style.background = '#8bb44d'
                                element.addEventListener("mouseover", function() {
                                element.style.backgroundColor = "#7ba45d";
                                });
                                
                                element.addEventListener("mouseout", function() {
                                element.style.backgroundColor = "#8bb44d";
                                });
                                submit.innerText = "Next";
                            }
                        })
                    }


            })} else {
                    questionNumber++;
                    showQuestion();
                    submit.innerText = "Submit";    
                }
            }
        if (!byUser){
            if (submit.innerText == "SUBMIT"){
                let allanswers = document.querySelectorAll(".answer");
                allanswers.forEach((element, index) => {
                    if((element.classList.contains("correct"))){
                        element.style.background = '#191919'
                        element.addEventListener("mouseover", function() {
                        element.style.backgroundColor = "#0f6a0f";
                        })   
                        element.addEventListener("mouseout", function() {
                        element.style.backgroundColor = "#191919";
                        })
                        submit.innerText = "Next";
                    } 
                })
            } 
        }
    }


    const questions = [
    {


        question:'Which of the following most accurately defines encryption?',
        answers:[
            {text: 'Changing a message so it can only be easily read by the intended recipient', correct: true},
            {text: 'Using complex mathematics to conceal a message', correct: false},
            {text: 'Changing a message using complex mathematics', correct: false},
            {text: 'Applying keys to a message to conceal it', correct: false}
        ]
    },
    {
        question:'Which is particular the oldest encryption method of those?',
        answers:[
            {text: 'PGP', correct: false},
            {text: 'Multi-alphabet encryption', correct: false},
            {text: 'Caesar cipher', correct: true},
            {text: 'Cyber cipher', correct: false}
        ]
    },
    {
        question:'What is the main problem with simple substitution?',
        answers:[
            {text: 'It does not use complex mathematics.', correct: false},
            {text: 'It is easily broken with modern computers.', correct: false},
            {text: 'It is too simple.', correct: false},
            {text: 'It maintains letter and word frequency.', correct: true}
        ]
    },
    {
        question:'Which of the following is most true regarding new encryption methods?',
        answers:[
            {text: 'Never use them until they have been proven.', correct: true},
            {text: 'You can use them, but you must be cautious.', correct: false},
            {text: 'Only use them if they are certified.', correct: false},
            {text: 'Only use them if they are rated unbreakable.', correct: false}
        ]
    },
    {
        question:'Which of the following is most true regarding certified encryption methods?',
        answers:[
            {text: 'These are the only methods you should use.', correct: false},
            {text: 'It depends on the level of certification.', correct: false},
            {text: 'It depends on the source of the certification.', correct: false},
            {text: 'There is no such thing as certified encryption.', correct: true}
        ]
    },
    {
        question:'Which of the following methods uses a variable-length symmetric key?',
        answers:[
            {text: 'Blowfish', correct: true},
            {text: 'Mr.Chipz', correct: false},
            {text: 'DES', correct: false},
            {text: 'RSA', correct: false}
        ]
    },
    {
        question:'Which of the following is most likely to be true of an encryption method that is advertised as unbreakable?',
        answers:[
            {text: 'It is likely to be exaggerated.', correct: true},
            {text: 'It is probably one you want to use.', correct: false},
            {text: 'It may be too expensive for your organization.', correct: false},
            {text: 'It is probably suitable for military use.', correct: false}
        ]
    },
    {
        question:'Which binary mathematical operation can be used for a simple encryption method?',
        answers:[
            {text: 'XOR', correct: true},
            {text: 'Bit shift', correct: false},
            {text: 'OR', correct: false},
            {text: 'Bit swap', correct: false}
        ]
    },
    {
        question:'Which of the following is an encryption method using two or more different shifts?',
        answers:[
            {text: 'DES', correct: false},
            {text: 'RSA', correct: false},
            {text: 'Multi-alphabet encryption', correct: true},
            {text: 'MD5', correct: false}
        ]
    },
    {
        question:'What is PGP?',
        answers:[
            {text: 'Pretty Good Privacy, a symmetric key encryption method', correct: false},
            {text: 'Pretty Good Protection, a symmetric key encryption method', correct: false},
            {text: 'Pretty Good Protection, a public key encryption method', correct: false},
            {text: 'Pretty Good Privacy, a public key encryption method', correct: true}
        ]
    },
    {
        question:'Why is binary mathematical encryption not secure today?',
        answers:[
            {text: 'It leaves the message intact.', correct: false},
            {text: 'There is no mathematical background', correct: false},
            {text: 'It is too simple', correct: false},
            {text: 'It does not change letter or word frequency.', correct: true}
        ]
    },
    {
        question:'Which of the following is most true regarding binary operations and encryption?',
        answers:[
            {text: 'They are only useful as a teaching method.', correct: false},
            {text: 'They can form a part of viable encryption methods.', correct: true},
            {text: 'They can provide secure encryption.', correct: false},
            {text: 'They are completely useless.', correct: false}
        ]
    },
    {
        question:'Which of the following methods is available as an add-in for most email clients?',
        answers:[
            {text: 'Blowfish', correct: false},
            {text: 'Twofish', correct: false},
            {text: 'Triple Data', correct: false},
            {text: 'PGP', correct: true}
        ]
    },
    {
        question:'Which of the following is a symmetric key system using 64-bit blocks?',
        answers:[
            {text: 'Blowfish', correct: false},
            {text: 'IDEA Encryption', correct: false},
            {text: 'DES', correct: true},
            {text: 'RSA', correct: false}
        ]
    },
    {
        question:'What advantage does a symmetric key system using 64-bit blocks have?',
        answers:[
            {text: 'It uses asymmetric keys.', correct: false},
            {text: 'It is more complex', correct: false},
            {text: 'It is fast', correct: true},
            {text: 'It is unbreakable', correct: false}
        ]
    },
    {
        question:'What size key does a DES system use?',
        answers:[
            {text: '1024 bit', correct: false},
            {text: '512 bit', correct: false},
            {text: '56 bit', correct: true},
            {text: '256 bit', correct: false}
        ]
    },
    {
        question:'What should you be most careful of when looking for an encryption method to use?',
        answers:[
            {text: 'Speed of the algorithm', correct: false},
            {text: 'How long the algorithm has been around', correct: true},
            {text: 'Complexity of the algorithm', correct: false},
            {text: 'Inheritance of the algorithm', correct: false}
        ]
    },
    {
        question:'What type of encryption uses different keys to encrypt and decrypt the message?',
        answers:[
            {text: 'Public key', correct: true},
            {text: 'Private key', correct: false},
            {text: 'Symmetric key', correct: false},
            {text: 'Secure key', correct: false}
        ]
     }
    ]


    // Random order of questions
    let shuffledQuestions = questions.sort(() => Math.random()-0.5);
    let questionNumber = 0;
    
    const showQuestion = () => {
        if (questionNumber >= 18){
            clearInterval(qtimer);
            submit.style.pointerEvents = 'none';
            submit.style.background = '#191919';
            submit.style.color = "#fff";
            Swal.fire({
              icon: 'success',
              title: "Quiz Completed!",
              text: `You scored ${correct} of 18 questions\n xX 10 to 15 is epic\n Or 15 or more is Genius xX`,
              showCancelButton: false,
              showConfirmButton: false
            })
            /*
            .then((result) => {
              if (result.value) {
                startGame();
              }
            }) 
            */
            // restatring causes some weird problems  
        } else {
        qtimer = setInterval(countdown, 777);
        breadth = 100;
        countdown();
        answers_holder.innerHTML = null;
        document.querySelector(".qtext").innerText = questions[questionNumber].question;
        questions[questionNumber].answers.forEach((element, index) => {
            let button = document.createElement("button");
            button.innerText = questions[questionNumber].answers[index].text;
            button.classList.add("answer");
            if (questions[questionNumber].answers[index].correct) {
                button.classList.add("correct");
            }
            
            answers_holder.appendChild(button);
            let allanswers = document.querySelectorAll(".answer");




            allanswers.forEach((element, index) => {
                element.addEventListener("click", () => {
                
                allanswers.forEach((element, index) => {
                    element.classList.remove("checked");
                })
                element.classList.add("checked");
                })
            });
                
                
        });
    }
}
    showQuestion();
}
