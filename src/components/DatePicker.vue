<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="px-0"
      v-if="type == 'range'">
        <v-date-picker
          v-model="dates"
          width="250"
          color="grey lighten-1"
          range
          no-title
        ></v-date-picker>
      </v-col>
      <v-col v-if="type == 'specific'" cols="12" class="px-0">
        <v-date-picker
          v-model="dates"
          multiple
          width="250"
          color="grey lighten-1"
          no-title
        ></v-date-picker>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["type"],
  data: () => ({
    dates: [],
    pickerDate: null
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  watch: {
    dates() {
      this.$emit("dates", this.dates);
    }
  },
  mounted(){
      console.log("type: ", this.type);
  },
  updated(){
      console.log("type: ", this.type);
      console.log("dates: ", this.dates);
  }
};
</script>
<style scoped>
::v-deep .v-picker__body > div {
  border: 2px solid #736e6e !important;
}
::v-deep .v-picker__body {
  margin-right: 0px !important;
  margin-left: auto !important;
}
</style>