<template>
  <div class="hello">
    <b-jumbotron>
      <template slot="header">
        <h1>{{ msg }}</h1>
      </template>
      <template slot="lead">
        This is a simple site, but simple is good.
      </template>
      <hr class="my-4">
      <p>
        I can do a variety of things. Here are some of them.
      </p>

      <b-card-group deck>
        <b-card
                title="Marketing"
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top>
          <p class="card-text">Header and footers using props.</p>


        </b-card>
        <b-card
                title="Analytics"
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top>
          <p class="card-text">Header and footers using props.</p>


        </b-card>
        <b-card
                title="Programming"
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top>
          <p class="card-text">Header and footers using props.</p>


        </b-card>


      </b-card-group>


    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to My Website!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
