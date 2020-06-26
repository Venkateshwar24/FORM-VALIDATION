
function formvalidation() {
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
     var emailid = document.getElementById("email_id").value;
    var dob = document.getElementById("dob").value;
     var photo = document.getElementById("photo").value;
    var mobno = document.getElementById("mob_no").value;
    var fathersname = document.getElementById("father_name").value;
    var mothersname = document.getElementById("mother_name").value;
    var aadharno = document.getElementById("aadaar_no").value;
     var gender = document.getElementById("gender").value;

    if (fname == "") {
        document.getElementById('firstname').innerHTML = "please fill the field";
        return false;
    }
    if ((fname.length < 2) || (fname.length > 10)) {
        document.getElementById('firstname').innerHTML = "**It should be min of 2 and max of 10 char**";
        return false;
    }
    if (!isNaN(fname)) {
        document.getElementById('firstname').innerHTML = "**Only Characters are allowed**";
        return false;
    }


    if (lname == "") {
        document.getElementById('lastname').innerHTML = "please fill the field";
        return false;
    }
    if ((lname.length < 2) || (lname.length > 10)) {
        document.getElementById('lastname').innerHTML = "**It should be min of 2 and max of 10 char**";
        return false;
    }

    if (!isNaN(lname)) {
        document.getElementById('lastname').innerHTML = "**Only Characters are allowed**";
        return false;
    }
    if (mobno == "") {
        document.getElementById('mobileno').innerHTML = "**please fill the field**";
        return false;
    }

    if (isNaN(mobno)) {
        document.getElementById('mobileno').innerHTML = "**only numbers are allowed**";
        return false;
    }
    if (mobno.length !== 10) {
        document.getElementById('mobileno').innerHTML = "**It should have 10 digits**";
        return false;
    }
    if (fathersname == "") {
        document.getElementById('father').innerHTML = "please fill the field";
        return false;
    }
    if ((fathersname.length < 2) || (fathersname.length > 10)) {
        document.getElementById('father').innerHTML = "**It should be min of 2 and max of 10 char**";
        return false;
    }
    if (!isNaN(fathersname)) {
        document.getElementById('father').innerHTML = "**Only Characters are allowed**";
        return false;
    }

    if (mothersname == "") {
        document.getElementById('mother').innerHTML = "please fill the field";
        return false;
    }
    if ((mothersname.length < 2) || (mothersname.length > 10)) {
        document.getElementById('mother').innerHTML = "**It should be min of 2 and max of 10 char**";
        return false;
    }
    if (!isNaN(mothersname)) {
        document.getElementById('mother').innerHTML = "**Only Characters are allowed**";
        return false;
    }
    if (aadharno == "") {
        document.getElementById('aadaar').innerHTML = "**please fill the field**";
        return false;
    }

    if (isNaN(aadharno)) {
        document.getElementById('aadaar').innerHTML = "**only numbers are allowed**";
        return false;
    }
    if (aadharno.length !== 12) {
        document.getElementById('aadaar').innerHTML = "**It should have 12 digits**";
        return false;
    }
document.getElementById('submit').innerHTML="Thanks";
}
