document.getElementById('start-quiz').addEventListener('click', function() {
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('quiz-question').innerText = 'What is the most common greenhouse gas?';
});

document.getElementById('submit-answer').addEventListener('click', function() {
  const userAnswer = document.getElementById('user-answer').value.toLowerCase();
  const feedback = document.getElementById('feedback');

  if (userAnswer === 'carbon dioxide') {
      feedback.innerText = 'Correct! Carbon dioxide is the most common greenhouse gas.';
  } else {
      feedback.innerText = 'Incorrect. Try again!';
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});
