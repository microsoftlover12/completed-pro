


var firebaseConfig = {
  apiKey: "AIzaSyCdbtVKw8UEmWA9XShUTLrHAB0Kq0UZFmc",
  authDomain: "testfire-ab0de.firebaseapp.com",
  databaseURL: "https://testfire-ab0de.firebaseio.com",
  projectId: "testfire-ab0de",
  storageBucket: "testfire-ab0de.appspot.com",
  messagingSenderId: "680259590138",
  appId: "1:680259590138:web:e362cd76677543572a7643"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth=firebase.auth();
var formulaire=document.getElementById("signin-form");
var signIn=document.getElementById("signin")
  //get firebase element

if(signIn != null) {
	signIn.addEventListener('click',function(e){
  e.preventDefault();
  var email = document.getElementById("email");
    console.log(email)
    var password = document.getElementById("password");
    
    const promise=auth.signInWithEmailAndPassword(email.value, password.value);
    console.log(email.value,password.value);
    promise.then(e=>{
      
     window.location.href="profile.html";
      
    })
    .catch(e =>{
    alert(e.message +'sign up please');
    formulaire.reset();


    });

})
	
}


   function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password = document.getElementById("password");
    
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
   }
  
  
   




function myfunction(){

location.replace("C:\Users\songul\Desktop\tesoki\single.html");


}


function prefunction(){

location.replace('proj2.html');

}


//pass matching
$('#password, #confirm-password').on('keyup', function () {
    if ($('#password').val() == $('#confirm-password').val()) {
        $('#message').html('Matching').css('color', 'green');
    } else 
        $('#message').html('Not Matching').css('color', 'red');
});


function postfunction(){


  location.replace('create.html');

}

//upload img from desktop
$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.avatar').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
  

  $(".file-upload").on('change', function(){
      readURL(this);
  });
});

function preprofile(){

  location.replace("profile.html");
}

function profile(){

  location.replace("proj2.html");
}

