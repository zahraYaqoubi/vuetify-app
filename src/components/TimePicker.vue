<template>
  <v-row>
      <v-row class="ma-0">
          <p>{{title}}</p>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="7" class="pt-0 px-0">
          <v-select
            :items="hours"
            :label="hours[0]"
            light
            class="rounded-r-0"
            dense
            single-line
            outlined
            color="grey lighten-2"
          ></v-select>
        </v-col>
        <v-col cols="5" class="pt-0 px-0">
          <v-select
            :items="am_pm"
            class="rounded-l-0"
            :label="am_pm[0]"
            dense
            outlined
            single-line
            color="grey lighten-2"
          ></v-select>
        </v-col>
      </v-row>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      am_pm: ["AM", "PM"],
      hours: ["9:30", "3:30", "12:30", "1:30"]
    };
  },
  props:["title"]
};
</script>
<style scoped>
::v-deep .mdi-menu-down::before {
  color: black;
}

::v-deep .theme--light.v-subheader {
  color: rgb(154 154 154);
}
.required:after {
  content: " *";
  margin: 1px;
  color: red;
}
.v-select,
.v-input input {
  font-size: 0.7rem !important;
}
::v-deep
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-right: 0px !important;
  padding-left: 8px !important;
}
p{
    font-size: 0.8rem;
    color: grey;
    margin: 0px !important;
    margin-bottom: 4px !important;
}
</style>