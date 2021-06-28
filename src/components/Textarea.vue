<template>
  <v-container fluid>
    <v-row align="center">
              <v-col cols="3" class="pa-0 mb-auto">
        <v-subheader class="">Care notes</v-subheader>
      </v-col>

      <v-col
        cols="9"
        class="pb-0 px-0"
      >
        <v-textarea
          dense outlined single-line color="grey lighten-2"
          name="input-7-4"
          label="Anything the caregiver should know about..."
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
::v-deep .theme--light.v-subheader {
  color: rgb(154 154 154);
}
::v-deep .v-text-field__slot{
    height: 80px;
}
</style>