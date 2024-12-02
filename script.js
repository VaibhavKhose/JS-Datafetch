document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users') // Replace with the URL of the API you want to call

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Use .text() if the response is plain text
        })
        .then(data => {
            document.getElementById('response').innerText = JSON.stringify(data); // Display JSON data as a string
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('response').innerText = 'Error fetching data';
        });
});


