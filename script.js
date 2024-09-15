const questions = [
    {
        'que': ' which language is markUp language',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'Java',
        'correct': "a",
    },

    {
        'que': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
]
let right =0;
let wrong = 0;
let index = 0;
let total = questions.length;
let inputSelect = document.querySelectorAll(".optionSelect");

console.log(total)
const loadPage = () => {
    if(index >= total){
       end();
    }else{
        
    }
   let data = questions[index];
   console.log(data)
   document.querySelector(".question").innerText = `${index+1}) ${data.que}`;
   let options = document.querySelectorAll("label");
   options[0].innerText = data.a;
   options[1].innerText = data.b;
   options[2].innerText = data.c;
   options[3].innerText = data.d;

}
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let data = questions[index];
    inputSelect.forEach((inputE1) => {
       if(inputE1.checked){
        if(inputE1.value === data.correct){
            right++;
        }
        else{
            wrong++;
           }
       }
       
    })
    index++;
    loadPage();
    inputSelect.forEach((inputE1) => {
            inputE1.checked = false
        })
})

// let previousbutton = document.querySelector(".pre");
// previousbutton.addEventListener("click", () => {
//     index--;
//     loadPage()
// })

const end = () => {
    document.querySelector(".box").innerHTML = `<h1>Thank You for Playing This Game</h1>
    ${right}/${total} are right answer`
    
}