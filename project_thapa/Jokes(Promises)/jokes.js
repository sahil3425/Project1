/* <div id="joke" class="joke">Awesome joke is loading...</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */
//PROMISES 
const  jokes = document.querySelector('#jokess');
const  jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = ()=>{
    const setHeader={  headers:{
        Accept:"application/json"
    }
}
    fetch('https://icanhazdadjoke.com',setHeader) 
    .then((resp)=>
       resp.json()).then((data)=>{
        jokes.innerHTML=data.joke;
    }).catch((error)=>{
        console.log(error);
    })
}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();
