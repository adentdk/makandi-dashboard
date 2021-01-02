<template>
  <v-main class="grey lighten-4 height-100">
    <v-container>
      <FilterForm />
      <SummaryCard />
      <ChartView />
      <TableView />
    </v-container>
  </v-main>
</template>

<script>
import FilterForm from './components/FilterForm'
import SummaryCard from './components/SummaryCard'
import ChartView from './components/ChartView'
import TableView from './components/TableView'
export default {
  name: 'Dashboard',
  components: {
    FilterForm,
    SummaryCard,
    ChartView,
    TableView
  }
}
</script>
