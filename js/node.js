//  ADD HISTORY CONTAINER CHILD LI

function addHistory(id1, id2) {
  const inputDonationValue = parseFloat(document.getElementById(id1).value);
  const mainAmount = parseFloat(
    document.getElementById("main-amount").innerText.trim()
  );
  const donateLocation = document.getElementById(id2).innerText;
  const historyContainer = document.getElementById("history-container");
  const li = document.createElement("li");
  li.classList.add("list-none");
  li.innerHTML = `
        <div class="md:p-8 p-6  border border-ash/10 rounded-xl space-y-4">
          <h2 class="text-base md:text-xl font-bold text-ash">
            ${inputDonationValue} Taka is donated for ${donateLocation};
          </h2>
          <p class="text-ash/70 md:text-base text-sm">
            Date : ${new Date().toLocaleDateString(
              "en-GB"
            )} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)
          </p>
        </div>
    `;
  if (inputDonationValue <= mainAmount) {
    historyContainer.insertBefore(li, historyContainer.firstChild);
  } else {
    return;
  }
}

// NAVBAR SCROLL

window.addEventListener("scroll", function () {
  const blurBtn = document.getElementById("donation-and-history");
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");
  if (this.window.scrollY > 50) {
    header.classList.add("sticky");
    header.classList.add("backdrop-blur-lg");
    blurBtn.classList.remove("bg-white");
  }
});

// TOGGLE BTN

document.getElementById("history").addEventListener("click", function () {
  document
    .getElementById("history")
    .classList.add("bg-primary", "rounded-lg", "text-ash");
  document
    .getElementById("donation")
    .classList.remove("bg-primary", "rounded-lg", "text-ash");
  document
    .getElementById("donation")
    .classList.add("border-2", "border-ash/30", "rounded-lg", "text-ash/70");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});
document.getElementById("donation").addEventListener("click", function () {
  document
    .getElementById("history")
    .classList.remove("bg-primary", "rounded-lg", "text-ash");
  document
    .getElementById("donation")
    .classList.add("bg-primary", "rounded-lg", "text-ash");
  document
    .getElementById("history")
    .classList.add("border-2", "border-ash/30", "rounded-lg", "text-ash/70");
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

function getCalculateInput(id1, id2) {
  const donationTotal = parseFloat(document.getElementById(id1).innerText);
  const inputDonationValue = parseFloat(document.getElementById(id2).value);
  const mainAmount = parseFloat(
    document.getElementById("main-amount").innerText
  );
  const modalBtn = document.getElementById("my_modal_5");
  if (isNaN(inputDonationValue) || inputDonationValue <= 0) {
    alert("Your input amount is invalid..");
  } else if (mainAmount < inputDonationValue) {
    alert("Your main amount is insufficient..");
  } else {
    const addDonation = donationTotal + inputDonationValue;
    const decreaseAmount = mainAmount - inputDonationValue;
    document.getElementById(id1).innerText = addDonation;
    document.getElementById("main-amount").innerText = decreaseAmount;
    document.getElementById(id2).value = "";
    modalBtn.showModal();
  }
}
function showModal() {
  document.getElementById("my_modal_5");
}
