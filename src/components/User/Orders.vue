<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                :disabled="!chB"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile>
              <v-btn
                class="primary"
                :to="'/ad/' + order.adId"
              >Open</v-btn>
            </v-list-tile>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        chB: true,
        orders: [
          {
            id: 'qw2',
            name: 'Jhon Doe',
            phone: '937-99-92',
            adId: '3',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
        this.chB = false
        console.log(333)
      }
    }
  }
</script>