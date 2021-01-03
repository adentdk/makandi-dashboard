<template>
  <v-row class="mt-10">
    <v-col>
      <v-card>
        <v-card-title>Top 10 Spending Users</v-card-title>

        <v-list dense v-for="(item, i) in topSpendingUser" :key="i">
          <v-list-item>
            <v-list-item-content class="mr-5">
              <v-list-item-title>{{item.name}}</v-list-item-title>
              <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>{{item.orderCount}}</v-list-item-title>
              <v-list-item-subtitle>Orders</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>{{item.amountSpent}}</v-list-item-title>
              <v-list-item-subtitle>Spendings</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="i !== topSpendingUser.length - 1"></v-divider>
        </v-list>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>Top 10 Best Selling Branches</v-card-title>

         <v-list dense v-for="(item, i) in topBranches" :key="i">
          <v-list-item>
            <v-list-item-content class="mr-5">
              <v-list-item-title>{{item.name}}</v-list-item-title>
              <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>{{item.orderCount}}</v-list-item-title>
              <v-list-item-subtitle>Orders</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>{{item.sales}}</v-list-item-title>
              <v-list-item-subtitle>Sales</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="i !== topBranches.length - 1"></v-divider>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TableViewDashboard',
  data () {
    return {
      topSpendingUser: [
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        },
        {
          name: 'Raden Kian Santang',
          email: 'kian@gmail.com',
          orderCount: 5,
          amountSpent: 'RP 12.000.000'
        }
      ],
      topBranches: [
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        },
        {
          name: 'Dago Timur',
          email: 'dagotimur@gmail.com',
          orderCount: 200,
          sales: 'RP 36.000.000'
        }
      ]
    }
  }
}
</script>
