function countOccurrences(column_number,word) {
    const resultDiv = document.getElementById('result'+column_number);
    const wordToCount = word; // Replace with the word you want to count
    let occurrences = 0;

    fetch('../assets/database.csv')
    .then(response => response.text())
    .then(content => {
        const lines = content.split('\n');
        let occurrences = 0; // Initialize the occurrences counter

        lines.forEach(line => {
            const columns = line.split(',');

            if (columns.length >= column_number) {
                const cellContent = columns[column_number-1]; // Get the content of the sixth column

                // Use a regular expression to find all occurrences of the word in the cell content
                const regex = new RegExp(wordToCount, 'g');
                const matches = cellContent.match(regex);

                if (matches) {
                    occurrences += matches.length; // Increment the counter by the number of matches
                }
            }
        });

        resultDiv.innerText = `${occurrences}`;
    })
    .catch(error => {
        resultDiv.innerText = 'Error fetching or processing the CSV file.';
        console.error(error);
    });

}

