// Task 1: Reverse words in a sentence
function task1() {
    const input = document.getElementById('task1-input').value;
    if (!input.trim()) {
        document.getElementById('task1-result').textContent = 'Please enter a sentence';
        return;
    }
    const reversed = input.split(' ').reverse().join(' ');
    document.getElementById('task1-result').textContent = reversed;
}

// Task 2: Extract first and last character
function task2() {
    const input = document.getElementById('task2-input').value;
    if (!input.trim()) {
        document.getElementById('task2-result').textContent = 'Please enter some text';
        return;
    }
    const first = input.charAt(0);
    const last = input.charAt(input.length - 1);
    document.getElementById('task2-result').textContent = `First character: "${first}", Last character: "${last}"`;
}

// Task 3: Find longest word
function task3() {
    const input = document.getElementById('task3-input').value;
    if (!input.trim()) {
        document.getElementById('task3-result').textContent = 'Please enter a sentence';
        return;
    }
    const words = input.split(' ');
    let longest = '';
    words.forEach(word => {
        if (word.length > longest.length) longest = word;
    });
    document.getElementById('task3-result').textContent = `Longest word: "${longest}" (${longest.length} characters)`;
}

// Task 4: Convert to Title Case
function task4() {
    const input = document.getElementById('task4-input').value;
    if (!input.trim()) {
        document.getElementById('task4-result').textContent = 'Please enter text';
        return;
    }
    const result = input.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    document.getElementById('task4-result').textContent = result;
}

// Task 5: Replace word in string
function task5() {
    const original = document.getElementById('task5a-input').value;
    const oldWord = document.getElementById('task5b-input').value;
    const newWord = document.getElementById('task5c-input').value;
    
    if (!original || !oldWord || !newWord) {
        document.getElementById('task5-result').textContent = 'Please fill all fields';
        return;
    }
    
    const result = original.replace(new RegExp(oldWord, 'gi'), newWord);
    document.getElementById('task5-result').textContent = result;
}

// Task 6: Count vowels
function task6() {
    const input = document.getElementById('task6-input').value.toLowerCase();
    if (!input.trim()) {
        document.getElementById('task6-result').textContent = 'Please enter text';
        return;
    }
    
    const vowels = 'aeiou';
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) count++;
    }
    document.getElementById('task6-result').textContent = `Found ${count} vowels (a, e, i, o, u)`;
}

// Task 7: Create array from input
function task7() {
    const input = document.getElementById('task7-input').value;
    if (!input.trim()) {
        document.getElementById('task7-result').textContent = 'Please enter values separated by commas';
        return;
    }
    
    const arr = input.split(',').map(item => item.trim());
    document.getElementById('task7-result').textContent = `Array created: [${arr.map(item => `"${item}"`).join(', ')}]`;
}

// Task 8:
