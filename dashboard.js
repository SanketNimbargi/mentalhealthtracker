// Function to display a random motivational quote
function displayMotivationalQuote() {
    // Array of quotes
    const quotes = [
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
      "The only way to do great work is to love what you do. -Steve Jobs",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson"
    ];
  
    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    // Display the quote on the page
    const quoteElement = document.getElementById("motivational-quote");
    quoteElement.innerHTML = quote;
  }
  
  // Function to display a notification for completing a task
  function displayTaskCompletionNotification() {
    // Get the task name from the input field
    const taskName = document.getElementById("task-name").value;
  
    // Create a notification message
    const notificationMessage = `Great job completing the task: ${taskName}`;
  
    // Display the notification on the page
    const notificationElement = document.getElementById("task-completion-notification");
    notificationElement.innerHTML = notificationMessage;
  }
  
  // Add event listeners for the motivational quote button and the task completion button
  const motivationalQuoteButton = document.getElementById("motivational-quote-button");
  motivationalQuoteButton.addEventListener("click", displayMotivationalQuote);
  
  const taskCompletionButton = document.getElementById("task-completion-button");
  taskCompletionButton.addEventListener("click", displayTaskCompletionNotification);
  