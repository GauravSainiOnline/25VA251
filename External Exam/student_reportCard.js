    function generateSubjectInputs() {
        const numSubjects = parseInt(document.getElementById('numSubjects').value);
        const container = document.getElementById('marksInputsContainer');
        const calculateBtn = document.getElementById('calculateBtn');
        const resultBox = document.getElementById('result');
        
        container.innerHTML = '';
        resultBox.style.display = 'none';
        
        if (isNaN(numSubjects) || numSubjects <= 0) {
            alert('Please enter a valid number of subjects greater than 0.');
            return;
        }

        for (let i = 1; i <= numSubjects; i++) {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label for="subject${i}">Marks for Subject ${i}:</label>
                <input type="number" id="subject${i}" class="subject-mark" min="0" max="100" placeholder="Enter marks (0-100)">
            `;
            container.appendChild(div);
        }
        
        calculateBtn.style.display = 'block';
    }


    function calculateResults() {
        const markInputs = document.querySelectorAll('.subject-mark');
        let total = 0;
        let count = markInputs.length;
        let hasInvalidInput = false;

        for (let i = 0; i < count; i++) {
            let mark = parseFloat(markInputs[i].value);
            
            if (isNaN(mark) || mark < 0 || mark > 100) {
                hasInvalidInput = true;
                break;
            }
            total += mark;
        }

        if (hasInvalidInput) {
            alert('Please enter valid marks between 0 and 100 for all fields.');
            return;
        }


        let average = total / count;
        let grade = '';
        let status = '';


        if (average >= 90) {
            grade = 'A+';
        } else if (average >= 80) {
            grade = 'A';
        } else if (average >= 70) {
            grade = 'B';
        } else if (average >= 60) {
            grade = 'C';
        } else if (average >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        if (average >= 50) {
            status = '<span class="pass">PASSED</span>';
        } else {
            status = '<span class="fail">FAILED</span>';
        }


        document.getElementById('resTotal').innerText = total;
        document.getElementById('resAverage').innerText = average.toFixed(2);
        document.getElementById('resGrade').innerText = grade;
        document.getElementById('resStatus').innerHTML = status;
        
        document.getElementById('result').style.display = 'block';
    }