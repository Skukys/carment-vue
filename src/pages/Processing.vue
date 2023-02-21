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
    <div class="flex items-center">
      <div class="info-header__id">#095552</div>
      <div class="info-header__name">
        <p>Processing</p>
      </div>
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
        <div class="processing-data__list-item__start">Full name</div>
        <div class="processing-data__list-item__end">Hin Tresher</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">SSN</div>
        <div class="processing-data__list-item__end">•••••0002</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Address</div>
        <div class="processing-data__list-item__end">6885 S Redwoood Rd West Jordan, Utah(UT), 84088</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Email</div>
        <div class="processing-data__list-item__end">Hin.Tresher@gmail.com</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Phone</div>
        <div class="processing-data__list-item__end"><a href="#" class="base__link-bold">+1 (111) 091-01-02</a></div>
      </div>
    </div>
  </div>
  <div class="payment">
    <div class="payment__title flex">
      <div class="payment__title-icon">
        <img src="src/img/icons/payment-icon.svg" alt="payment icon">
      </div>
      <div class="payment__title-text">Payment method</div>
    </div>
    <div class="payment-info">
      <div class="payment-info__item">
        <div class="payment-info__item-start">Type</div>
        <div class="payment-info__item-end">Debit Card</div>
      </div>
      <div class="payment-info__item">
        <div class="payment-info__item-start">Card Number</div>
        <div class="payment-info__item-end">•••••0002</div>
      </div>
      <div class="payment-info__item">
        <div class="payment-info__item-start">Valid thru</div>
        <div class="payment-info__item-end">10/2024</div>
      </div>
    </div>
  </div>
  <div class="processing-data">
    <div class="processing-data__title">
      Transaction information
    </div>
    <div class="processing-data__list">
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Amount</div>
        <div class="processing-data__list-item__end">$10,000</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Location</div>
        <div class="processing-data__list-item__end">Beach Blvd of Cars</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Contact ID</div>
        <div class="processing-data__list-item__end">FC0332677</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Contact Date</div>
        <div class="processing-data__list-item__end">Feb 11, 2023 10:53 PM</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Created by</div>
        <div class="processing-data__list-item__end">Jude Law</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Creation date</div>
        <div class="processing-data__list-item__end">Feb 11, 2023 10:53 PM</div>
      </div>
      <div class="processing-data__list-item">
        <div class="processing-data__list-item__start">Approved by</div>
        <div class="processing-data__list-item__end">Hin Tresher</div>
      </div>
    </div>
  </div>
  <div class="approve flex">
    <button class="base-button-bold approve-button__approve">Approve</button>
    <button class="base-button-bold-transparent approve-button__cancel">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "Processing"
}
</script>

<style scoped>

</style>