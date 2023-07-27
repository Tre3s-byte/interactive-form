# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Tre3s-byte/interactive-form)
- Live Site URL: [Add live site URL here](https://main--peaceful-lily-a2260b.netlify.app)

## My process

- Learn how to use sass variables, mixins, functions
- Load HTML using JS
- How to style changin web content

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://sass-lang.com) - For styles

### What I learned

I have been learning how to create simple interactive web pages. During the process, I encountered a challenge in styling radio buttons to align with the project's design. It was my first time loading content on HTML injected using JS and then styling it with Sass.

To see how you can add code snippets, see below:

```JavaScript
const formTags = `
<form action="#" class="feedback__form">

<div class="form__radio-container">
        <input type="radio" id="1" name="rate-num" value="1" class="form__radio" />
        <label for="1" class="form__label">1</label>

        <input type="radio" id="2" name="rate-num" value="2" class="form__radio" />
        <label for="2" class="form__label">2</label>

        <input type="radio" id="3" name="rate-num" value="3" class="form__radio" />
        <label for="3" class="form__label">3</label>

        <input type="radio" id="4" name="rate-num" value="4" class="form__radio" />
        <label for="4" class="form__label">4</label>

        <input type="radio" id="5" name="rate-num" value="5" class="form__radio" />
        <label for="5" class="form__label">5</label>
</div>
<input type="submit" value="SUBMIT" class="form__button" />
</form>
`;

```

```scss
@function weight($weight-name) {
  @return map-get($font-weights, $weight-name);
}
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin flex-spaceEvenly($direction, $align) {
  display: flex;
  justify-content: space-evenly;
  align-items: $align;
  flex-direction: $direction;
  flex-wrap: nowrap;
}
```

```js
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
    <img src="./images/illustration-thank-you.svg" alt="" class="thanks__img" />
    <h3 class="num__selected">You selected out ${selectedValue} of 5</h3>
    <h1 class="thanks__title">Thank you!</h1>
    <p class="thanks__text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

    `;
    // Redirect to the next webpage
    window.location.href = this.action;
    const container = document.querySelector(".feedBack");
    container.setAttribute("class", "thanksMessage");
    container.innerHTML = "";
    container.innerHTML = thanksTags;
  }
});
```

### Continued development

I'll focus on creating interactive websites using react and redux

### Useful resources

- [Example resource 1](https://codepen.io/razwan/pen/RwQdMwM) - This helped me to figured out how to style radio buttons
- [Example resource 2](https://www.youtube.com/watch?v=_a5j7KoflTs) - This SASS tutorial was very useful to learn more about it

## Author

- Website - [Tre3s-byte](https://github.com/Tre3s-byte)
- Frontend Mentor - [@Tre3s-byte](https://www.frontendmentor.io/profile/Tre3s-byte)
- Linkedin - [tre3s-byte](https://www.linkedin.com/in/tre3s-byte/)
