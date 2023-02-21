<template>
  <div class="content-main-head flex items-center">
    <h1 class="content-main-head__title base__big-text">Transaction</h1>
    <button class="content-main-head__button base-big-button">Execute</button>
  </div>
  <baseTable></baseTable>
  <baseCards></baseCards>
</template>

<script>
import baseTable from "../components/baseTable.vue"
import baseCards from "../components/baseCards.vue"

export default {
  name: "Transactions",
  components: {baseTable,baseCards}
}
</script>

<style scoped>

</style>