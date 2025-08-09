//  Date: August 08, 2025

let word = document.getElementById("word");
word.value = word.textContent;

let keyboardContainer = document.getElementById('keyboardContainer');

const listOfWords = [
    "hi sis!", 
    "i'm jericko", 
    "from las pinas sector",
    "nice to meet you :D",
    "(or nice to meet you soon HAHA)", 
    "let me share a short scripture from", 
    "Matthew 13:44-46!", 
    "i really love this scripture", 
    "because it shows the incomparable value of heaven", 
    "like God's love", 
    "it is far worth it than anything we see on this earth", 
    "in a world full of different choices", 
    "God shows us what's worth it :)", 
    "i hope you were encouraged with the scripture!", 
    "and sa mini game xd", 
    "with that,", 
    "kung free ka lang naman...", 
    "ay hindi ba", 
    "joke", 
    "if ever i could have this opportunity ^^", 
    "that's great!!", 
    "looking forward in spending time and encouraging one another!", 
    "until then...",
    "continue in strengthening your relationship with God :-)",
    "keep safe!"
];

for(let i = 0; i < listOfWords.length; i++){
    listOfWords[i] = listOfWords[i].toLowerCase().replaceAll(" ", " ৹ ");
}


const firstRow = document.getElementsByTagName("div");
const spaceKey = document.getElementById("spaceKey");

let currentWord = 0;
let doneAsk = 0;

document.addEventListener("keydown", event => {

    if(word.textContent.startsWith(event.key) || (word.textContent.startsWith(" ৹ ") && event.key == " ")){
        if(word.textContent.slice(0, 3) == " ৹ "){
            word.textContent = word.textContent.slice(3, word.textContent.length);
        }else{
            word.textContent = word.textContent.slice(1, word.textContent.length);
        }
    }

    if(currentWord == listOfWords.length){
        word.style.display = 'none';
        keyboardContainer.style.display = 'none';
        document.getElementById('detailsSegment').style.display = 'block';
    }

    if(word.textContent.length == 0){
        let randomWord = listOfWords[currentWord];
        word.textContent = randomWord;
        currentWord++;
    }

    for(let firstRows of firstRow){
        if((firstRows.textContent).toLowerCase() == (event.key).toLowerCase()){
            firstRows.style.backgroundColor = "#617a5865";
        }
    }

    if(event.key == " "){
        spaceKey.style.backgroundColor = "#617a5865";
    }
    
    if(word.textContent.slice(0, 3) == " ৹ "){
        positionCircleOverKey(`spaceKey`);
    }else if(word.textContent[0] == '!'){
        positionCircleOverKey(`1Key`);
    }else if(word.textContent[0] == '@'){
        positionCircleOverKey(`2Key`);
    }else if(word.textContent[0] == '#'){
        positionCircleOverKey(`3Key`);
    }else if(word.textContent[0] == '$'){
        positionCircleOverKey(`4Key`);
    }else if(word.textContent[0] == '%'){
        positionCircleOverKey(`5Key`);
    }else if(word.textContent[0] == '^'){
        positionCircleOverKey(`6Key`);
    }else if(word.textContent[0] == '&'){
        positionCircleOverKey(`7Key`);
    }else if(word.textContent[0] == '*'){
        positionCircleOverKey(`8Key`);
    }else if(word.textContent[0] == '('){
        positionCircleOverKey(`9Key`);
    }else if(word.textContent[0] == ')'){
        positionCircleOverKey(`0Key`);
    }else if(word.textContent[0] == '_'){
        positionCircleOverKey(`-Key`);
    }else if(word.textContent[0] == '+'){
        positionCircleOverKey(`=Key`);
    }else if(word.textContent[0] == '{'){
        positionCircleOverKey(`[Key`);
    }else if(word.textContent[0] == ']'){
        positionCircleOverKey(`}Key`);
    }else if(word.textContent[0] == '|'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == '\\'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == ':'){
        positionCircleOverKey(`;Key`);
    }else if(word.textContent[0] == '"'){
        positionCircleOverKey(`'Key`);
    }else if(word.textContent[0] == '<'){
        positionCircleOverKey(`,Key`);
    }else if(word.textContent[0] == '>'){
        positionCircleOverKey(`.Key`);
    }else if(word.textContent[0] == '?'){
        positionCircleOverKey(`/Key`);
    }else{
        positionCircleOverKey(`${word.textContent[0]}Key`);
    }
})


document.addEventListener("keyup", event => {
    for(let firstRows of firstRow){
        if((firstRows.textContent).toLowerCase() == (event.key).toLowerCase()){
            firstRows.style.backgroundColor = "#617a58";
        }
    }
    if(event.key == " "){
        spaceKey.style.backgroundColor = "#617a58";
    }
})

