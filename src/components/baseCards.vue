<template>
  <div class="base-cards flex">
    <div class="base-card">
      <div class="base-card__header flex">
        <div class="base-card__header-info">
          <p>Hin, Tresher</p>
          <span>Feb 11, 2023 10:53 PM</span>
        </div>
        <div class="base-card__header-link flex items-center">
          <router-link to="/processing" class="base__link-bold">Processing</router-link>
          <div class="base-card__header-link-icon">
            <img src="../img/icons/arrpow-right-icon.svg" alt="arrow right">
          </div>
        </div>
      </div>
      <div class="base-card__row grey">
        <p><span>ID</span></p>
        <p>FC0332677</p>
      </div>
      <div class="base-card__row">
        <p><span>Location</span></p>
        <p>Beach Blvd of Cars</p>
      </div>
      <div class="base-card__row grey">
        <p><span>Amount</span></p>
        <p>$10,000</p>
      </div>
      <div class="base-card__row">
        <p><span>ApprovedBy</span></p>
        <p>Joseph, Wilson</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseCards"
}
</script>

<style scoped>

</style>