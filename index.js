fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => data.results)
  .then(results => appendResults(results))

  function appendResults(results) {
    results.forEach(function(results) {
      $('article').append(`<p>Category: ${results.category}</p>`)
      $('article').append(`<p>Question: ${results.question}</p>`)
      $('article').append(`<p>Correct Answer: ${results.correct_answer}</p>`)
      $('article').append(`<p>Incorrect Answers: ${results.incorrect_answers}</p>`)
    })
  }
