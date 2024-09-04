var inputNumber = document.getElementById("input-myid");
const submitButton = document.getElementById("capture-button");
const viewIndihome = document.getElementById("url-indihome");
const button = document.getElementsByClassName("capture-button");

submitButton.addEventListener("click", function() {
    var data = inputNumber.value;
    const link = "https://indihome.co.id/tracking-order?trackid=MYID-"
    const linkTo = link + data;
    console.log(linkTo);
    viewIndihome.innerHTML = "<iframe height='480px' src="+ linkTo +" frameborder='0'></iframe>";
  });
