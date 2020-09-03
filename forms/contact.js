var firebaseConfig = {
    apiKey: "AIzaSyAHEcF_qsisCTuEuUyGZL7u9-Cratdoq-o",
    authDomain: "okey-contact-form-a3b38.firebaseapp.com",
    databaseURL: "https://okey-contact-form-a3b38.firebaseio.com",
    projectId: "okey-contact-form-a3b38",
    storageBucket: "okey-contact-form-a3b38.appspot.com",
    messagingSenderId: "648063100815",
    appId: "1:648063100815:web:6c2f26d945a624efbfcdfa"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference message
var messageRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',
  submitForm);


//submit form
function submitForm(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save Message
  saveMessage(name, email, subject, message);

  new Noty({
                theme: 'bootstrap-v4',
                type: 'success',
                layout: 'center',
                text: 'Message Sent!',
                timeout: 3000
            }).show();


  // Reset Form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message
function saveMessage(name, email, subject, message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}