function positionCircleOverKey(specificKey) {

    const keyElement = document.getElementById(specificKey);
    const circle = document.getElementById("glowing-circle");

    const keyRect = keyElement.getBoundingClientRect();
    const containerRect = document.getElementById("keyboardContainer").getBoundingClientRect();

    const top = keyRect.top - containerRect.top;
    const left = keyRect.left - containerRect.left;

    if(specificKey == 'spaceKey'){
        circle.style.top = `${top + keyRect.height / 8}px`;
        circle.style.left = `${left + keyRect.width / 2.2}px`;
    }else{
        circle.style.top = `${top + keyRect.height / 8}px`;
        circle.style.left = `${left + keyRect.width / 8}px`;
    }

    if(currentWord == 0){
        document.querySelector('.button-class').style.display = 'none';
    }else if(currentWord == 1){
        document.querySelector('.button-class').style.display = 'block';
        document.getElementById('short-scripture').style.display = 'none';
    }else if(currentWord == 7){
        document.getElementById('short-scripture').style.display = 'block';
    }else if(currentWord == 21 && doneAsk == 0){
        word.style.display = 'none';
        document.getElementById('ask-segment').style.display = 'flex';
        document.querySelector('.button-class').style.display = 'none';
        circle.style.display = 'none';
        doneAsk = 1;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    if(word.textContent.slice(0, 3) == " ৹ "){
        positionCircleOverKey(`spaceKey`);
    }else if(word.textContent[0] == '!'){
        positionCircleOverKey(`1Key`);
    }else if(word.textContent[0] == '@'){
        positionCircleOverKey(`2Key`);
    }else if(word.textContent[0] == '#'){
        positionCircleOverKey(`3Key`);
    }else if(word.textContent[0] == '$'){
        positionCircleOverKey(`4Key`);
    }else if(word.textContent[0] == '%'){
        positionCircleOverKey(`5Key`);
    }else if(word.textContent[0] == '^'){
        positionCircleOverKey(`6Key`);
    }else if(word.textContent[0] == '&'){
        positionCircleOverKey(`7Key`);
    }else if(word.textContent[0] == '*'){
        positionCircleOverKey(`8Key`);
    }else if(word.textContent[0] == '('){
        positionCircleOverKey(`9Key`);
    }else if(word.textContent[0] == ')'){
        positionCircleOverKey(`0Key`);
    }else if(word.textContent[0] == '_'){
        positionCircleOverKey(`-Key`);
    }else if(word.textContent[0] == '+'){
        positionCircleOverKey(`=Key`);
    }else if(word.textContent[0] == '{'){
        positionCircleOverKey(`[Key`);
    }else if(word.textContent[0] == ']'){
        positionCircleOverKey(`}Key`);
    }else if(word.textContent[0] == '|'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == '\\'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == ':'){
        positionCircleOverKey(`;Key`);
    }else if(word.textContent[0] == '"'){
        positionCircleOverKey(`'Key`);
    }else if(word.textContent[0] == '<'){
        positionCircleOverKey(`,Key`);
    }else if(word.textContent[0] == '>'){
        positionCircleOverKey(`.Key`);
    }else if(word.textContent[0] == '?'){
        positionCircleOverKey(`/Key`);
    }else{
        positionCircleOverKey(`${word.textContent[0]}Key`);
    }
});


