<template>


  <b-jumbotron>
    <template slot="header">
      <h1>{{ msg }}</h1>
    </template>
    <template slot="lead">
      This is a simple hero unit, a simple jumbotron-style component for
      calling extra attention to featured content or information.
    </template>
    <hr class="my-4">
    <p>
      It uses utility classes for typography and spacing to space content
      out within the larger container.
    </p>
    <b-btn variant="secondary">
      <router-link class="navBarLinks" :to="{ name: 'Resume' }">Resume</router-link>
    </b-btn>
    <b-btn variant="secondary">
      <router-link class="navBarLinks" :to="{ name: 'Contact' }">Contact</router-link>
    </b-btn>
  </b-jumbotron>


</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        msg: 'Welcome to My About Page!'
      }
    },
  }
</script>

<style scoped>

</style>
