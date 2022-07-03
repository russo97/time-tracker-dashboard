<template>
  <section class="mainreport">
    <div class="mainreport__wrapper w-100">

      <div class="mainreport__details d-flex">
        <div class="mainreport__upperpill w-100 d-flex align-items-center flex-md-column">
          <figure class="mainreport__pic d-block">
            <img
              class="w-100 h-100"
              src="@/../public/images/image-jeremy.png"
              alt="Jeremy">
          </figure>

          <div class="mainreport__text">
            <h4 class="mainreport__label">
              Report for
            </h4>

            <h2 class="mainreport__name">
              Jeremy Robson
            </h2>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "MainReport"
  }
</script>

<style lang="scss">
  .mainreport {
    width: 250px;
    max-height: 500px;
    margin-block: auto;
    align-self: stretch;

    &__upperpill {
      padding: var(--gap);
      background-color: var(--blue1);
    }

    &__pic {
      width: 70px;
      height: 70px;
      flex: 0 0 70px;

      border-radius: 50%;
      border: solid 2px #fff;
    }
  }
</style>