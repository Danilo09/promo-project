<template>
    <section key="skladj" class="graphic">
      <div>
        <h2>Gráfico das cidades</h2>
        <canvas id="myChart"></canvas>
      </div>
    </section>
  </template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "user-graphic",
  methods: {
 
  },
  mounted() {
    document.title = "Usuário";

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['São Paulo', 'Rio de Janeiro', 'Bahia',],
      datasets: [{
        label: '',
        data: [20, 10, 20],
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 30, 0.6)',
            'rgba(255, 100, 132, 0.8)',
            'rgba(255, 200, 132, 0.7)'
        ]
      }]
    },
    options: {
        animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 30
            }
        }
    }
  });
  }
};
</script>

<style scoped >

</style>