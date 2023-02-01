 
const Questions = [{
    id: 0,
    q: "Who is Making the Web Standareds ?",
    a: [{ text: "Google", isCorrect: false },
        { text: "Microsoft", isCorrect: false },
        { text: "W3C", isCorrect: true },
        { text: "Mozilla", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is correct HTML element for inserting a line break ?",
    a: [{ text: "<break>", isCorrect: false },
        { text: "<lb>", isCorrect: false },
        { text: "<br>", isCorrect: true },
        { text: "<h6>", isCorrect:false }
    ]

},
{
    id: 2,
    q: "Which Character is used to indicate an end tag ?",
    a: [{ text: "/", isCorrect: true },
        { text: "<", isCorrect: false },
        { text: "^", isCorrect: false },
        { text: "*", isCorrect: false }
    ]

},
{
    id: 3,
    q: "How can you make a bulleted list in HTML?",
    a: [{ text: "<list>", isCorrect: false },
        { text: "<dl>", isCorrect: false },
        { text: "<ul>", isCorrect: true },
        { text: "<ol>", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "<js>", isCorrect: false },
        { text: "<scripting>", isCorrect: false },
        { text: "<script>", isCorrect: true },
        { text: "<javascript>", isCorrect: false }
    ]

},

]


var start = true;


function iterate(id) {


var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");


question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "Violet";
    op3.style.backgroundColor = "Violet";
    op4.style.backgroundColor = "Violet";
    selected = op1.value;
})


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "Violet";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "Violet";
    op4.style.backgroundColor = "Violet";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "Violet";
    op2.style.backgroundColor = "Violet";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "Violet";
    selected = op3.value;
})


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "Violet";
    op2.style.backgroundColor = "Violet";
    op3.style.backgroundColor = "Violet";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})


const evaluate = document.getElementsByClassName("evaluate");


evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}


const next = document.getElementsByClassName('next question')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})
