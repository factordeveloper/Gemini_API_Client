document.getElementById('sendButton').addEventListener('click', function() {
    const prompt = document.getElementById('promptInput').value;
    const apiKey = 'AIzaSyBhHYEGpFfGiQfKGU4udecPt_bT6sCtqko'; // Reemplaza esto con tu clave de API real

    if (prompt.trim() === '') {
        alert('Please enter a prompt.');
        return;
    }

    const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

    const requestBody = {
        contents: [
            {
                role: 'user',
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        const responseContainer = document.getElementById('responseContainer');
        if (data.error) {
            responseContainer.textContent = `Error: ${data.error.message}`;
        } else {
            responseContainer.textContent = JSON.stringify(data, null, 2);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseContainer').textContent = 'Error: ' + error;
    });
});
