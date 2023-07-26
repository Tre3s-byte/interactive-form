const container = document.querySelector(".feedBack");

const infoTags = `
    <figure class="feedback__img-container"><img src="./images/icon-star.svg" alt="Orange star" class="feedback__img" /></figure>
    <div class="feedback__text-container">
     <h1 class="feedback__title">How did we do?</h1>
     <p class="feedback__intro-text">
       Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
     </p>
    </div>
     
`;
const formTags = `   
<form action="#" class="feedback__form">

<div class="form__radio-container">
        <label for="1" class="form__label"><input type="radio" id="1" name="rate-num" value="1" class="form__radio" /><span class="radio-value">1</span></label>

        <label for="2" class="form__label"> <input type="radio" id="2" name="rate-num" value="2" class="form__radio" /><span class="radio-value">2</span></label>

        <label for="3" class="form__label"> <input type="radio" id="3" name="rate-num" value="3" class="form__radio" /><span class="radio-value">3</span></label>

        <label for="4" class="form__label"> <input type="radio" id="4" name="rate-num" value="4" class="form__radio" /><span class="radio-value">4</span></label>

        <label for="5" class="form__label"> <input type="radio" id="5" name="rate-num" value="5" class="form__radio" /><span class="radio-value">5</span></label>
      </div>

<input type="submit" value="Submit" class="form__button" />
</form>
`;

container.innerHTML = infoTags;
container.insertAdjacentHTML("beforeend", formTags);

const form = document.querySelector(".feedback__form");

form.addEventListener("submit", function (event) {
  const selectedRadioButton = document.querySelector('input[name="rate-num"]:checked');
  if (!selectedRadioButton) {
    // Prevent form submission if no radio button is checked
    event.preventDefault();
    alert("Please select a rating before submitting.");
  } else {
    event.preventDefault();
    const selectedValue = document.querySelector('input[name="rate-num"]:checked').value;

    // Save the selected value to session storage
    sessionStorage.setItem("selectedValue", selectedValue);
    const thanksTags = `
    <img src="./images/illustration-thank-you.svg" alt="" class="" />
    <h3>You selected out ${selectedValue} of 5</h3>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </main>
    
    `;
    // Redirect to the next webpage
    window.location.href = this.action;
    const container = document.querySelector(".feedBack");
    container.setAttribute("class", "thanksMessage");
    container.innerHTML = "";
    container.innerHTML = thanksTags;
  }
});
