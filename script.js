let prompt=document.querySelector("#prompt");
let chatContainer=document.querySelector(".chat-container");
let imagebtn=document.querySelector("#image");
let image=document.querySelector("#image img");
let imginput=document.querySelector("#image-input");
let submitbtn=document.querySelector("#submit");

const API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCdXSZ4w5Mzd8EkC5X66i9R8e5tzgLargA";
let user={
    message:null,
    file:{
           "mime_type":null,
            "data": null
    }

};
async function generateResponse(aiChatbox){
    let text=aiChatbox.querySelector(".ai-chat-area");
    let RequestOption={
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "contents": [
              {"parts": [{"text": user.message},(user.file.data?[{"inline_data": user.file}]:[])
                    ]
              }]
          })
        };

try {
    let response=await fetch(API_URL,RequestOption);
    let data=await response.json();
    console.log(data);
    let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
    text.innerHTML=apiResponse;
    

} catch (error) {
    console.log(error);
}
finally{
    chatContainer.scrollTo({top: chatContainer.scrollHeight, behavior: "smooth"});
     image.src=`img.svg`;
    image.classList.remove("choose");
    user.file={}
}

}




function createChatbox(html,classess){
    let div=document.createElement("div");
    div.innerHTML=html;
    div.classList.add(classess);
    return div;
}

function handleChatResponse(userMessage){
    user.message=userMessage;
    let html=`<div class="user-chat-box">
 <img src="pngwing.com.png" alt="" id="user-image" width="8%">
 <div class="user-chat-area">
 ${user.message}
 ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" alt="user-image" class="chooseimg" />`:""}
 </div>`
 prompt.value="";
    let userChatbox=createChatbox(html,"user-chat-box");
    chatContainer.appendChild(userChatbox);
    chatContainer.scrollTo({top: chatContainer.scrollHeight, behavior: "smooth"});
    
    setTimeout(()=>{
       let html=`<img src="robot.png" alt="" id="ai-image" width="10%">
<div class="ai-chat-area">
<img src="load-33_256.gif" alt="" class="load" width="50px">
</div>`
let aiChatbox=createChatbox(html,"ai-chat-box");
chatContainer.appendChild(aiChatbox);
generateResponse(aiChatbox);
    },500);
}

prompt.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
     handleChatResponse(prompt.value);
   }
});
submitbtn.addEventListener("click",()=>{
    handleChatResponse(prompt.value)
})


imginput.addEventListener("change",()=>{
    const file=imginput.files[0];
    if(!file){
        return;
    }
    let reader=new FileReader();
    reader.onload=(e)=>{
        let base64string=e.target.result.split(",")[1];
        user.file={
            mime_type:file.type,
            data:base64string
        };
        image.src=`data:${user.file.mime_type};base64,${user.file.data}`;
        image.classList.add("choose");
    };
    reader.readAsDataURL(file);
});


imagebtn.addEventListener("click",()=>{
   imagebtn.querySelector("input").click();
});