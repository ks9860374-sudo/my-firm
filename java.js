// 1. Contact Button Logic
document.getElementById('contactBtn').addEventListener('click', () => {
    const phoneNumber = "+917217664609";
    alert('Thank you for reaching out! Calling: ' + phoneNumber);
    window.location.href = "tel:" + phoneNumber;
});

// 2. Home Link Logic
document.getElementById('homeLink').addEventListener('click', (e) => {
    // Prevent default if you don't want the page to jump/refresh
    // e.preventDefault(); 

    const container = document.getElementById('imageContainer');
    
    if (container) {
        console.log('Home link clicked, container found:', container);
        // Add your logic here (e.g., container.style.display = 'block';)
    } else {
        console.error('Element with ID "imageContainer" not found!');
    }
});
