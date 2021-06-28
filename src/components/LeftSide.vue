<template>
  <v-container fluid>
    <v-row align="center">
      <Dropdown :details="details[0]" />
      <SelectDate />
      <Dropdown :details="details[1]" />
      <v-col cols="9" class="pa-0 ml-auto">
        <v-text-field label="write your address" dense single-line outlined color="grey lighten-2"></v-text-field>
      </v-col>
        <Dropdown :details="details[2]" />
      <Checkbox />
    </v-row>
  </v-container>
</template>
<script>
import Dropdown from "./Dropdown";
import SelectDate from "./SelectDate";
import Checkbox from "./Checkbox";
export default {
  data() {
    return {
      details: this.$store.state.details
    };
  },
  components: {
    Dropdown,
    SelectDate,
    Checkbox,
  }
};
</script>
<style scoped>
.v-subheader {
  color: #000;
}
</style>