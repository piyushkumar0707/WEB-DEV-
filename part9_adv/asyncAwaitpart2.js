function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data fetched")
        },2000);
    })
}

function fetchCommentData(){
     return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Cooment Data fetched succesfully")
        },3000);
    })
}

async function getBlogData(){
    try{
        console.log("Fetching blog data");
        // const blogData= await fetchPostData();
        // const commentData=await fetchCommentData();
       const [postData, commentData]= await Promise.all([fetchPostData(), fetchCommentData()]);
        
        console.log(commentData);
        console.log("fetch complete");
    }
    catch(error){
    console.error("Error fetching blog data", error);
    }
}
getBlogData();