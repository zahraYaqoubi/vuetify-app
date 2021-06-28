<template>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="3" class="py-0">
            <v-subheader class="required pa-0">Language</v-subheader>
          </v-col>
          <v-col cols="7" class="d-flex pa-0">
            <v-checkbox
              v-model="language"
              label="Cantonese"
              color="#00BFA5"
              value="Cantonese"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="language"
              label="English"
              color="#00BFA5"
              value="English"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="language"
              label="Mandarian"
              color="#00BFA5"
              value="Mandarian"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
</template>
<script>
export default {
  data() {
    return {
      language: ["Cantonese", "English"]
    }
  },
}
</script>
<style scoped>
.required:after {
  content: " *";
  margin: 1px;
  color: red;
}
::v-deep .v-input--selection-controls__input {
  margin-right: 0px !important;
}
::v-deep .v-input--selection-controls {
  margin-right: 8px !important;
}
::v-deep .theme--light.v-subheader {
  color: rgb(154 154 154);
}
::v-deep .theme--light.v-label {
  color: black;
}
</style>