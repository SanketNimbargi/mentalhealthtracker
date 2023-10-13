

// <!-- Inspirational quote section -->

  const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. -Confucius",
    "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill"
  ];

  const quoteText = document.getElementById('quote-text');
  const quoteBtn = document.getElementById('quote-btn');

  // Add event listener to quote button
  quoteBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // generate random index
    quoteText.innerText = quotes[randomIndex]; // set quote text
  });

// <!-- Priority task section -->

  const priorityTaskForm = document.getElementById('priority-task-form');
  const priorityTaskList = document.getElementById('priority-task-list');

  // Add event listener to form submit
  priorityTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const priorityTaskInput = document.getElementById('priority-task-input');
    const priorityTaskText = priorityTaskInput.value.trim(); // trim whitespace from input

    if (priorityTaskText !== '') { // if input is not empty
      const priorityTaskItem = document.createElement('li'); // create new list item
      priorityTaskItem.innerText = priorityTaskText; // set item text
      priorityTaskList.appendChild(priorityTaskItem); // add item to list
      priorityTaskInput.value = ''; // clear input field
    }
  });



// <!-- Motivational session section -->

  const sessionForm = document.getElementById('session-form');
  const sessionList = document.getElementById('session-list');

  // Add event listener to form submit
  sessionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const sessionInput = document.getElementById('session-input');
    const sessionText = sessionInput.value.trim(); // trim whitespace from input

    if (sessionText !== '') { // if input is not empty
      const sessionItem = document.createElement('li'); // create new list item
      sessionItem.innerText = sessionText; // set item text
      sessionList.appendChild(sessionItem); // add item to list
      sessionInput.value = ''; // clear input field
    }
  });

// <!-- Night check-in survey section -->

  const surveyForm = document.getElementById('survey-form');

  // Add event listener to form submit
  surveyForm.addEventListener('submit', function(event) {
    event.preventDefault
  });

  // Function to submit survey form data
  function submitSurvey() {
  // Get form data
  const mood = document.getElementById('mood-select').value;
  const sleep = document.querySelector('input[name="sleep-radio"]:checked').value;
  const exercise = document.querySelector('input[name="exercise-radio"]:checked').value;
  const social = document.querySelector('input[name="social-radio"]:checked').value;
  const stress = document.querySelector('input[name="stress-radio"]:checked').value;

  // Create survey data object
const surveyData = {
  mood: mood,
  sleep: sleep,
  exercise: exercise,
  social: social,
  stress: stress
};

// Send survey data to server using fetch
fetch('/submit-survey', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(surveyData)
})
.then(response => response.json())
.then(data => {
  console.log(data.message);
  alert(data.message);
})
.catch(error => console.error(error));
}


// <!-- Motivational sessions section -->

  // Array of motivational session topics
  const topics = ['Overcoming Fear', 'Positive Thinking', 'Stress Management', 'Building Confidence', 'Goal Setting', 'Mindfulness'];

  // Function to display a random motivational session topic
  function displayTopic() {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById('topic-display').textContent = topic;
  }

  // Add event listener to button to display a new topic
  document.getElementById('new-topic-btn').addEventListener('click', function() {
    displayTopic();
  });

  // Display initial topic when page loads
  displayTopic();

// <!-- To-Do List section -->

  const todoForm = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');

  // Add event listener to form submit
  todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get new task input value
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value;

    // Create new task list item
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Add delete button to new task item
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
    newTask.appendChild(deleteButton);

    // Add new task item to list
    todoList.appendChild(newTask);

    // Reset task input value
    taskInput.value = '';

    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(newTask);
    });
  });

  // <!--community Forum Section-->

  // Get the forum form and forum container elements
const forumForm = document.getElementById('forum-form');
const forumContainer = document.getElementById('forum-container');

// Add event listener to form submit
forumForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the forum message input
  const messageInput = document.getElementById('forum-message');
  
  // Create a new forum message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('forum-message');
  
  // Add the message text to the new element
  const messageText = document.createTextNode(messageInput.value);
  messageElement.appendChild(messageText);
  
  // Add the new message element to the forum container
  forumContainer.appendChild(messageElement);
  
  // Clear the message input
  messageInput.value = '';
});

// <!-- Journailing section-->

const journalForm = document.getElementById('journal-form');
const journalEntries = [];

// Add event listener to form submit
journalForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get journal input value
  const journalInput = document.getElementById('journal-input').value;

  // Add journal entry to array
  journalEntries.push(journalInput);

  // Clear form input
  document.getElementById('journal-input').value = '';

  // Update journal entry list
  updateJournalEntries();
});

// Function to update journal entry list
function updateJournalEntries() {
  const journalEntryList = document.getElementById('journal-entry-list');
  journalEntryList.innerHTML = '';

  // Loop through journal entries array and create list items
  for (let i = 0; i < journalEntries.length; i++) {
    const journalEntry = journalEntries[i];
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(journalEntry));
    journalEntryList.appendChild(li);
  }
}

