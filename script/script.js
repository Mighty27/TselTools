var inputNumber = document.getElementById("input-myid");
const submitButton = document.getElementById("capture-button");
const viewIndihome = document.getElementById("url-indihome");
const viewModal = document.getElementById("modalData");
const Name = document.getElementsByClassName("header-name-modal");


submitButton.addEventListener("click", function() {
  console.log(viewModal.style);
  var data = inputNumber.value;
  const infoMYID = "Indihome MYID-";
  const link = "https://indihome.co.id/tracking-order?trackid=MYID-";
  const linkTo = link + data;
  document.getElementById('staticBackdropLabel').innerHTML = infoMYID + data;
  viewIndihome.innerHTML = "<iframe height='520px' width='100%' src="+ linkTo +" frameborder='0'></iframe>";
});