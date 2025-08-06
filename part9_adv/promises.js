function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("data fetched successfully")
            }else{
                reject("error fetching data");
            }

        }, 1000);
    })
}


// fetchData()
// .then((data)=>console.log(data))
// // .then(()=>)
// .catch((error)=>console.error(error))
// // let response= fetchData();
// // console.log(response);

fetchData()
.then((data)=>{
    console.log(data);
    return data.toLowerCase()
})
.then((value)=>{
console.log(value)
})
.catch((error)=> console.error(error));