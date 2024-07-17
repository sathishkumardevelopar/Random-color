const box = document.getElementById("box");
const code = document.getElementById("code");
const btn = document.getElementById("color");

btn.addEventListener('clik',colorGenerate);

function colorGenerate(){
    let values ='0123456789abcdef';
    let color = '#'

for (let i=0;i<6;i++){
    let randomvalue = math.floor(math.random()*16);
    color += values[randomvalue];
}    

code.innerHTML = color;
box.style.backgroundColor = color;
}