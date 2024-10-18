const menuIcon = document.getElementById('menuI');
const nav = document.querySelector('.nav');
menuIcon.addEventListener('click', function() {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block'; 
        menuIcon.style.color = 'rgb(10, 188, 129)';
    } 
    else {
        nav.style.display = 'none'; 
        menuIcon.style.color = 'white'; 
    }
});

// Handle window resizing
window.addEventListener('resize', function() {
  if (window.innerWidth > 580) {
    nav.style.display = 'flex'; 
  } else {
    nav.style.display = 'none';
  }
});


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/?.>,<'\";:[{}]|^█████████"; // Define the letters array
document.querySelectorAll("a,button").forEach(link => {
    link.onmouseover = event => {
        let iterations = 0;
        
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 77)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2;
        }, 50);
    };
});

function applyEffectOnLoad(element) {
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = element.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return element.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iterations >= element.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 2;
    }, 50);
}

// Apply the effect to h1 on page load
window.onload = () => {
    const h1Element = document.querySelector(".mid >.content > h1");
    if (h1Element) {
        h1Element.dataset.value = h1Element.innerText;
        applyEffectOnLoad(h1Element);
    }
};