<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="3" class="pa-0 mb-auto">
        <v-subheader class="required">Date</v-subheader>
      </v-col>
      <v-col cols="3" class="pa-0 mb-auto">
        <v-radio-group v-model="selectedRadioButton" hide-details>
          <v-radio class="mb-0" color="#00BFA5" value="range" label="Select a range of dates"></v-radio>
          <div class="d-flex ml-8 mt-1 flex-wrap" v-if="selectedRadioButton == 'range'">
            <div class="d-flex" v-for="(date, key) in dates" :key="key">
              <p class="ma-0">{{date}}</p>
              <p class="mx-1" v-if="key<dates.length-1">-</p>
            </div>
          </div>
          <v-radio class="mb-0" color="#00BFA5" value="specific" label="Select specific dates"></v-radio>
          <div v-if="selectedRadioButton == 'specific'" class="d-flex ml-8 mt-1 flex-wrap">
            <div class="d-flex" v-for="(date, key) in dates" :key="key">
              <p class="ma-0">{{date}}</p>
              <p class="mx-1" v-if="key<dates.length-1">,</p>
            </div>
          </div>
        </v-radio-group>
      </v-col>
      <v-col cols="6" class="pa-0">
        <DatePicker v-on:dates="dates = $event" :type="selectedRadioButton"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DatePicker from "./DatePicker";
export default {
  data() {
    return {
      selectedRadioButton: "range",
      dates: []
    };
  },
  components: {
    DatePicker
  }
};
</script>
<style scoped>
::v-deep .theme--light.v-subheader {
  color: rgb(154 154 154);
}
::v-deep .v-label {
  color: black;
}
.required:after {
  content: " *";
  margin: 1px;
  color: red;
}
p {
  color: #00bfa5 !important;
  margin-left: 32px !important;
  font-size: 0.7rem;
}
</style>