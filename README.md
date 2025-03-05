# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![desktop](/images/screenshots/screenshot.png)
![mobile](/images/screenshots/screenshot_2.png)
![error](/images/screenshots/screenshot_errors.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Classic process, I adjusted html tag in order to manipulate them the easiest way with css and javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned to handle and organize javascript events. 
And how to give two values to a variable with the `||` operator.

```javascript
five.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 5;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});
```

## Author

- Website - [portfolio](https://www.solakabuta.com)
- Frontend Mentor - [@SolaKabuta](https://www.frontendmentor.io/profile/SolaKabuta)
- Twitter - [@Sola_Kabuta](https://www.twitter.com/Sola_Kabuta)
