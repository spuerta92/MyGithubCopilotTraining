window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });  

    var canvas = document.getElementById('myChart');
    var downloadButton = document.getElementById('download');
    downloadButton.addEventListener('click', function() {
        var link = document.createElement('a');
        link.download = 'chart.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    document.getElementById('chart-tab').addEventListener('click', function() {
        // January
        var januaryIncome = document.getElementById('january-income').value;
        var januaryExpenses = document.getElementById('january-expenses').value;
    
        // February
        var februaryIncome = document.getElementById('february-income').value;
        var februaryExpenses = document.getElementById('february-expenses').value;
    
        // March
        var marchIncome = document.getElementById('march-income').value;
        var marchExpenses = document.getElementById('march-expenses').value;
    
        // April
        var aprilIncome = document.getElementById('april-income').value;
        var aprilExpenses = document.getElementById('april-expenses').value;
    
        // May
        var mayIncome = document.getElementById('may-income').value;
        var mayExpenses = document.getElementById('may-expenses').value;
    
        // June
        var juneIncome = document.getElementById('june-income').value;
        var juneExpenses = document.getElementById('june-expenses').value;
    
        // July
        var julyIncome = document.getElementById('july-income').value;
        var julyExpenses = document.getElementById('july-expenses').value;
    
        // August
        var augustIncome = document.getElementById('august-income').value;
        var augustExpenses = document.getElementById('august-expenses').value;
    
        // September
        var septemberIncome = document.getElementById('september-income').value;
        var septemberExpenses = document.getElementById('september-expenses').value;
    
        // October
        var octoberIncome = document.getElementById('october-income').value;
        var octoberExpenses = document.getElementById('october-expenses').value;
    
        // November
        var novemberIncome = document.getElementById('november-income').value;
        var novemberExpenses = document.getElementById('november-expenses').value;
    
        // December
        var decemberIncome = document.getElementById('december-income').value;
        var decemberExpenses = document.getElementById('december-expenses').value;
    
        var incomeData = [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome].map(Number);
        var expensesData = [januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses, julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses].map(Number);

        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();
    });
}