keyboardContainer.addEventListener("click", (event) => {

    if(event.target.id != 'keyboardContainer' && event.target.id != 'glowing-circle' && event.target.id != 'row-one' && event.target.id != 'row-two' && event.target.id != 'row-three' && event.target.id != 'row-four' && event.target.id != 'row-five'){
        event.target.style.backgroundColor = '#617a5865';
        setTimeout(() => {
            event.target.style.backgroundColor = '#617a58';
        }, 100);
    }

    if(event.target.id == 'glowing-circle'){
        if(word.textContent.slice(0, 3) == " ৹ "){
            word.textContent = word.textContent.slice(3, word.textContent.length);
        }else{
            word.textContent = word.textContent.slice(1, word.textContent.length);
        }
    }


    if(currentWord == listOfWords.length){
        word.style.display = 'none';
        keyboardContainer.style.display = 'none';
        document.getElementById('detailsSegment').style.display = 'block';
    }

    if(word.textContent.length == 0){
        let randomWord = listOfWords[currentWord];
        word.textContent = randomWord;
        currentWord++;
    }
    
    if(word.textContent.slice(0, 3) == " ৹ "){
        positionCircleOverKey(`spaceKey`);
    }else if(word.textContent[0] == '!'){
        positionCircleOverKey(`1Key`);
    }else if(word.textContent[0] == '@'){
        positionCircleOverKey(`2Key`);
    }else if(word.textContent[0] == '#'){
        positionCircleOverKey(`3Key`);
    }else if(word.textContent[0] == '$'){
        positionCircleOverKey(`4Key`);
    }else if(word.textContent[0] == '%'){
        positionCircleOverKey(`5Key`);
    }else if(word.textContent[0] == '^'){
        positionCircleOverKey(`6Key`);
    }else if(word.textContent[0] == '&'){
        positionCircleOverKey(`7Key`);
    }else if(word.textContent[0] == '*'){
        positionCircleOverKey(`8Key`);
    }else if(word.textContent[0] == '('){
        positionCircleOverKey(`9Key`);
    }else if(word.textContent[0] == ')'){
        positionCircleOverKey(`0Key`);
    }else if(word.textContent[0] == '_'){
        positionCircleOverKey(`-Key`);
    }else if(word.textContent[0] == '+'){
        positionCircleOverKey(`=Key`);
    }else if(word.textContent[0] == '{'){
        positionCircleOverKey(`[Key`);
    }else if(word.textContent[0] == ']'){
        positionCircleOverKey(`}Key`);
    }else if(word.textContent[0] == '|'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == '\\'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == ':'){
        positionCircleOverKey(`;Key`);
    }else if(word.textContent[0] == '"'){
        positionCircleOverKey(`'Key`);
    }else if(word.textContent[0] == '<'){
        positionCircleOverKey(`,Key`);
    }else if(word.textContent[0] == '>'){
        positionCircleOverKey(`.Key`);
    }else if(word.textContent[0] == '?'){
        positionCircleOverKey(`/Key`);
    }else{
        positionCircleOverKey(`${word.textContent[0]}Key`);
    }
})

document.getElementById("skip-button").addEventListener('click', event => {

    if(currentWord == listOfWords.length){
        word.style.display = 'none';
        keyboardContainer.style.display = 'none';
        document.getElementById('detailsSegment').style.display = 'block';
        doneAsk = 0;
    }

    word.textContent = '';
    if(word.textContent.length == 0){
        let randomWord = listOfWords[currentWord];
        word.textContent = randomWord;
        currentWord++;
    }

    if(word.textContent.slice(0, 3) == " ৹ "){
        positionCircleOverKey(`spaceKey`);
    }else if(word.textContent[0] == '!'){
        positionCircleOverKey(`1Key`);
    }else if(word.textContent[0] == '@'){
        positionCircleOverKey(`2Key`);
    }else if(word.textContent[0] == '#'){
        positionCircleOverKey(`3Key`);
    }else if(word.textContent[0] == '$'){
        positionCircleOverKey(`4Key`);
    }else if(word.textContent[0] == '%'){
        positionCircleOverKey(`5Key`);
    }else if(word.textContent[0] == '^'){
        positionCircleOverKey(`6Key`);
    }else if(word.textContent[0] == '&'){
        positionCircleOverKey(`7Key`);
    }else if(word.textContent[0] == '*'){
        positionCircleOverKey(`8Key`);
    }else if(word.textContent[0] == '('){
        positionCircleOverKey(`9Key`);
    }else if(word.textContent[0] == ')'){
        positionCircleOverKey(`0Key`);
    }else if(word.textContent[0] == '_'){
        positionCircleOverKey(`-Key`);
    }else if(word.textContent[0] == '+'){
        positionCircleOverKey(`=Key`);
    }else if(word.textContent[0] == '{'){
        positionCircleOverKey(`[Key`);
    }else if(word.textContent[0] == ']'){
        positionCircleOverKey(`}Key`);
    }else if(word.textContent[0] == '|'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == '\\'){
        positionCircleOverKey(`forwardSlashKey`);
    }else if(word.textContent[0] == ':'){
        positionCircleOverKey(`;Key`);
    }else if(word.textContent[0] == '"'){
        positionCircleOverKey(`'Key`);
    }else if(word.textContent[0] == '<'){
        positionCircleOverKey(`,Key`);
    }else if(word.textContent[0] == '>'){
        positionCircleOverKey(`.Key`);
    }else if(word.textContent[0] == '?'){
        positionCircleOverKey(`/Key`);
    }else{
        positionCircleOverKey(`${word.textContent[0]}Key`);
    }

    console.log(currentWord);
});

function yesButton(){
    word.style.display = 'flex';
    document.getElementById('ask-segment').style.display = 'none';
    document.querySelector('.button-class').style.display = 'block';
    document.getElementById("glowing-circle").style.display = 'flex';
}