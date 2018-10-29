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
          @click="triggerUpload"
        >
          Upload
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        <input
          type="file"
          style="display: none"
          accept="image/*"
          ref="fileInput"
          @change="onFileChange"
        >
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex xs12 sm8 offset-sm2>
        <img
          :src="imageSrc"
          height="120"
          v-if="imageSrc"
        >
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
          :disabled="!valid || !image || loading"
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
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>