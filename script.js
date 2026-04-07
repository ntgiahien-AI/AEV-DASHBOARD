// Chart JS defaults for dark theme
Chart.defaults.color = '#C5C6C7';
Chart.defaults.font.family = 'Inter';

document.addEventListener('DOMContentLoaded', () => {
    // === BAR CHART: Server Load ===
    const barCtx = document.getElementById('barChart').getContext('2d');
    
    // Create gradient for bars
    const barGradient = barCtx.createLinearGradient(0, 0, 0, 400);
    barGradient.addColorStop(0, 'rgba(102, 252, 241, 0.8)');
    barGradient.addColorStop(1, 'rgba(102, 252, 241, 0.1)');

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['App SV 1', 'App SV 2', 'DB Primary', 'DB Replica', 'Cache Node', 'Gateway'],
            datasets: [{
                label: 'CPU Usage (%)',
                data: [45, 52, 85, 30, 20, 65],
                backgroundColor: barGradient,
                borderColor: '#66FCF1',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 40, 51, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#66FCF1',
                    borderColor: '#45A29E',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
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

    // === PIE CHART: Resources Allocation ===
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    
    new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Storage', 'Memory', 'Compute', 'Network'],
            datasets: [{
                data: [35, 25, 25, 15],
                backgroundColor: [
                    '#66FCF1',    // Accent blue
                    '#2f80ED',    // Deep blue
                    '#f1c40f',    // Warning yellow
                    '#e74c3c'     // Danger red
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
});