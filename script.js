let captchaChecked = false;

function beforeSubmit(event) {
    if (captchaChecked) {
        let outputdate = document.querySelector(".outputdates");
        let inputdate = document.querySelector(".inputdates");
        console.log(inputdate.value);
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        console.log(formattedDate);
        outputdate.value = formattedDate;
    }
    else {
        alert("Please check the Captcha Box, for security reasons.");
        event.preventDefault();
    }
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchaSuccess(){
    captchaChecked = true;
}