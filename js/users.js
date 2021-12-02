const admin = {
  userName: "admin",
  email: "admin@mail.com",
  password: "admin123" 
}

$('#login').on('click', () => {
  let loginEmail = $("#loginEmail").val();
  let loginPassword = $("#loginPassword").val();

  if ((loginPassword === admin.password) && (loginEmail === loginEmail)){
    window.location.href = '../service.html';
  } else {
    alert("Invalid Email or Password");
  }
});

$('#message').on('click', () => {
  let name = $("#contactName").val();
  let email = $("#contactEmail").val();
  let text = $("#contactText").val();

  if ((name !== "") && (email !== "") && (text !== "")) {
    alert("Your Message has been received");
  } else {
    alert("Empty fields not allowed");
  }
});