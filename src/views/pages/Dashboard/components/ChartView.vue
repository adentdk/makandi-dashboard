<template>
  <v-card class="mt-10">
    <v-card-title>Top Sales</v-card-title>
    <v-row v-if="render">
      <v-col>
        <apexchart
          width="100%"
          height="300"
          type="area"
          :options="options"
          :series="series"
        ></apexchart>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'ChartViewDashboard',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      render: false,
      options: {
        chart: {
          id: 'ChartViewDashboard',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'straight'
        },
        xaxis: {
          categories: ['21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec']
        }
      },
      series: [{
        name: 'Top Sales',
        data: [30, 40, 45, 50, 49, 60, 70]
      }]
    }
  },
  created () {
    setTimeout(() => {
      this.render = true
    }, 500)
  }
}
</script>
