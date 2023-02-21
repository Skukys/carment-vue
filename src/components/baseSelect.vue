<template>

  <div class="base-select flex items-center" @click="active = !active">
    <div class="base-select__dropdown" v-if="active">
      <div class="base-select__dropdown-item" @click="changeValue(value)" v-for="value in values">
        {{value}}
      </div>
    </div>
    <div class="base-select__value">{{selected}}</div>
    <div :class="['base-select__icon', active ? 'rotated' : '']">
      <img src="src/img/icons/select-icon.svg" alt="arrow">
    </div>
  </div>

</template>

<script>
export default {
  name: "baseSelect",
  data(){
    return {
      active: false,
      selected: 100,
      values: [100, 150, 200, 250]
    }
  },
  methods: {
    changeValue(value){
      this.selected = value
    }
  }
}
</script>

<style scoped>

</style>