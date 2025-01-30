
// Login page

  document.querySelector("form").addEventListener('submit', function(event) {
      event.preventDefault();

    
      
      let email = document.getElementById('iput-1').value;
      let password = document.getElementById('input-2').value;
      
 // check  if The user Forget a blank Space 
      if (email == "" || password == "") {
        alert("Melaha Bahaan Buuxi " );
      } 
      //   Email Must be Contain @ Symbol
      else if (!email.includes("@")) {
        alert("Email Ka Waa iney Kujirtaa Calamada '@'.");
      } 
    
      //   
      else if (password.length < 9 ) {
        alert("Password ka Waa inow kabataa 9");
      } 
      else {
        alert("Login successful");
      }
    });
  


//   Rigesteration page

// 

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); 


 
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('Email').value.trim();
  const password = document.getElementById('Password').value.trim();
  const confirmPassword = document.getElementById('ConfirmPassword').value.trim();


 
  if (fullName == '' || email   =='' || password == ''|| confirmPassword == '') {

    alert(" Melaha Bahaan Buuxi.");
    return;
    }
 // Waxey Noo Hubeine In Email ka Eey Kujirto Calaamada @

    if (!email.includes('@')) {
      alert("please include an '@'. the email address ")
      return;
    }

    // Waa Condition hubinaayo in password iyo confirm password Eey Same Yihiin

    if (password !== confirmPassword) {
      alert(" Passwordka isku mid Maahan ");
      return;
    }
    // Hadow User ka Soobuuxiyo Shurudaha Kor Kuxusan Sodaabac ( Rigestration submitted successfully )
    alert("Rigestration submitted successfully ");
});




// events











 
   




 