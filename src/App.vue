<template>
  <main id="app" class="main">
    <div class="main__wrapper d-flex h-100 align-items-center justify-content-center">
      <MainReport />

      <section class="main__activities w-100 d-flex">
        <Activity
            :activity="activity"
            :key="activity.title"
            v-for="activity in timeItems" />
      </section>
    </div>
  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import Activity from "@/components/Activity";
  import MainReport from "@/components/MainReport";

  export default {
    name: "App",

    components: {
      Activity,
      MainReport
    },

    methods: {
      ...mapActions([
        'setTimeItems'
      ])
    },

    computed: {
      ...mapState([
        'timeItems'
      ])
    },

    mounted () {
      this.setTimeItems();
    }
  }
</script>

<style lang="scss">
  .main {
    &__wrapper,
    &__activities {
      flex-wrap: wrap;
    }

    &__activities {
      gap: var(--gap);
      margin: var(--gap);
      max-width: 810px;
      justify-content: center;
    }
  }
</style>
