let allusers = []
var Isediting = false;
var editingi;
if (localStorage.userlist){
    allusers = JSON.parse(localStorage.getItem("userlist"))
}
function createacct(){
    if(Isediting){
      var userSignup = {
        uname: name1.value,
        uemail: email2.value,
        uphone: phone3.value,
        upassword: password4.value,
        accno: `SQI${Math.round(Math.random() * 100000)}`}

        allusers[editingi] = userSignup;
        displayhistory()
        localStorage.setItem("userlist", JSON.stringify(allusers))
          
    }else{ 
      var userSignup = {
        uname: name1.value,
        uemail: email2.value,
        uphone: phone3.value,
        upassword: password4.value,
        accno: `SQI${Math.round(Math.random() * 100000)}`
    }
    
        if((uname = name1.value), (ueamil = email2.value), (uphone = phone3.value), (upassword = password4.value), (nom = `SQI${Math.round(Math.random() * 100000)}`)){
             allusers.push(userSignup), window.location.href = "ftchlogin.html", 
            name1.value = "", email2.value = "", phone3.value = "", password4.value = ""
        }
        else{
            alert("complete your reg")
        }
        displayhistory()
        localStorage.setItem("userlist", JSON.stringify(allusers))
    } 
}

function login(){
    let = cemail = checkemail.value
    let = cpassword = checkpassword.value
    var allusers = JSON.parse(localStorage.getItem("userlist"))

    for(let i = 0; i < allusers.length; i++){
        if (allusers[i].uemail == cemail && allusers[i].upassword == cpassword){
            checkemail.value = "", checkpassword.value = "",
            window.location.href = "ftechdetails.html",          
            displayhistory();
        }
        // else if(allusers[i].uemail != cemail && allusers[i].upassword != cpassword){
        //     alert("pls input correct username and password")
        // }

        // else{ 
        //     alert("incomplete")
        // }
        // }
}
}  
function displayhistory(){
    historytable.innerHTML = "";
    for (let i = 0; i < allusers.length; i++){
    historytable.innerHTML += `<tr>
    <td>${i+1}</td>
    <td>${allusers[i].uname}</td>
    <td>${allusers[i].uemail}</td>
    <td>${allusers[i].uphone}</td>
    <td>${allusers[i].upassword}</td>
    <td>${allusers[i].accno}</td>
    <td><button class="btn btn-sm btn-success me-2" onclick="editUser(${i})">Edit</button><button class="btn btn-sm btn-danger" onclick="deleteuser(${i})">delete</button>
    </tr>`
}
}
const deleteuser =  (i) => {
    if(confirm("you sure")){
        allusers.splice(i,1);
        displayhistory();
        localStorage.setItem("userlist", JSON.stringify
        (allusers));
    }
}
const editUser = (i) =>{
  editingi = i; 
    let User = allusers[i]; 
    accn = `SQI${Math.round(Math.random() * 100000)}`;
    name1.value = User.uname,
    email2.value = User.uemail,
    phone3.value = User.uphone,
    password4.value = User.upassword,
    accn = User.accno
    saveBtn.innerHTML = "Update User";
    // saveBtn.addClass("btn-success");
    Isediting = true;

}
 
const loaduser = () =>{
    let rusers = localStorage.getItem('userlist')
    if(rusers){
        allusers = JSON.parse(rusers);
    }
    displayhistory();
}

const searchuser = () =>{
    var allregs = JSON.parse(localStorage.getItem("userlist"))
    var lookUser = checkuser.value
    if(lookUser = allregs[checkuser.value]){
        first.innerHTML = " <em> Name:</em> " + allregs[checkuser.value].uname,
        second.innerHTML = " <em> Email:</em> " + allregs[checkuser.value].uemail,
        third.innerHTML = " <em> Phone:</em> " + allregs[checkuser.value].uphone,
        fourth.innerHTML = " <em> Password:</em> " + allregs[checkuser.value].upassword,
        fifth.innerHTML = " <em> Acct no:</em> " + allregs[checkuser.value].nom

    }
}

var balance = 1000;
function withdraw() {
  var amountEntered = Number(userInput.value);
  if (balance < amountEntered) {
    //alert("transaction declined! insuficient fund");
    displayBalance.innerHTML = "<p>transaction declined! insuficient fund</P>";
  } else if (amountEntered <= 0) {
    //alert("amount entered can not be less than 0");
    displayBalance.innerHTML = "<p>amount entered can not be less than 0</p>";
  } else if (amountEntered == "") {
    //alert("error! user input is empty, please input a value");
    displayBalance.innerHTML =
      "<p>error! user input is empty, please input a value</p>";
  } else {
    balance = balance - amountEntered;
    //alert("withdrawal succesful, your current ballaced is # " + balance);
    displayBalance.innerHTML =
      "<p>withdrawal succesful, your current ballaced is #" + balance + "</p>";
  }
}

function deposit() {
  var amountEntered = Number(userInput.value);
  var deposit = balance + amountEntered;
  if (amountEntered == "") {
    //alert("deposit amount can not be empty");
    displayBalance.innerHTML = "<p>deposit amount can not be empty</p>";
  } else if (amountEntered <= 0) {
    //alert("the deposit amount can not be less than 0");
    displayBalance.innerHTML =
      "<p>the deposit amount can not be less than 0</p>";
  } else {
    // deposit = balance + amountEntered;
    //alert("your current avalaible balance is #" + deposit);
    displayBalance.value = ""
    displayBalance.innerHTML =
      "<p>your current avalaible balance is #" + deposit + "</p>";
  }
}
function checkBalance() {
  //displayBalance.innerTEXT = "Your available balance is #" + balance;
  displayBalance.innerHTML = "<p>Your main balance is #" + balance + "</p>";
  //alert(" i dey work o");
}
