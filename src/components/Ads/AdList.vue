<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card
          v-for="ad in ads"
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
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            description: 'Some short description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '2'
          },
          {
            title: 'Second ad',
            description: 'Some short description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '4'
          }
        ]
      }
    }
  }
</script>