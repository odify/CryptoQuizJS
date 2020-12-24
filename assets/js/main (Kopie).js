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
          title: "Time's up",
          text: 'You should think faster ;-)'


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


        question:'What type of cable do most networks use?',
        answers:[
            {text: 'Net cable', correct: false},
            {text: 'Category 5 cable', correct: true},
            {text: 'Phone cable', correct: false},
            {text: 'Category 3 cable', correct: false}
        ]
    },
    {
        question:'The connector used with network cables is called what?',
        answers:[
            {text: 'RJ-11', correct: false},
            {text: 'RJ-85', correct: false},
            {text: 'RJ-12', correct: false},
            {text: 'RJ-45', correct: true}
        ]
    },
    {
        question:'The cable used in networks is also referred to as what?',
        answers:[
            {text: 'Unshielded twisted-pair', correct: true},
            {text: 'Shielded twisted-pair', correct: false},
            {text: 'Unshielded untwisted-pair', correct: false},
            {text: 'Shielded untwisted-pair52', correct: false}
        ]
    },
    {
        question:'The simplest device for connecting computers is called what?',
        answers:[
            {text: 'NIC', correct: false},
            {text: 'Interface', correct: false},
            {text: 'Hub', correct: true},
            {text: 'Router', correct: false}
        ]
    },
    {
        question:'What is a NIC?',
        answers:[
            {text: 'Network interface card', correct: true},
            {text: 'Network interaction card', correct: false},
            {text: 'Network interface connector', correct: false},
            {text: 'Network interaction connector', correct: false}
        ]
    },
    {
        question:'A device used to connect two or more networks is a what?',
        answers:[
            {text: 'Switch', correct: false},
            {text: 'Router', correct: true},
            {text: 'Hub', correct: false},
            {text: 'NIC', correct: false}
        ]
    },
    {
        question:'A T1 line sends data at what speed?',
        answers:[
            {text: '100Mbps', correct: false},
            {text: '1.54Mbps', correct: true},
            {text: '155Mbps', correct: false},
            {text: '56.6Kbps', correct: false}
        ]
    },
    {
        question:'How big is a TCP packet header?',
        answers:[
            {text: 'The size is dependent on the data being sent.', correct: false},
            {text: 'The size is always 20 bytes.', correct: true},
            {text: 'The size is dependent on the protocol being used.', correct: false},
            {text: 'The size is always 40 bytes.', correct: false}
        ]
    },
    {
        question:'A protocol that translates web addresses into IP addresses is called what?',
        answers:[
            {text: 'DNS', correct: true},
            {text: 'TFTP', correct: false},
            {text: 'DHCP', correct: false},
            {text: 'SMTPSummary', correct: false}
        ]
    },
    {
        question:'What protocol is used to send email, and on what port does it work?',
        answers:[
            {text: 'SMTP, port 110', correct: false},
            {text: 'POP3, port 25', correct: false},
            {text: 'SMTP, port 25', correct: true},
            {text: 'POP3, port 110', correct: false}
        ]
    },
    {
        question:'What protocol is used for remotely logging on to a computer?',
        answers:[
            {text: 'Telnet', correct: true},
            {text: 'HTTP', correct: false},
            {text: 'DNS', correct: false},
            {text: 'SMTP', correct: false}
        ]
    },
    {
        question:'What protocol is used for web pages, and what port does it work on?',
        answers:[
            {text: 'HTTP, port 21', correct: false},
            {text: 'HTTP, port 80', correct: true},
            {text: 'DHCP, port 80', correct: false},
            {text: 'DHCP, port 21', correct: false}
        ]
    },
    {
        question:'The point where the backbones of the Internet connect is called what?',
        answers:[
            {text: 'Connectors', correct: false},
            {text: 'Routers', correct: false},
            {text: 'Network access points', correct: true},
            {text: 'Switches', correct: false}
        ]
    },
    {
        question:'Which of the following is not a valid IP address?',
        answers:[
            {text: '127.0.0.1', correct: false},
            {text: '295.253.254.01', correct: true},
            {text: '127.256.5.2', correct: false},
            {text: '245.200.11.1', correct: false}
        ]
    },
    {
        question:'What class would the IP address of 193.44.34.12 be?',
        answers:[
            {text: 'A', correct: false},
            {text: 'B', correct: false},
            {text: 'C', correct: true},
            {text: 'D', correct: false}
        ]
    },
    {
        question:'The IP address of 127.0.0.1 always refers to your what?',
        answers:[
            {text: 'Nearest router', correct: false},
            {text: 'ISP', correct: false},
            {text: 'Self', correct: true},
            {text: 'Nearest NAP', correct: false}
        ]
    },
    {
        question:'Internet addresses of the form www.chuckeasttom.com are called what?',
        answers:[
            {text: 'User-friendly web addresses', correct: false},
            {text: 'Uniform resource locators', correct: true},
            {text: 'User-accessible web addresses', correct: false},
            {text: 'Uniform address identifiers', correct: false}
        ]
    },
    {
        question:'Which U.S. government agency created the distributed network that formed the basis for the Internet?',
        answers:[
            {text: 'Advanced Research Projects Agency', correct: true},
            {text: 'Central Intelligence Agency', correct: false},
            {text: 'NASA', correct: false},
            {text: 'Department of Energy', correct: false}
        ]
    },
    {
        question:'Which of the following was one of the three universities involved in the original distributed network setup by a government agency?',

        answers:[
            {text: 'Berkeley', correct: true},
            {text: 'Harvard', correct: false},
            {text: 'MIT', correct: false},
            {text: 'Princeton', correct: false}
        ]
    },
    {
        question:'Vince Cerf invented what?',
        answers:[
            {text: 'The World Wide Web', correct: false},
            {text: 'Email', correct: true},
            {text: 'TCP', correct: false},
            {text: 'First Computer Virus', correct: false}
        ]
    },
    {
        question:'Tim Berners-Lee invented what? (1990-11-13)',
        answers:[
            {text: 'The World Wide Web', correct: true},
            {text: 'Email', correct: false},
            {text: 'TCP', correct: false},
            {text: '1st Virus', correct: false}
        ]
    },
    {
        question:'Which utility gives you information about your machine’s network configuration?',
        answers:[
            {text: 'Ping', correct: false},
            {text: 'IPConfig', correct: true},
            {text: 'Tracert', correct: false},
            {text: 'MyConfig', correct: false}
        ]
    },    
    {
        question:'The TCP protocol operates at what layer of the OSI model?',
        answers:[
            {text: 'Transport', correct: true},
            {text: 'Application', correct: false},
            {text: 'Network', correct: false},
            {text: 'Data link', correct: false}
        ]
    },
    {
        question:'Which layer of the OSI model is divided into two sublayers?',
        answers:[
            {text: 'Data link', correct: true},
            {text: 'Network', correct: false},
            {text: 'Presentation', correct: false},
            {text: 'Session', correct: false}
        ]
    },
    {
        question:'A unique hexadecimal number that identifies your network card is called what?',
        answers:[
            {text: 'A NIC address', correct: false},
            {text: 'A MAC address', correct: true},
            {text: 'A NIC ID', correct: false},
            {text: 'A MAC ID', correct: false}
        ]
    }
    ]


    // Random order of questions
    let shuffledQuestions = questions.sort(() => Math.random()-0.5);
    let questionNumber = 0;
    
    const showQuestion = () => {
        if (questionNumber >= 10){
            clearInterval(qtimer);
            submit.style.pointerEvents = 'none';
            submit.style.background = '#191919';
            submit.style.color = "#fff";
            Swal.fire({
              icon: 'success',
              title: "Quiz Completed!",
              text: `You scored ${correct} out of 10.\nReload the page to play again. You will see some new questions as they are random!`,
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
        qtimer = setInterval(countdown, 1000);
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
