<template>
  <div class="content-main-table base-table-block">
    <nav class="base-table-navigation">
      <button class="base-table-navigation__item active">All</button>
      <button class="base-table-navigation__item">Successful</button>
      <button class="base-table-navigation__item">Failed</button>
      <button class="base-table-navigation__item">Processing</button>
      <button class="base-table-navigation__item">Required approval</button>
      <button class="base-table-navigation__item">Canceled</button>
      <button class="base-table-navigation__item">Draft</button>
    </nav>
  </div>
  <table class="base-table">
    <thead class="base-table__head">
    <th class="base-table__head-item">ID</th>
    <th class="base-table__head-item">Customer</th>
    <th class="base-table__head-item">Location</th>
    <th class="base-table__head-item">Created By</th>
    <th class="base-table__head-item">Approved By</th>
    <th class="base-table__head-item">Amount</th>
    <th class="base-table__head-item">Status</th>
    </thead>
    <tbody class="base-table-body">
    <tr class="base-table-row">
      <td class="base-table-row__item">
        <p>FC0332677</p>
      </td>
      <td class="base-table-row__item">
        <p>Hin, Tresher</p>
      </td>
      <td class="base-table-row__item">
        <p>Beach Blvd of Cars</p>
      </td>
      <td class="base-table-row__item">
        <p>Shane, Richardson</p>
        <span>Feb 11, 2023 10:53 PM</span>
      </td>
      <td class="base-table-row__item">
        <p>Joseph, Wilson</p>
        <span>Feb 11, 2023 10:53 PM</span>
      </td>
      <td class="base-table-row__item">
        <p>$10,000</p>
      </td>
      <td class="base-table-row__item">
        <router-link to="/processing" class="base__link-bold">Processing</router-link>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="base-table-pagination">
    <div class="base-table-pagination__count base__text">items 1,231</div>
    <base-select></base-select>
    <div class="base-table-pagination__buttons flex items-center">
      <button class="base-table-pagination__buttons-button active base__text">1</button>
      <button class="base-table-pagination__buttons-button base__text">2</button>
      <button class="base-table-pagination__buttons-button base__text">3</button>
      <button class="base-table-pagination__buttons-icon">
        <img src="../img/icons/arrow-right.svg" alt="arrow right">
      </button>
    </div>
  </div>
</template>

<script>
import baseSelect from './baseSelect.vue'

export default {
  name: "baseTable",
  components: {baseSelect}
}
</script>

<style scoped>

</style>