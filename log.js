// Step 1: Conditional statement to check local storage
function loginUser() {
    let old_user = localStorage.getItem("userRecord");

    if (old_user === null) {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>No User Record found. Kindly Register first.</h3>";
        return;
    }

    // Split values of the localStorage
    let userData = old_user.split(" | "); // This is an array

    // Retrieve user name and password at the correct array indices
    let old_name = userData[0];
    let old_uname = userData[3];
    let old_pword = userData[5];

    // Retrieve user input via the login form
    let loginuname = document.getElementById("login_uname").value;
    let loginpword = document.getElementById("login_pword").value;

    // Conditional statement - checking old vs. login data
    if (loginuname === old_uname && loginpword === old_pword) {
        document.getElementById("loginMessage").innerHTML =
            

            alert("Welcome " + old_name + "! You may now add an item.");

            //move to next page
             window.location.href = "list.html";

    } else {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>Invalid User Credentials!</h3>";
    }
}