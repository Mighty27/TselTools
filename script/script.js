var inputNumber = document.getElementById("input-myid");
const submitButton = document.getElementById("capture-button");
const refreshButton2 = document.getElementById("refresh-modal2");
const closeButton = document.getElementById("closeButton");
const viewIndihome = document.getElementById("url-indihome");
const viewModal = document.getElementById("modalData");
const Name = document.getElementsByClassName("header-name-modal");
var closeModal1 = document.getElementById("closeModal1");
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  loaderContainer.style.display = 'none';
});

window.addEventListener('load', () => {
  loaderContainer.parentElement.removeChild(loaderContainer);
});

refreshButton2.addEventListener("click", function () {
  document.getElementById('modal2').src += '';
});

closeButton.addEventListener("click", function () {
  document.getElementById('modal2').src += '';
});


submitButton.addEventListener("click", function () {
  if (inputNumber.value.length <= 12) {
      var myAlert =document.getElementById('liveToast');//select id of toast
      // var bsAlert = new bootstrap.Toast(myAlert, autohide=false
      // );//inizialize it
      // bsAlert.show();//show it
      var visibleToast = new bootstrap.Toast(myAlert, {'autohide': true, 'delay': 5000, 'animation' : true});
        visibleToast.show();
  }
  else {
    var data = inputNumber.value;
    const infoMYID = "Indihome MYID-";
    const link = "https://indihome.co.id/tracking-order?trackid=MYID-";
    const linkTo = link + data;
    document.getElementById('staticBackdropLabel').innerHTML = infoMYID + data;
    viewIndihome.innerHTML = "<iframe height='520px' width='100%' src=" + linkTo + " frameborder='0'></iframe>";
    var galleryModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
      keyboard: false
    });
    galleryModal.show();
    closeModal1.addEventListener("click", function () {
      galleryModal.hide();
    });
  }
});
// submitButton.addEventListener("click", function() {
//   console.log(viewModal.style);
//   var data = inputNumber.value;
//   const infoMYID = "Indihome MYID-";
//   const link = "https://indihome.co.id/tracking-order?trackid=MYID-";
//   const linkTo = link + data;
//   document.getElementById('staticBackdropLabel').innerHTML = infoMYID + data;
//   viewIndihome.innerHTML = "<iframe height='520px' width='100%' src="+ linkTo +" frameborder='0'></iframe>";
// });

