// JavaScript for both pages

// Redirect to question page
document.getElementById('startButton')?.addEventListener('click', function() {
    window.location.href = 'question.html';
});

// Handle the answer submission
document.getElementById('answerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('answerBox').value.trim().toLowerCase();
    if (answer === 'aryabhata' || answer === 'aryabhatta') {
        window.location.href = 'success.html';
    } else {
        alert('Think harder!');
    }
});

// Handle the key click events on the success page
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
        if (this.id === 'correctKey') {
            window.location.href = 'next-question.html';
        } else {
            alert('Try another key!');
        }
    });
});

document.getElementById('nextQuestionForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('nextAnswerBox').value.trim().toLowerCase();
    if (answer === 'library' || answer === 'the library') {
        window.location.href = 'library.html';
    } else {
        alert('Think harder!');
    }
});

document.querySelectorAll('.key2').forEach(key => {
    key.addEventListener('click', function() {
        if (this.id === 'correctKey2') {
            window.location.href = 'flag.html';
        } else {
            alert('Try another key!');
        }
    });
});

document.getElementById('FlagForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('FlagBox').value.trim().toLowerCase();
    if (answer === 'indian flag' || answer === 'flag') {
        window.location.href = 'flagimg.html';
    } else {
        alert('Think harder!');
    }
});

document.querySelectorAll('.key3').forEach(key => {
    key.addEventListener('click', function() {
        if (this.id === 'correctKey3') {
            window.location.href = 'reward.html';
        } else {
            alert('Try another key!');
        }
    });
});



