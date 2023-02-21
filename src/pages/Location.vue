<template>
  <router-link to="/" class="back-link flex items-center">
    <div class="back-link__icon">
      <img src="src/img/icons/back-arrow.svg" alt="arrow left">
    </div>
    <div class="back-link__text base__text ml-[22px]">
      Transaction
    </div>
  </router-link>
  <div class="info-header flex">
    <div class="flex items-center mr-[20px]">
      <div class="info-header__id">McPeek's Chrysler Dodge Jeep Ram of Anaheim</div>
    </div>
    <div class="info-header__button">
      <button class="base-transparent-button">Edit</button>
    </div>
  </div>
    <div class="processing-data">
      <div class="processing-data__title">
        Customer
      </div>
      <div class="processing-data__list">
        <div class="processing-data__list-item">
          <div class="processing-data__list-item__start">Address</div>
          <div class="processing-data__list-item__end">222 Deer Trace, Prattville, AL 36067, US Prattville, Alabama, USA </div>
        </div>
        <div class="processing-data__list-item">
          <div class="processing-data__list-item__start">Daili limit</div>
          <div class="processing-data__list-item__end">$60,000</div>
        </div>
        <div class="processing-data__list-item">
          <div class="processing-data__list-item__start">Limit Transaction</div>
          <div class="processing-data__list-item__end">$20,000</div>
        </div>
        <div class="processing-data__list-item">
          <div class="processing-data__list-item__start">Overlimit transactions</div>
          <div class="processing-data__list-item__end">Request approval</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Location"
}
</script>

<style scoped>

</style>