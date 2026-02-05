document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const status = document.getElementById('status-message');
    const name = document.getElementById('name').value;
    
    // Simulate API call
    status.textContent = "Thank you, " + name + ". Your reservation request has been received. We will confirm via email shortly.";
    status.classList.remove('hidden');
    
    // Reset form
    this.reset();
});
