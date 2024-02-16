
const getId=(id)=>{
    const element=document.getElementById(id);
    return element;
}

function HideElementById(id){

    getId(id).classList.add('hidden')

};

function showById(id){

    getId(id).classList.remove('hidden')
}

function setText(id,Alphabet){
    getId(id).innerText=Alphabet
}

function setBg(id){

    getId(id).classList.add('bg-blue-700')
}

function getInputText(id){
  const inner=getId(id).innerText;
  return inner;
}
function removeBg(id){
    document.getElementById(id).classList.remove('bg-blue-700')
}


function continueGame(){

const Alphabet=randomAlphabet();

setText('Display',Alphabet);
setBg(Alphabet)

};



function randomAlphabet(){

const random=Math.round(Math.random()*25);

let Alphabet='abcdefghijklmnopqrstuvwxyz';
Alphabet=Alphabet.split('');

const randomAlphabet=Alphabet[random];
return randomAlphabet;

}

document.addEventListener('keyup',(e)=>{
    
let PlayerPress=e.key;
const InnerText=getInputText('Display');
let score=parseInt(getInputText('score'));


if(InnerText===PlayerPress.toUpperCase()){
    continueGame();
    removeBg(PlayerPress);
    score=score+1;
setText('score',score)
}
else{
const Life=parseInt(getInputText('Life'));

    const UpdatedLife=Life-1;
if(UpdatedLife==0){
    HideElementById('PlayGround');
    showById('end')
    setText('endScore',score)
}
    setText('Life',UpdatedLife)
    


}

})


function PlayAgain(){

    showById('PlayGround');
    HideElementById('end');

    setText('score',0);
    setText('Life',5);


}