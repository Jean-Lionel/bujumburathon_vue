<template>
    <div>
        <!-- Hello World. -->
        <canvas id="myChart">

        </canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

// const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

const config = {
    type: 'line',
    data: data,
    options: options,
}
onMounted(()=>{
    new Chart(
        document.getElementById("myChart"),
        config
    )
})

</script>