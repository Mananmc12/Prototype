// Show login modal on load
window.onload = function() {
    document.getElementById('loginModal').style.display = 'flex';
};

// Scroll to section function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login validation logic here
    document.getElementById('loginModal').style.display = 'none';
});

// Add a new resource
document.getElementById('resourceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('resourceName').value;
    const category = document.getElementById('resourceCategory').value;
    const location = document.getElementById('resourceLocation').value;
    const description = document.getElementById('resourceDescription').value;
    const imageFile = document.getElementById('resourceImage').files[0];

    // Create a new resource item
    const resourceItem = document.createElement('div');
    resourceItem.className = 'resource-item';

    // Add image if provided
    let imageHTML = '';
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageHTML = `<img src="${e.target.result}" alt="Resource Image">`;
            resourceItem.innerHTML = `
                ${imageHTML}
                <h3>${name}</h3>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p>${description}</p>
            `;
        };
        reader.readAsDataURL(imageFile);
    } else {
        resourceItem.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p>${description}</p>
        `;
    }

    // Add animation effect
    resourceItem.style.opacity = 0;
    setTimeout(() => resourceItem.style.opacity = 1, 0);

    // Add the new resource item to the list
    document.getElementById('resourceList').appendChild(resourceItem);

    // Clear the form
    document.getElementById('resourceForm').reset();
});
