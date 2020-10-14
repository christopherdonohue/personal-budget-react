import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';


var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                'green',
                'yellow',
                'purple',

            ],
        }
    ],
    labels: []
};
function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    Chart.defaults.global.maintainAspectRatio = false;
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}

function getBudget() {
    axios.get('http://localhost:3001/budget')
    .then(function (res) {
        console.log(res);
        for (var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
        }
        createChart();
    });
    
}


function HomePage() {
    getBudget();
  return (
    <main className="container center" id="main">

    <div className="page-area">

        
        <article className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>
        

        <article className="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article className="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article className="text-box">
            <h1>Chart</h1>
            <p>
                <canvas id ="myChart" width="400" height="400"></canvas>
            </p>
        </article>
    </div>
    
  
  
    
</main>


  );

}



export default HomePage;