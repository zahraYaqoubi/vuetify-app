<template>
  <v-container fluid>
    <v-row align="center" cols="12">
      <v-col cols="3" class="pa-0 mb-2">
        <v-subheader class="required">Time</v-subheader>
      </v-col>
      <v-col cols="7" class="d-flex pb-0 px-0">
          <TimePicker title="Start time" cols="5" class="ma-0"/>
          <p cols="1" class="mt-8 mx-1">to</p>
          <TimePicker title="End time" cols="5" class="ma-0"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TimePicker from "./TimePicker";
export default {
  data() {
    return {
      am_pm: ["AM", "PM"],
      startTime: "",
      endTime: ""
    };
  },
  components: {
    TimePicker
  }
};
</script>
<style scoped>
::v-deep .mdi-menu-down::before {
  color: black;
}

::v-deep .theme--light.v-subheader {
  color: rgb(154 154 154);
}
::v-deep .v-application .pl-2 {
  padding-left: 8px !important;
}

::v-deep .v-application .pr-0 {
  padding-right: 0px !important;
}
.required:after {
  content: " *";
  margin: 1px;
  color: red;
}
p {
  color: rgb(154 154 154);
  font-size: 0.8rem;
}
</style>