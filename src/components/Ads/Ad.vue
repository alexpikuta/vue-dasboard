<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
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
            <ad-edit-modal v-if="isOwner" :ad="ad"></ad-edit-modal>
            <buy-modal :ad="ad"></buy-modal>
          </v-card-actions>
        </v-card>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EditAdModal from './EditAdModal'
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      },
      loading () {
        return this.$store.getters.loading
      },
      isOwner () {
        if (this.$store.getters.user) {
          return this.ad.ownerId === this.$store.getters.user.id
        } else {
          return false
        }
      }
    },
    components: {
      adEditModal: EditAdModal
    }
  }
</script>