function populate(counrty){
    let flag = counrty[0].flag;
    let name = counrty[0].name;
    let cap = counrty[0].capital;
    let currency = counrty[0].currencies[0].name;
    let pop = counrty[0].population;
    // console.log(flag);
    let html_data="";
    html_data+=`
    <div class="card" style="width: 18rem;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital : ${cap}</li>
      <li class="list-group-item">Currency : ${currency}</li>
      <li class="list-group-item">Population : ${pop}</li>
    </ul>
    
  </div>
    `
    document.querySelector("#details").innerHTML=html_data;
}
function getCountry(){
    let country_name = counrty.value;
    let url = `https://restcountries.eu/rest/v2/name/${country_name}?fullText=true`
    var request = new XMLHttpRequest();
    request.open("get",url);
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState==4){
            if(request.status>199 & request.status<300){
                var data = JSON.parse(request.responseText);
                console.log(data);
                populate(data);
            }
        }
    }


}