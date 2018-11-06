<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card
          v-for="ad in myAds"
          :key="ad.id"
          class="elevation-8 mb-2"
        >
          <v-layout row>
            <v-flex xs4>
              <v-responsive>
                <v-img
                  :src="ad.imageSrc"
                  height="180"
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else-if="!loading && myAds.length === 0">
      <h2 class="text-xs-center">You have no ads</h2>
    </v-layout>
    <div v-else>
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
  </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>