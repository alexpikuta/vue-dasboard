<template>
  <v-dialog
    width="400"
    v-model="modal"
  >
    <v-btn
      class="warning"
      flat
      slot="activator"
    >Edit</v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit Ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                type="text"
                multi-line
                v-model="editedDescription"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                @click="onCancel"
              >
                Cancel
              </v-btn>
              <v-btn
                flat
                class="success"
                @click="onSave"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        editedTitle: this.ad.title,
        editedDescription: this.ad.description
      }
    },
    methods: {
      onCancel () {
        this.editedTitle = this.ad.title
        this.editedDescription = this.ad.description
        this.modal = false
      },
      onSave () {
        if (this.editedDescription !== '' && this.editedTitle !== '') {
          this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            description: this.editedDescription,
            id: this.ad.id
          })
          this.modal = false
        }
      }
    }
  }
</script>

<style scoped>
  button.warning {
    margin-right: 20px;
  }
</style>
