document.getElementById('menuIcon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var menuIcon = document.getElementById('menuI');

    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; // Hide the navbar
        menuIcon.style.color = 'white'; // Set menu icon color to white
    } else {
        navbar.style.display = 'block'; // Show the navbar
        menuIcon.style.color = 'rgb(10, 188, 129)'; // Set menu icon color to green
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
        h1Element.dataset.value = h1Element.innerText; // Store the original text in data-value
        applyEffectOnLoad(h1Element); // Apply the effect
    }
};