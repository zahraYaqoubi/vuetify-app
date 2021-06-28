<template >
  <v-container fluid class="full_height">
    <v-row class="full_height ma-0">
      <v-row class="mb-0">
        <Dropdown :details="details[3]" class="pb-0"/>
        <SelectTime class="py-0"/>
      </v-row>
      <v-row class="mt-auto">
        <Textarea class="py-0" />
        <v-col cols="9" class="pa-0 ml-auto">
          <v-btn class="pa-0" text color="#00BFA5">+ Upload image</v-btn>
        </v-col>
        <Dropdown class="py-0" :details="details[4]" />
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
import Dropdown from "./Dropdown";
import SelectTime from "./SelectTime";
import Textarea from "./Textarea";
export default {
  data() {
    return {
      details: this.$store.state.details
    };
  },
  components: {
    Dropdown,
    SelectTime,
    Textarea
  }
};
</script>
<style scoped>
.v-subheader {
  color: #000;
}
::v-deep .v-btn.v-size--default {
  font-size: 0.7rem;
}
::v-deep .v-btn {
  text-transform: none !important;
}
.full_height{
  height: 100% !important;
}
</style>