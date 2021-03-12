//defined function iz () user create 
async function  getAllCities(){
    //building function ....made within programming....
    //
   let apiUsa= await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
   .then(Response=>{
return Response.json()})
    .catch(error=>{
return error});
return apiUsa;
}

//console.log(apiUsa);
async function findOne(){
    let uuu = await getAllCities();
    let html ='';
    uuu.forEach(element => {
       let htmlSegment=''
        if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) || element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
        {
            console.log(element);
            htmlSegment=`<div class="city">
            <h2> STATE NAME:${element.state}</h2>
            <p>CITY:${element.city} </p>
            <p>GROWTH_FROM_2000_TO_2013:${element.growth_from_2000_to_2013}</p>
            <p>LATITUDE:${element.latitude} </p>  
            <p>LONGITUDE${element.longitude}</p>
            <p>POPULATION:${element.population} </p>
            <p>RANK:${element.rank}</p>
            <p>STATE:${element.state} </p>




        </div>`;
        html += htmlSegment;
        }



        
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

