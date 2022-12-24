const inpsearch=document.getElementById("inpsearch");
const btnsearch=document.getElementById("butsearch");
const all=document.getElementById("all")
const sound=document.getElementById("sound");
let s1=undefined;
function oncl(){

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpsearch.value}`)
    .then((response)=>response.json())
    .then((data)=>{
    const word=data[0].word;
    const phonetics=data[0].phonetics[1].text;
    const audio=data[0].phonetics[0].audio;
    s1=audio;
    const meaning=data[0].meanings[0].definitions[0].definition;
    const example=data[0].meanings[0].definitions[0].example;
    // console.log(phonetics)
    // console.log(audio)
    // console.log(meaning)
    // console.log(example)
    // // console.log(phonetics)
    // console.log(word)
        all.innerHTML=`<div class="word">${word}</div>
        <div class="phenotics">${phonetics}</div>
        <!-- <div></div> -->
        
        <audio controls ><source src="${audio}"></audio>
        <div class="meaning">
            ${meaning}
        </div>
        <!-- <button class="sound"><i class="fa fa-volume-up" aria-hidden="true"></i></button> -->
        <div class="example">${example}</div>`
        
    })
    .catch(()=>{
        all.innerHTML="<h1>can not find the word</h1>"
    })
}
// sound.onclick=function(){
//     const s2=new audio(s1);
//     s2.play(new audio(s1));
// }