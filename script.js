document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;

    // Simulating data fetching (replace this with actual API call)
    const listings = [
        { id: 1, location: 'Downtown', price: 500000 },
        { id: 2, location: 'Uptown', price: 700000 },
    ];

    // Filter listings based on user input
    const filteredListings = listings.filter(listing => 
        listing.location.toLowerCase() === location.toLowerCase() && listing.price <= price
    );

    // Display the results
    const listingsDiv = document.getElementById('listings');
    listingsDiv.innerHTML = ''; // Clear previous results

    if (filteredListings.length > 0) {
        filteredListings.forEach(listing => {
            const listingDiv = document.createElement('div');
            listingDiv.textContent = `ID: ${listing.id}, Location: ${listing.location}, Price: $${listing.price}`;
            listingsDiv.appendChild(listingDiv);
        });
    } else {
        listingsDiv.textContent = 'No listings found.';
    }
});
