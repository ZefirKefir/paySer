// section-button
const sectionButtons = document.querySelectorAll(".section-button");
const sectionContents = document.querySelectorAll(".section-content");

sectionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sectionButtons.forEach((sectionButton) => {
      sectionButton.classList.remove("section-button_active");
    });
    sectionContents.forEach((sectionContent) => {
      sectionContent.classList.remove("section-content_active");
    });
    cardSaveButtons.forEach((saveButton) => {
      saveButton.classList.add("hidden");
    });
    cardEditButtons.forEach((editButton) => {
      editButton.classList.remove("hidden");
    });
    cardInputs.forEach((input) => {
      input.setAttribute("disabled", "");
    });
    sectionButtons[index].classList.add("section-button_active");
    sectionContents[index].classList.add("section-content_active");
  });
});

// PIZDEC SLOZHNO !!!!!!

const sectionContents2 = document.querySelectorAll(".section-content2");
const sectionButtons2 = document.querySelectorAll(
  ".sections-div .section-button"
);

const uniqueSave = document.querySelector(".unique-save-button");
const sectionSelect = document.querySelector("#section-select");
uniqueSave.addEventListener("click", () => {
  sectionContents2.forEach((section) => {
    section.classList.remove("section-content_active");
  });
  sectionButtons.forEach((btn) => {
    btn.classList.remove("section-button_active");
  });
  sectionContents2[sectionSelect.selectedIndex].classList.add(
    "section-content_active"
  );
  sectionButtons2[sectionSelect.selectedIndex].classList.add(
    "section-button_active"
  );
});

// section-edit-button
const disabledInputs = document.querySelectorAll(
  ".section-content .disabled-input"
);
const editButtons = document.querySelectorAll(".section-content .edit-button");
const saveButtons = document.querySelectorAll(
  ".section-content .save-button:not(.card-section .save-button)"
);

editButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    disabledInputs.forEach((disabledInput) => {
      disabledInput.setAttribute("disabled", "");
    });
    editButtons.forEach((editButton) => {
      editButton.classList.remove("hidden");
    });
    saveButtons.forEach((saveButton) => {
      saveButton.cFlassList.add("hidden");
    });
    disabledInputs[index].removeAttribute("disabled");
    editButtons[index].classList.add("hidden");
    saveButtons[index].classList.remove("hidden");
  });
});
saveButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    disabledInputs[index].setAttribute("disabled", "");
    editButtons[index].classList.remove("hidden");
    saveButtons[index].classList.add("hidden");
  });
});

// card-edit-button
const cardEditButtons = document.querySelectorAll(
  ".card-section .change-button"
);
const cardSaveButtons = document.querySelectorAll(".card-section .save-button");
const cardInputs = document.querySelectorAll(
  ".card-card input:not(.card-card.add-card-card input)"
);

cardEditButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cardEditButtons[index].classList.add("hidden");
    cardSaveButtons[index].classList.remove("hidden");
    cardInputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
  });
});
cardSaveButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cardSaveButtons[index].classList.add("hidden");
    cardEditButtons[index].classList.remove("hidden");
    cardInputs.forEach((input) => {
      input.setAttribute("disabled", "");
    });
  });
});
