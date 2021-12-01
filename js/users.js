const admin = {
  userName: "admin",
  email: "admin@mail.com",
  password: "admin123" 
}

$('#login').on('click', () => {
  let loginEmail = $("#loginEmail").val();
  let loginPassword = $("#loginPassword").val();

  if ((loginPassword === admin.password) && (loginEmail === loginEmail)){
    window.location.href = '../index.html';
  } else {
    alert("Invalid Email or Password");
  }
});