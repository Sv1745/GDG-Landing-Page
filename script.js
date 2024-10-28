const events = [
  {
      title: 'Flutter Workshop',
      date: '2024-03-15',
      time: '2:00 PM',
      description: 'Learn to build cross-platform apps with Flutter'
  },
  {
      title: 'Cloud Study Jam',
      date: '2024-03-20',
      time: '3:00 PM',
      description: 'Deep dive into Google Cloud Platform'
  },
  {
      title: 'Android Dev Days',
      date: '2024-03-25',
      time: '10:00 AM',
      description: 'Explore the latest in Android development'
  }
];

function populateEvents() {
  const eventGrid = document.getElementById('eventGrid');
  events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${formatDate(event.date)}</p>
          <p><strong>Time:</strong> ${event.time}</p>
          <p>${event.description}</p>
          <button class="primary-btn" onclick="registerEvent('${event.title}')">Register</button>
      `;
      eventGrid.appendChild(eventCard);
  });
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
}

function registerEvent(eventTitle) {
  alert(`Thanks for your interest in ${eventTitle}! Registration will open soon.`);
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
  }

  alert('Thanks for your message! We\'ll get back to you soon.');

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  populateEvents();
});

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.event-card, .team-member');
  elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
});