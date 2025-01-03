// Coding tips array
const codingTips = [
    "Use meaningful variable names to make your code self-documenting",
    "Write unit tests before implementing new features (TDD)",
    "Keep your functions small and focused on a single task",
    "Comment your code, but prefer self-documenting code when possible",
    "Learn keyboard shortcuts for your IDE to boost productivity",
    "Regularly review and refactor your code to maintain quality",
    "Use version control even for small projects",
    "Handle errors gracefully with try-catch blocks",
    "Cache expensive operations to improve performance",
    "Keep your dependencies up to date but stable",
    "Take regular breaks to maintain productivity and prevent burnout",
    "Document your APIs and public interfaces",
    "Use code linting tools to maintain consistent style",
    "Practice pair programming to share knowledge",
    "Backup your work regularly"
  ];
  
  function updateDateTime() {
    const now = new Date();
    
    // Update time in HH:MM format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
    
    // Update date in full format
    const options = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
  }
  
  function getDailyTip() {
    // Use the date to get a consistent tip for the whole day
    const today = new Date().toDateString();
    // Create a simple hash of the date string
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // Use the hash to select a tip
    const tipIndex = hash % codingTips.length;
    return codingTips[tipIndex];
  }
  
  function updateTip() {
    const tipContent = document.getElementById('tip-content');
    tipContent.textContent = getDailyTip();
  }
  
  // Update immediately and then every second for time
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Set the daily tip (this only needs to be done once)
  updateTip();