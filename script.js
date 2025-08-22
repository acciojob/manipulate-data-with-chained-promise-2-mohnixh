//your JS code here. If required.
 const output = document.getElementById('output');
        
        function getInitialData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }
        
        function filterEvenNumbers(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = arr.filter(num => num % 2 === 0);
                   
                    output.textContent = evenNumbers.join(',');
                    resolve(evenNumbers);
                }, 1000);
            });
        }
        
        function doubleNumbers(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubledNumbers = arr.map(num => num * 2);

                    output.textContent = doubledNumbers.join(',');
                    resolve(doubledNumbers);
                }, 2000);
            });
        }
        
        getInitialData()
            .then(filterEvenNumbers)
            .then(doubleNumbers)
            .then(result => {
                console.log('Final result:', result);
            });