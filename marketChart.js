const marketCtx = document.getElementById('marketChart').getContext('2d');
const marketChart = new Chart(marketCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Portfolio Value',
            data: [2100000, 2150000, 2170000, 2220000, 2250000, 2300000, 2317000],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            borderWidth: 3,
            pointRadius: 0,
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + (value / 1000000).toFixed(1) + 'M';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Initialize allocation chart
const allocCtx = document.getElementById('allocationChart').getContext('2d');
const allocChart = new Chart(allocCtx, {
    type: 'doughnut',
    data: {
        labels: ['US Stocks', 'International', 'Bonds', 'Cash', 'Alternatives'],
        datasets: [{
            data: [65, 12, 15, 5, 3],
            backgroundColor: [
                '#3498db',
                '#2ecc71',
                '#9b59b6',
                '#f1c40f',
                '#e74c3c'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right'
            }
        },
        cutout: '70%'
    }
});

// Add hover effects to account cards
document.querySelectorAll('.account-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});