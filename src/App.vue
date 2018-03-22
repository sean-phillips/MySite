<template>
  <div id="" class="container-fluid">

    <b-navbar id='navnav' text-white toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link class="navBarLinks" :to="{ name: 'Home' }">My Site</router-link>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="navBarLinks">
          <b-nav-item>
            <router-link class="navBarLinks" :to="{ name: 'About' }">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="navBarLinks" :to="{ name: 'Resume' }">Resume</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="navBarLinks" :to="{ name: 'DeeThree' }">D3</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="navBarLinks" :to="{ name: 'Contact' }">Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>


      </b-collapse>
    </b-navbar>

    <router-view/>


  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #jumboTron {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    /*margin-top: 60px;*/
  }

  .navBarLinks {
    color: white;
  }

  .navBarLinks:hover {
    color: #8ac2fa;
  }



</style>
