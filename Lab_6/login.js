// const container = document.querySelector(".container"),
//       pwShowHide = document.querySelectorAll(".showHidePw"),
//       pwFields = document.querySelectorAll(".password"),
//       signUp = document.querySelector(".signup-link"),
//       login = document.querySelector(".login-link");
//
//
//
//       // js code to show/hide password and change icon
//       pwShowHide.forEach(eyeIcon =>{
//         eyeIcon.addEventListener("click", ()=>{
//           pwFields.forEach(pwField =>{
//             if(pwField.type === "password"){
//               pwField.type = "text";
//
//               pwShowHide.forEach(icon =>{
//                 icon.classList.replace("uil-eye-slash", "uil-eye")
//               })
//             }else{
//               pwField.type = "password";
//
//               pwShowHide.forEach(icon =>{
//                 icon.classList.replace("uil-eye", "uil-eye-slash")
//               })
//             }
//           })
//         })
//       })
//
//
//       signUp.addEventListener("click", ()=>{
//         container.classList.add("active");
//       });
//
//
//      login.addEventListener("click", ( )=>{
//        container.classList.remove("active");
//      });

var email;
var password;
var check_email = false;
var check_pass = false;
// var q = "";




function save_email(){
 let pas = document.getElementById("reg-pass").value;
 let pas1 = pas.charAt(0);
 let count = 0;
 for(i=1; i <= pas.length; i++){
   if (pas1==pas.charAt(i)){
     count=count+1;
   }
 }




  // name Registration
  
   val = document.getElementById('reg-name').value;
    if(!isNaN(val.charAt(val.length - 1)) ||
    val.codePointAt(val.length - 1) >= 33 && val.codePointAt(val.length - 1) <= 47 ||
    val.codePointAt(val.length - 1) >= 58 && val.codePointAt(val.length - 1) <= 64 ||
    val.codePointAt(val.length - 1) >= 91 && val.codePointAt(val.length - 1) <= 96 ||
    val.codePointAt(val.length - 1) >= 123 && val.codePointAt(val.length - 1) <= 126  ){
      alert("you must write String");
      document.getElementById('reg-name').value = val.substring(0 , val.length - 1);
    }

  //email Registration
  let e = document.getElementById('reg-email').value;
  if(e.includes('@')){
    email = e;
    check_email = true;
  }else{
    alert("Your email should contain @ character");
    check_email = false;
  }

  //password Registration
  let r = document.getElementById('reg-pass').value;
  let c = document.getElementById('reg-pass-con').value;



  if(r == c && count != pas.length && count != pas.length-1){
    password = r;
    check_pass = true;
  }

  else{
    check_pass = false;
    alert("your password is incorrect or password is repiting");
  }


  if(check_email && check_pass){
    alert("good");
    window.location.href = "https://mail.google.com/mail/u/0/?pli=1#search/nurzha/FMfcgzGrbHwllZlVMnGcjPlrdxhFZxvW";
  }
}



function er(){
  let a = document.getElementById('email').value;
  let b = document.getElementById('password').value;
  if ( a == email ){
    check_email = true;
  }else{
    check_email = false;
    alert("Incorrect login")
  }

  if (b == password){
    check_pass = true;
  }else{
    check_pass = false;
    alert("Incorect password")
  }



  if(check_email && check_pass){
    alert("good");
    window.location.href = 'https://mail.google.com/mail/u/0/?pli=1#search/nurzha/FMfcgzGrbHwllZlVMnGcjPlrdxhFZxvW';
  }
}
