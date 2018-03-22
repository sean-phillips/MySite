<template>

  <b-jumbotron>
    <template slot="header">
      <h1>{{ msg }}</h1>
    </template>
    <template slot="lead">
      Feel free to drop me a message.
    </template>
    <b-button type="submit" @click="toggleShow" variant="primary">Show Form</b-button>

    <hr class="my-4">


    <b-form @submit="onSubmit" v-if="show">


      <b-form-group id="enterNameGroup"
                    label="Name:"
                    label-for="enterName1">
        <b-form-input id="enterName1"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>


      <b-form-group id="enterEmailGroup"
                    label="Email:"
                    label-for="enterEmail1">
        <b-form-input id="enterEmail1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>


      <b-form-group id="enterMessageGroup"
                    label="Message:"
                    label-for="enterMessage1">
        <b-form-textarea id="enterMessage1"
                      type="text"
                      class="form-control"
                      v-model="form.formText"
                      required
                      placeholder="Enter message"
                      :rows="3"
                      :max-rows="6">
        </b-form-textarea>
      </b-form-group>


      <b-button type="submit" variant="primary" :disabled="!isComplete">Submit</b-button>
    </b-form>

  </b-jumbotron>


</template>

<script>
  export default {
    name: "contact",
    data() {
      return {
        msg: 'Contact',
        form: {
          email: '',
          name: '',
          formText: '',
        },
        show: false,
        disableButton: true,
      }
    },
    methods: {
      onSubmit() {
        alert(JSON.stringify(this.form));
      },
      toggleShow() {
        if (this.show === false) {
          this.show = true;
        } else if (this.show === true) {
          this.show = false;
        }
      },
    },
    computed: {
      isComplete() {
        return this.form.email.length > 0 && this.form.name.length > 0 && this.form.formText.length > 0;
      },
    }
  }
</script>

<style scoped>


</style>
