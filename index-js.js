document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.page-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Apply a simple scaling effect on button click
            button.style.transform = 'scale(1.1)';

            // Delay the transition effect to see it clearly
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                // Redirect to the specified link after the transition
                window.location.href = button.parentElement.getAttribute('href');
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.home');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Apply a simple scaling effect on button click
            button.style.transform = 'scale(1.1)';

            // Delay the transition effect to see it clearly
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                // Redirect to the specified link after the transition
                window.location.href = button.parentElement.getAttribute('href');
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.page');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Apply a simple scaling effect on button click
            button.style.transform = 'scale(1.1)';

            // Delay the transition effect to see it clearly
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                // Redirect to the specified link after the transition
                window.location.href = button.parentElement.getAttribute('href');
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById("playSound");

    h1.addEventListener('click', () => {
        var audio = document.getElementById("myAudio");
        audio.play();
    });
});