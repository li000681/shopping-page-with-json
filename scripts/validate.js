//form validation
function validateProfile(){
  
  const d = new Date();
  var  valid=true;
  if (profile.name.value===""){
    document.querySelector("#nameError").textContent="Please enter a name";
    valid = false;
  }
  if (profile.address.value===""){
    document.querySelector("#addressError").textContent="Please enter an address";
    valid = false;
  }
  if (profile.password.value===""){
    document.querySelector("#pwdError").textContent="Please enter a password";
    valid = false;
  }
  if (profile.date.value===""){
    document.querySelector("#dateError").textContent="Please enter a date";
    valid = false;
  }else if(new Date(profile.date.value).valueOf() <=new Date().valueOf()){
    document.querySelector("#dateError").textContent="date must after today";
    valid = false;
  }

  if (profile.card.list.selectedIndex == 0 || profile.card.value == ""){
    document.querySelector("#typeError").textContent="Please select a card type";
    valid = false;
  }
  if (profile.number.value===""){
    document.querySelector("#numberError").textContent="Please enter a valid card number";
    valid = false;
  }
  if (profile.expiration.value===""){
    document.querySelector("#expirationError").textContent="Please enter a valid date";
    valid = false;
  }
  if(valid){
    alert("Thank you!");
  }
  return valid;
}
function cleanUP(e){
  document.querySelector("#nameError").textContent="";
  document.querySelector("#addressError").textContent="";
  document.querySelector("#pwdError").textContent="";
  document.querySelector("#dateError").textContent="";
  document.querySelector("#typeError").textContent="";
  document.querySelector("#numberError").textContent="";
  document.querySelector("#expirationError").textContent="";
}
