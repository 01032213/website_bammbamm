function findMostFrequentWord(column_number, rank) {
    return new Promise((resolve, reject) => {
      let wordCountMap = new Map();
  
      fetch('./assets/database.csv')
        .then(response => response.text())
        .then(content => {
          const lines = content.split('\n');
  
          // Start iterating from index 1 to skip the header row
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const columns = line.split(',');
  
            if (columns.length >= column_number) {
              const cellContent = columns[column_number - 1];
  
              // Split cell content into words
              const words = cellContent.split(/\s+/);
  
              words.forEach(word => {
                word = word.toLowerCase(); // Convert to lowercase for case-insensitivity
                if (word.trim() !== '') { // Ignore empty words
                  const count = wordCountMap.get(word) || 0;
                  wordCountMap.set(word, count + 1);
                }
              });
            }
          }
          
          wordCountMap.delete('/')

          const sortedWords = Array.from(wordCountMap.keys()).sort((a, b) => wordCountMap.get(b) - wordCountMap.get(a));

          const data = sortedWords.slice(0, rank).map((word, index) => ({
            number: index + 1,
            player: word,
            goals: wordCountMap.get(word)
          }));
  
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  