// <!--Mental Health Educational Section-->
// Define an array of objects to hold the educational resources
const resources = [
  {
    title: "Coping with Stress",
    author: "National Institute of Mental Health",
    description: "Learn about different coping strategies for managing stress.",
    link: "https://www.nimh.nih.gov/health/publications/stress/index.shtml"
  },
  {
    title: "Mindfulness Meditation",
    author: "Harvard Health Publishing",
    description: "Discover the benefits of mindfulness meditation and how to practice it.",
    link: "https://www.health.harvard.edu/blog/mindfulness-meditation-may-ease-anxiety-mental-stress-201401086967"
  },
  {
    title: "Understanding Depression",
    author: "American Psychiatric Association",
    description: "Find out more about depression, its symptoms, and how it can be treated.",
    link: "https://www.psychiatry.org/patients-families/depression/what-is-depression"
  }
];

// Get the container for the resources
const resourcesContainer = document.getElementById('resources-container');

// Loop through the resources array and create a card for each resource
for (let i = 0; i < resources.length; i++) {
  // Create a new card element
  const card = document.createElement('div');
  card.classList.add('card', 'my-3');

  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Create the card title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = resources[i].title;

  // Create the card subtitle
  const cardSubtitle = document.createElement('h6');
  cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
  cardSubtitle.innerText = `by ${resources[i].author}`;

  // Create the card description
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text');
  cardDescription.innerText = resources[i].description;

  // Create the card link
  const cardLink = document.createElement('a');
  cardLink.classList.add('card-link');
  cardLink.href = resources[i].link;
  cardLink.innerText = 'Learn More';

  // Add the elements to the card body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardLink);

  // Add the card body to the card
  card.appendChild(cardBody);

  // Add the card to the container
  resourcesContainer.appendChild(card);
}

// Sample recommendations data
const recommendations = [
  {
    title: 'Practice Mindfulness',
    description: 'Learn to focus on the present moment and reduce stress and anxiety.',
    link: 'https://www.mindful.org/how-to-practice-mindfulness/',
  },
  {
    title: 'Get Enough Sleep',
    description: 'Sleep is important for both physical and mental health. Aim for 7-8 hours of sleep each night.',
    link: 'https://www.sleepfoundation.org/articles/healthy-sleep-tips',
  },
  {
    title: 'Connect with Others',
    description: 'Social support is important for good mental health. Reach out to friends and family.',
    link: 'https://www.psychologytoday.com/us/basics/social-support',
  },
];

// Get recommendations container element
const recommendationsContainer = document.querySelector('.recommendations-container');

// Randomly select a recommendation from the data
const randomRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];

// Update the recommendation item with the selected recommendation data
const recommendationTitle = recommendationsContainer.querySelector('.recommendation-title');
recommendationTitle.textContent = randomRecommendation.title;

const recommendationDescription = recommendationsContainer.querySelector('.recommendation-description');
recommendationDescription.textContent = randomRecommendation.description;

const recommendationLink = recommendationsContainer.querySelector('.recommendation-link');
recommendationLink.href = randomRecommendation.link;


// Array of exercises with their details
const exercises = [
  {
    title: "Body Scan Meditation",
    duration: "10 minutes",
    description: "This meditation involves a systematic scan of your body to bring awareness to each part and release any tension or stress.",
    image: "https://via.placeholder.com/300x200",
    video: "https://www.youtube.com/watch?v=wh5I-LsTlns",
  },
  {
    title: "Mindful Breathing",
    duration: "5 minutes",
    description: "Focus on your breath and bring your attention back to the present moment.",
    image: "https://via.placeholder.com/300x200",
    video: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk",
  },
  {
    title: "Loving-Kindness Meditation",
    duration: "15 minutes",
    description: "This meditation helps cultivate feelings of love, kindness, and compassion towards yourself and others.",
    image: "https://via.placeholder.com/300x200",
    video: "https://www.youtube.com/watch?v=EwQkfoKxRvo",
  },
];


// <!-- Exercise Section -->

// Get the exercises container element
const exercisesContainer = document.getElementById("exercises-container");

// Loop through the exercises array and create HTML for each exercise
exercises.forEach((exercise) => {
  // Create the exercise element
  const exerciseElement = document.createElement("div");
  exerciseElement.classList.add("col-md-4");

  // Create the exercise card HTML
  const exerciseCardHTML = `
    <div class="card">
      <img src="${exercise.image}" class="card-img-top" alt="${exercise.title}">
      <div class="card-body">
        <h5 class="card-title">${exercise.title}</h5>
        <p class="card-text">${exercise.description}</p>
        <a href="${exercise.video}" class="btn btn-primary" target="_blank">Watch Video</a>
      </div>
    </div>
  `;

  // Set the exercise card HTML to the exercise element
  exerciseElement.innerHTML = exerciseCardHTML;

  // Add the exercise element to the exercises container
  exercisesContainer.appendChild(exerciseElement);
});

// <!--Gratitude Section-->

const gratitudeForm = document.getElementById('gratitude-form');
const gratitudeList = document.getElementById('gratitude-list');

// Add event listener to form submit
gratitudeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const gratitudeInput = document.getElementById('gratitude-input');

  // Create new list item with gratitude entry
  const newGratitude = document.createElement('li');
  newGratitude.innerHTML = gratitudeInput.value;

  // Add new list item to gratitude list
  gratitudeList.appendChild(newGratitude);

  // Clear input field
  gratitudeInput.value = '';
});

