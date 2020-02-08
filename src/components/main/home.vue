<template>

  <v-container>
    <div class="text-center mt-5">
      <h1 class="blue--text">Total Sales:</h1>
      <app-counter></app-counter>
    </div>
    <v-row>
      <v-col cols="6">
        <h1 class="indigo--text text-center">Employees Record</h1>
      <GChart
        type="ColumnChart"
        :data="chartData1"
        :options="chartOptions1"
        style="height: 400px;"
      />
      </v-col>

      <v-col cols="6">
        <h1 class="indigo--text text-center mb-12">Company Performance</h1>
        <GChart
            :settings="{packages: ['bar']}"    
            :data="chartData2"
            :options="chartOptions"
            :createChart="(el, google) => new google.charts.Bar(el)"
            @ready="onChartReady"
          />
      </v-col>
      <v-col cols="12" class="indigo--text">
        <h1 class="text-center mb-5">Gallery Section</h1>
        <app-gallery></app-gallery>
      </v-col>
    </v-row>

  </v-container>

</template>


<script>
import { GChart } from 'vue-google-charts'
import counter from "./counter"
import gallery from "./gallery"
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData1: [
        ['Year', 'Employees', 'Labor', 'Management'],
        ['2017', 100, 400, 200],
        ['2018', 150, 460, 250],
        ['2019', 200, 1120, 300],
        ['2020', 250, 540, 350]
      ],
      chartOptions1: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData2: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ]
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  methods:{
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  },
  components: {
    GChart,
    appCounter:counter,
    appGallery:gallery
  }
}
</script>