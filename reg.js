// 1. Get User details, Concatenate, Save To localStorage
function saveUserDetails() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let user_name = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;

    // Check if any field is blank
    if (first_name === "" || last_name === "" || address === "" ||
        user_name === "" || email === "" || password === "") {
        document.getElementById("regMessage").innerHTML = 
            "<h3 style='color:red'>Please Complete Details</h3>";
        return;
    }

    // String concatenate all details
    let userDetails = first_name + " | " + last_name + " | " +
                        address + " | " + user_name + " | " +
                        email + " | " + password;

    // Save to localStorage
    localStorage.setItem("userRecord", userDetails);
    document.getElementById("regMessage").innerHTML =
        "<h3 style='color:green'>Registration Successful!</h3>";

    alert("User registered successfully!");

    //move to next page
    window.location.href = "login.html";
}