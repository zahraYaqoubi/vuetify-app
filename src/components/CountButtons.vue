<template>
  <div class="text-center d-flex" justify="space-between">
    <v-btn class="mx-2" fab x-small light
    @click="decrease"
    :disabled="number==1">
      <v-icon light color="#00BFA5">mdi-minus-circle</v-icon>
    </v-btn>
    <p class="my-auto">{{number}}</p>
    <v-btn class="mx-2" fab light x-small
    @click="increase">
      <v-icon light color="#00BFA5">mdi-plus-circle</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 1
    };
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      if (this.number > 1) this.number--;
    }
  }
};
</script>
<style scoped>
::v-deep .v-btn--is-elevated {
  box-shadow: none !important;
}
::v-deep .theme--light.v-btn.v-btn--disabled.v-btn--has-bg, .v-btn:before, .theme--light.v-btn.v-btn--has-bg {
    background-color: white !important;
}
p {
  font-size: 0.8rem;
}
</style>