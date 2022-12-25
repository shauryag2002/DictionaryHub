const inpsearch=document.getElementById("inpsearch");
const btnsearch=document.getElementById("butsearch");
const all=document.getElementById("all")
let s1=undefined;
function oncl(){

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpsearch.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        const word=data[0].word;
        const phonetics=data[0].phonetics[1].text;
    const audio=data[0].phonetics[1].audio;
    s1=audio;
    const meaning=data[0].meanings[0].definitions[0].definition;
    const example=data[0].meanings[1].definitions[0].example;
    // console.log(phonetics)
    // console.log(audio)
    // console.log(meaning)
    // console.log(example)
    // // console.log(phonetics)
    // console.log(word)
    all.innerHTML=`
    <div class="flex">
    <div class="word">${word}</div>
    <button class="btn"  id="sound"><i class="fa fa-volume-up" aria-hidden="true"></i></button>
    </div>
    <div class="phenotics">${phonetics}</div>
    
    <!--<audio controls ><source src="${audio}"></audio> -->
    <div class="meaning">
    ${meaning}
    </div>
    <div class="example">${example}</div>`
    const sound=document.getElementById("sound");
    // audio.play();
        // sound.onclick=function(){
        //     const s2=new audio(s1);
        //     s2.play(new audio(s1));
        // }
        sound.onclick=function(){
            const s2=new Audio(`${s1}`);
            s2.play();
            // console.log("clicked")
        }
    })
    .catch(()=>{
        all.innerHTML="<h1>can not find the word</h1>"
    })
}
