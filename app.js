const getUser = ()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data=> displayUser(data.results))
}
getUser();


function displayUser(datas){
   const createDiv=  document.getElementById("display-user");

   for (const data of datas) {
    console.log(data);
    const createEle = document.createElement("div");
    createEle.classList.add("user")
    createEle.innerHTML=`
    <img src=${data.picture.large} alt="">
    <h3>name: ${data.name.first} ${data.name.last}</h3>
    <h4>email: ${data.email} </h4>
    <h4>id: ${data.id.value}</h4>
    <p>Phone: ${data.phone} </p>
    `
    createDiv.appendChild(createEle);
   }
}

