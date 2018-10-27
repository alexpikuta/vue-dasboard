<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h1 class="text--secondary mb-3">NewAd</h1>
        <v-form ref="form" v-model="valid" validation>
              <v-text-field
                name="title"
                label="Ad Title"
                type="text"
                :rules="[v => !!v || 'Title is required']"
                required
                v-model="title"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Ad description"
                type="text"
                :rules="[v => !!v || 'Description is required']"
                v-model="description"
                required
                multi-line
              ></v-textarea>
            </v-form>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-btn
          color="blue-grey"
          class="warning"
        >
          Upload
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex xs12 sm8 offset-sm2>
        <img src="" height="120">
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex xs12 sm8 offset-sm2>
        <v-switch
          label="Add to promo"
          v-model="promo"
        ></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-spacer></v-spacer>
        <v-btn
          :loading="loading"
          class="success"
          :disabled="!valid || loading"
          @click="createAd"
        >
          Create Ad
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg'
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
        }
      }
    }
  }
</script>