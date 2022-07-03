<template>
  <article class="activity d-flex flex-column overflow-hidden" :style="{ color: activity.color }">
    <figure class="activity__icon d-flex align-items-center justify-content-end overflow-hidden">
      <img :src="imagePath" :alt="activity.title">
    </figure>

    <div class="activity__content d-flex flex-column justify-content-between">

      <div class="activity__titlebox">
        <h4 class="activity__name">
          {{ activity.title }}
        </h4>

        <span class="activity__dots"></span>
      </div>

      <h1 class="activity__currentvalue">
        {{ currentValue }}hrs
      </h1>

      <div class="activity__previousdata">
        Last {{ periodType }} - {{ previousValue }}hrs
      </div>

    </div>
  </article>
</template>

<script>
export default {
  name: "Activity",

  props: {
    activity: {
      type: Object,
      required: true
    }
  },

  computed: {
    imagePath () {
      const title = this.activity.title
        .toLocaleLowerCase()
        .replace(/\s+/, '-');

      return require(`@/../public/images/icon-${title}.svg`);
    },

    currentValue () {
      return '0';
    },

    periodType () {
      return 'Week';
    },

    previousValue () {
      return '10'
    }
  }
}
</script>

<style lang="scss" scoped>
  .activity {
    color: #fff;
    border-radius: 10px;
    background-color: currentColor;

    max-width: 250px;
    flex: 1 0 100%;
    aspect-ratio: 1 / .94;

    &__icon {
      height: 45px;
      padding-inline: 20px;

      img {
        width: 45px;
        object-fit: contain;
        transform: scale(1.4);
      }
    }

    &__content {
      color: #fff;

      flex: 1;
      padding: var(--gap);
      background-color: var(--dark-blue);
      border-radius: 10px;
    }

    &__name {
      font: 500 1rem "Rubik", sans-serif;
    }

    &__currentvalue {
      margin-top: auto;
      font: 300 3.5rem "Rubik", sans-serif;
    }

    &__previousdata {
      margin-top: 5px;
      color: var(--pale-blue);
      font: 400 .9175rem "Rubik", sans-serif;
    }
  }
</style>