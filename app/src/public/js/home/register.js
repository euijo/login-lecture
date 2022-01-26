const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBTN = document.querySelector("#button");

registerBTN.addEventListener("click", register);

function register(){
    if (password.value !== confirmPassword.value){return alert("비밀번호가 일치 하지 않습니다.");}
    if (!id.value){return alert("아이디를 입력해 주세요~~~~!!")};
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        
    };
    
    fetch("/register", {
        method : "POST",
        headers:{"content-Type" : "application/json"},
        body : JSON.stringify(req),
    }).then((res)=>res.json())
      .then((res)=>{
          if(res.success){
              location.href = "/login";
          }else{
              alert(res.msg);
          }
      })
      .catch((err) => {
            console.error("회원가입중 에러 발생");
      });
};
