<template>
  <v-app>
    <v-main>
      <v-subheader class="font-weight-bold">Shift template 1</v-subheader>
      <v-row>
        <v-col cols="12" md="7">
          <LeftSide />
        </v-col>
        <v-col cols="12" md="5">
          <RightSide />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default {
  name: "App",

  components: {
    LeftSide,
    RightSide
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
::v-deep .v-label {
    font-size: 12px !important;
}
::v-deep .v-text-field--outlined fieldset {
    border: 2px solid #c5c5c5 !important;
}
.v-row{
  height: 100%;
}
</style>
