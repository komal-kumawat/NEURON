
const clickableElements = document.querySelectorAll('.toggle-section');

// Add click event listeners to each clickable element
clickableElements.forEach(element => {
    element.addEventListener('click', ()=>{
        const targetId = element.getAttribute('data-target'); // Get the ID of the target content section
        const targetContent = document.getElementById(targetId); // Get the target content section

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Display the target content section
        targetContent.classList.remove('hidden');
    });
});
