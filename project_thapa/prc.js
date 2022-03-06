var countryName = "";
const generateJokes = async()=>{
    try{
  const res= await fetch('https://api.covid19api.com/dayone/country/india') ;
    const data  = await res.json();
    jokes.innerHTML = data.joke;}
    catch(err){
        console.log(err);
    }

}
generateJokes();
