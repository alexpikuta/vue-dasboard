<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-responsive>
            <v-img
              :src="ad.imageSrc"
              height="300"
            ></v-img>
          </v-responsive>
          <v-card-text>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <h3 class="text--secondary">{{ ad.description }}</h3>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="warning"
              flat
            >Edit</v-btn>
            <v-btn
              class="success"
            >Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      }
    }
  }
</script>