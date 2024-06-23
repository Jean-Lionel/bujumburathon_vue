<template>
    <div class="chartContainer">
        <!-- Hello World. -->
        <canvas id="myChart">

        </canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

// const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
// const data = {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [
//         {
//         label: '# of Votes',
//         data: [12, 9, 3, 5, 2, 3],
//         borderWidth: 0.8,
//         backgroundColor: '#1ff',
//         borderColor: 'red',
//       },
//     ]
//     }
const data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

const config = {
    type: 'doughnut',
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

<style scoped>
.chartContainer{
    width: 50vw;
    height: 80vh;
}
</style>