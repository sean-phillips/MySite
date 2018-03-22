<template>


  <b-container fluid>

    <b-row>
      <b-col cols="8">




      </b-col>
      <b-col cols="4">
        <div id="progress-bars" v-for="bar in bars" class="mb-1">
          <div class="">{{ bar.variant }}</div>
          <div class=" pt-1">
            <b-progress :value="bar.value"
                        :variant="bar.variant"
                        :key="bar.variant"
            ></b-progress>
          </div>
        </div>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
  export default {
    name: "resume",
    data() {
      return {
        max: 100,
        counter: 0,
        bars: [
          {variant: 'Excel', value: 0, finalVal: 100},
          {variant: 'Tableau', value: 0, finalVal: 95},
          {variant: 'Marketing', value: 0, finalVal: 95},
          {variant: 'Analytics', value: 0, finalVal: 85},
          {variant: 'SQL', value: 0, finalVal: 50},
          {variant: 'Python', value: 0, finalVal: 50},
          {variant: 'Javascript', value: 0, finalVal: 45},
        ]
      }
    },
    methods: {
      clicked() {
        this.counter = this.max;
        this.bars.forEach(bar => bar.value = 0);
        this.bars.forEach(bar => bar.value = bar.finalVal);
      }
    },
    mounted: function () {
      this.bars.forEach(bar => bar.value = bar.finalVal);
    },
    beforeMount: function () {
      this.bars.forEach(bar => bar.value = 0);
    },

  }


</script>

<style scoped>
  #bar-text {
    text-align: center;
    margin-bottom: 10px;
    color: white;
  }

  #progress-bars {
    text-align: right;
  }

</style>
