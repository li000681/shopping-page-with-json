//form element events
document.querySelector('#name').addEventListener('blur',function(){
  if(this.value !== ""){
    nameError.textContent = "";
  }
});
document.querySelector('#address').addEventListener('blur',function(){
  if(this.value !== ""){
    addressError.textContent = "";
  }
});
document.querySelector('#pwd').addEventListener('blur',function(){
  if(this.value !== ""){
    pwdError.textContent = "";
  }
});
document.querySelector('#date').addEventListener('blur',function(){
  if(this.value !== ""){
    dateError.textContent = "";
  }
});
document.querySelector('#card').addEventListener('blur',function(){
  if(this.value !== ""){
    typeError.textContent = "";
  }
});
document.querySelector('#number').addEventListener('blur',function(){
  if(this.value !== ""){
    numberError.textContent = "";
  }
});
document.querySelector('#expiration').addEventListener('blur',function(){
  if(this.value !== ""){
    expirationError.textContent = "";
  }
});
//the submit button leads to two functions. If form validation is ok, create shopping summary
document.profile.addEventListener("submit",function(event){
  event.preventDefault();    
  if (validateProfile()){createSummary(itemArray());}
} );
// reset button will clean the error message
document.profile.addEventListener("reset", cleanUP);
