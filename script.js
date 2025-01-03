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
  
  async function fetchPRs() {
    try {
      const response = await fetch('https://api.github.com/repos/CodingChallengesFYI/SharedSolutions/pulls');
      const prs = await response.json();
      
      // Update PR count
      const prCount = document.querySelector('.pr-count');
      prCount.textContent = `There are ${prs.length} PRs open for Shared Solutions:`;
      
      // Update PR list
      const prList = document.querySelector('.pr-list');
      prList.innerHTML = '';
      
      prs.forEach((pr, index) => {
        const li = document.createElement('li');
        li.className = 'pr-item';
        li.textContent = `${index + 1}. ${pr.title}`;
        prList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching PRs:', error);
      const prSection = document.getElementById('pr-section');
      prSection.innerHTML = 'Error loading PRs. Please refresh the page.';
    }
  }
  
  // Update time immediately and then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Fetch PRs immediately and then every 5 minutes
  fetchPRs();
  setInterval(fetchPRs, 5 * 60 * 1000);