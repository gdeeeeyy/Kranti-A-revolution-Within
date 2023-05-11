console.log("Still under development")
const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");
//show or hid password
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        }) 
    })
})
//login ands signup page switch
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});
//file drop
const dropArea = document.querySelector(".drop_box"),
button = dropArea.querySelector("button"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});
//input validation
function inputvalid(){
    const signmail=document.getElementbyId("email").value,
          signpswd=document.getElementbyId("password").value,
          logmail=document.getElementbyId("email1").value,
          name=document.getElementbyId("name").value,
          pswd=document.getElementbyId("pswd").value,
          cpswd=document.getElementbyId("cpswd").value;
    if(signmail.length<1 && signpswd.length<1){
        alert("Please enter your sign in details");
    }
    if(name.length<1 && logmail.length<1 && name.length<1){
        alert("Please enter your login credentials");
    }
    if(pswd.length<8){
        alert("Please enter a password more than 8 characters long");
    }
    if(pswd!=cpswd){
        alert("Please check your password");
    }
}
