<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="3" class="pa-0 mb-2">
        <v-subheader class="required">{{details.title}}</v-subheader>
      </v-col>

      <v-col :cols="details.size" class="pb-0 px-0">
        <v-select
          :items="details.menuItems"
          :label="details.menuItems[0]"
          dense
          outlined
          single-line
          color="grey lighten-2"
        ></v-select>
      </v-col>
      <v-col v-if="details.countButton" cols="2" class="mx-auto">
        <CountButtons />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountButtons from "./CountButtons";
export default {
  name: "Dropdown",
  props: ["details"],
  components: {
    CountButtons
  },
  mounted() {
    console.log("details: ", this.details.title);
  }
};
</script>
<style scoped>
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}

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
</style>
