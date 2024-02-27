// Mimic the payment system of phonePe using promises.
// The payment can be rejected or accepted
// On success show the same UI as shown on phonePe app.
// On Failure also show the same UI as shown on phonePe app.
// During the processing state show the Processing UI as shown on phonePe.
// Refer your phonePe app(if you have) for UI, or watch some video on youTube.
"use strict";
let pay = document.querySelector(".btn");

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function payyy() {
  let userName = document.querySelector("#name").value;
  let mobile = document.querySelector("#Mobile").value;
  let amount = document.querySelector("#Amount").value;
  let status;
  console.log("ayush");
  let payment = function () {
    return new Promise(function (resolve, reject) {
      if (amount > 0 && mobile.length == 10 && userName != null) {
        console.log("ayu");
        setTimeout(() => {
          resolve("Payment Successfull");
        }, 2000);
      } else {
        reject("Payment Failed");
      }
    });
  };
  payment()
    .then((status) => {
      function openPopup() {
        document.getElementById("popup").style.display = "block";
        document.querySelector(".popuppara").textContent = status;
      }
      openPopup();
      userName = "";
      mobile = "";
      amount = "";
    })
    .catch((res) => {
      function openPopup() {
        document.getElementById("popup").style.display = "block";
        document.querySelector(".popuppara").textContent = res;
      }
      openPopup();
      userName = "";
      mobile = "";
      amount = "";
    });
}
