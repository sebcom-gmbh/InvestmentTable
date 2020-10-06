<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="ui container">
      <investment-table></investment-table>
    </div>
    <div id="example-1">
      <button v-on:click="InvestmentTable.methods.forceRerender()">Add 1</button>
    </div>
  </div>
</template>

<script>
import InvestmentTable from './components/InvestmentTable'

export default {
  name: 'app',
  components: {
    InvestmentTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>