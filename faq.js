
// Function to toggle the visibility of the answer
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }

// ensures that only one answer box drops down at a time
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    const isOpen = answer.classList.contains('visible');
  
    // Close all answers
    const answers = document.getElementsByClassName('answer');
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove('visible');
    }
  
    // Open the selected answer if it was closed, or close it if it was open
    if (!isOpen) {
      answer.classList.add('visible');
    }

  }