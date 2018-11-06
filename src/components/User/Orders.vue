<template>
  <v-container>
    <v-layout row>
      <v-flex v-if="loading">
        <div>
          <v-container>
            <v-layout row>
              <v-flex xs12 class="text-xs-center pt-5">
                  <v-progress-circular
                    :size="150"
                    :width="10"
                    color="primary"
                    indeterminate
                  ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                :disabled="order.done"
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
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" v-else>
        <h1>You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        chB: true
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
      }
    },
    created () {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>