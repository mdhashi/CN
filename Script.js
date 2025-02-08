// Skills Chart
const skillsData = {
  labels: ['Python', 'JavaScript', 'SQL', 'React'],
  datasets: [{
    data: [90, 80, 75, 85],
    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
  }]
};

const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: skillsData
});
