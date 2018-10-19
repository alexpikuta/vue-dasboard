<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile @click="markDone">
            <v-list-tile-action>
              <v-checkbox v-model="chbChecked"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="chbChecked = !chbChecked">
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile>
              <v-btn class="primary" @click.stop="open">Open</v-btn>
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
        chbChecked: false
      }
    },
    methods: {
      markDone () {
        console.log(333)
      },
      open () {
        console.log(111111)
      }
    }
  }
</script>