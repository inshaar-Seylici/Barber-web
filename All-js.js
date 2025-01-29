
// Login page

  document.querySelector("form").addEventListener('submit', function(event) {
      event.preventDefault();

    
      
      let email = document.getElementById('iput-1').value;
      let password = document.getElementById('input-2').value;
      
      //  Hadii password ka iyo Email Ayadoo lagalin lagatago  Sodaabac  (Melaha Bahaan Buuxi )

      if (email == "" || password == "") {
        alert("Melaha Bahaan Buuxi " );
      } 
      //  Email ka Waa iney Kujirtaa Symbol ka(Calaamada ) @
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

// Waxow kahortagaa Submite ka 

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); 


 
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('Email').value.trim();
  const password = document.getElementById('Password').value.trim();
  const confirmPassword = document.getElementById('ConfirmPassword').value.trim();


//  Hadii password ka,Email iyo C-password ka  Ayadoo lagalin lagatago  Sodaabac  (Blank space required )

 
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











 
   




 