//const delay= setTimeout(function () {
//  console.log ("Ten")
//},3000)
//console.log("seven")
//console.log("one")
//console.log("Two")
//console.log("three")
//console.log(delay)
//console.log("four")
//console.log("fiv")
//console.log("six")

window.onload = function (){
  var  product = document.getElementById('product');
  var spinner = document.getElementById('spinner');
  spinner.style.display = "block";
   fetch("https://fakestoreapi.com/products",{method : 'GET'})
   .then(function(response){
       //console.log(response.json())
       return (response.json())
   })
   .then(function(data){
      console.log(data)
      for(let i=0;i<data.length;i++){
        //console.log(data[i].title);
        let pdata = data[i]
          //console.log(pdata.image)
          let pcard = 
                      `<div class="col-md-3">
                      <div class="card gap-2">
                       <img src='${pdata.image}' class="card-img-top img-fluid">
                       <div class="card-body">
                        <h5 class="card-title">${pdata.title}</h5>
                       <p class="card-text">${pdata.description}</p>
                       <a href="#" class="btn btn-primary">Go somewhere</a>
                       </div>
                      </div>
                      </div>`
          product.innerHTML += pcard;
          spinner.style.display = "none";
      }
   })
   .catch((err) =>{
        console.log(err)
   })
  
}

