function Customer (id, firstName, lastName, email, password, confirmPassword, phoneNumber) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.phoneNumber = phoneNumber;
};

let customers = [];

$('#create').on('click', () => {
  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  let id = firstName;
  let email = $("#email").val();
  let password = $("#password").val();
  let confirmPassword = $("#confirmPassword").val();
  let phoneNumber = $("#phoneNumber").val();
  console.log(firstName);

  let myCustomer;

  if (password === confirmPassword){
    myCustomer = new Customer(id, firstName, lastName, email, password, confirmPassword, phoneNumber);
    customers.push(myCustomer);
  } else {
    alert("Your Passwords didn't match");
  }

  console.log(myCustomer);
  console.log(customers);
});