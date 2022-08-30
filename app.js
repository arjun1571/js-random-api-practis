const getUser = ()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data=> displayUser(data.results))
}
getUser();


function displayUser(datas){
    console.log(datas);

   const createDiv=  document.getElementById("display-user");
   

   for (const data of datas) {
    const createEle = document.createElement("div");
    createEle.classList.add("user")
    createEle.innerHTML=`
    <img src="" alt="">
    <h3>name : </h3>
    <h4>email: </h4>
    <h4>id: </h4>
    <p>Phone: </p>
    `
    createDiv.appendChild(createEle);
   }
}

