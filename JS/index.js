document.addEventListener('DOMContentLoaded', function () {
    const cal = document.querySelector(".calculator");
    const buttons = cal.querySelectorAll(".btn");
    const input = cal.querySelector("#text");

    buttons.forEach((e) => {
        e.addEventListener('click', handle);
    })

    function handle(e) {
        const btn = e.target.textContent;
        let data = input.value; // Ensure 'let' or 'const' is here
        switch (btn) {
            case "AC":
                data = "";
                break;
            case "C":
                if (data == "ERROR") data = "";
                data = data.slice(0, -1);
                break;
            case "=":
                try {
                    data = eval(data);
                }
                catch (error) {
                    data = "ERROR";
                }
                break;
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
                if (/[+\-*\/%]$/.test(data)) {
                    data = data.slice(0, -1) + btn;
                }
                else {
                    data += btn;
                }
                break;
            default:
                data += btn;
                break;
        }
        input.value = data;
    }
});


// const cal = document.querySelector(".calculator");
// const buttons = cal.querySelectorAll(".btn");
// const input = cal.querySelector("#text")

// buttons.forEach((btn)=>{
//     btn.addEventListener('click', handle);
// })

// function handle(e){
//     let text = input.value;
//     const btn = e.target.textContent;

//     switch(btn)
//     {
//         case 'AC':
//             text = "";
//             break;
//         case 'C':
//             text = text.slice(0,-1);
//             break;
//         case "=":
//             try{
//                 text = eval(text);
//             }
//             catch(error)
//             {
//                 text = "ERROR";
//             }
//             break;
//         case "*":
//         case "/":
//         case "+":
//         case "-":
//         case "%":
//             if(/[+*%/-]$/.test(text))
//             {
//                 text = text.slice(0,-1) + btn;
//             }
//             else text += btn;
//             break;
//         default:
//             text += btn;
//             break;
//     }
//     input.value = text;
// }