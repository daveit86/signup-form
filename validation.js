console.log("Validation module loaded!");

function validateForm()
{
    let pwd=document.forms.myForm.password.value;
    let pwdc=document.forms.myForm.passwordc.value;
    console.log(pwd===pwdc);
    if(pwd===pwdc)
    {
        return true;
    }
    else
    {
        alert("Password doesn't match, please try again");
        return false;
    }
}