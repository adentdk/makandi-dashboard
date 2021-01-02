<template>
  <v-row>
    <v-col cols="12" md="4">
      <h1 class="black--text">Store Overview</h1>
    </v-col>
    <v-col cols="12" md="8">
      <v-row justify="center">
        <v-col
          cols="6"
          sm="3"
        >
          <v-text-field
            label="Branch"
            required
            solo
            class="small"
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <v-text-field
            label="Start Date"
            required
            solo
            class="small"
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <v-text-field
            label="End Date"
            required
            solo
            class="small"
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
          sm="3"
        >
          <v-btn
            class="mt-1"
            color="primary"
            large
            block
          >
            Filter
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FilterFormDashboard'
}
</script>
