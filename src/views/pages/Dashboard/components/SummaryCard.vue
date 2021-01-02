<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-card
        elevation="4"
      >

      <v-card-text>
        Total Sales
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey lighten-1" class="pa-0 ma-0" size="16">
                mdi-help-circle
              </v-icon>
            </v-btn>
          </template>
          <span>Total Sales In Last Week</span>
        </v-tooltip>
      </v-card-text>
      <v-card-title>RP 15.000.000</v-card-title>
      <v-card-subtitle class="success--text">+12% from last week</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card
        elevation="4"
      >

      <v-card-text>
        Total Transaction
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey lighten-1" class="pa-0 ma-0" size="16">
                mdi-help-circle
              </v-icon>
            </v-btn>
          </template>
          <span>Total Transaction In Last Week</span>
        </v-tooltip>
      </v-card-text>
      <v-card-title>6000</v-card-title>
      <v-card-subtitle class="success--text">+12% from last week</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card
        elevation="4"
      >

      <v-card-text>
        Total Visitors
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey lighten-1" class="pa-0 ma-0" size="16">
                mdi-help-circle
              </v-icon>
            </v-btn>
          </template>
          <span>Total Visitors In Last Week</span>
        </v-tooltip>
      </v-card-text>
      <v-card-title>7.000</v-card-title>
      <v-card-subtitle class="success--text">+12% from last week</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card
        elevation="4"
      >

      <v-card-text>
        New Customer
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey lighten-1" class="pa-0 ma-0" size="16">
                mdi-help-circle
              </v-icon>
            </v-btn>
          </template>
          <span>New Customer In Last Week</span>
        </v-tooltip>
      </v-card-text>
      <v-card-title>150</v-card-title>
      <v-card-subtitle class="success--text">+12% from last week</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
