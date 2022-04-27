<template>
  <section class="home">
    <div class="wrapper">
      <div class="texts">
        <span class="texts__cursive">Time to party</span>

        <h1 class="texts__title">
          Organization <span class="texts__key">of</span> company
          <span class="texts__red">events</span>
        </h1>

        <p class="texts__paragraph">
          Erat scelerisque lobortis nisl sed elementum massa. Et eu viverra
          nisi, adipiscing mauris. Pulvinar phasellus mattis pellentesque.
        </p>

        <div class="buttons">
          <a href="#" class="buttons__call-to-action">
            Book event
            <ac-icon solid>right-long</ac-icon>
          </a>

          <a
            href="#"
            class="buttons__call-to-action buttons__call-to-action--transparent"
          >
            See events
            <ac-icon solid>right-long</ac-icon>
          </a>
        </div>

        <img
          class="texts__spinner"
          :src="require(`@/assets/spinner.svg`)"
          alt="spinner icon"
        />
      </div>

      <div class="promo-video">
        <a href="#" class="promo-video__button">
          <img
            class="promo-video__play"
            :src="require(`@/assets/play-icon.svg`)"
            alt="play icon"
          />
          See promotion video
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  max-height: 60rem;
  height: 140vh;

  background: url("@/assets/home-bg.svg") no-repeat left;
}

.wrapper {
  max-width: 1260px;
  height: 100%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .texts {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;

    padding-right: 3rem;
    padding-left: 2.5rem;

    position: relative;

    &__cursive {
      font-family: "Dancing Script", cursive;
      font-size: 1.875rem;

      display: flex;
      align-items: center;
      gap: 0.6rem;

      &:before {
        content: "";

        display: block;

        width: 0.8rem;
        height: 0.8rem;

        border-radius: 4rem;

        background: var(--color-red);
      }
    }

    &__title {
      font-size: 4.75rem;

      display: flex;
      align-items: center;
      flex-wrap: wrap;

      margin-right: 5rem;
    }

    &__paragraph {
      font-family: "Roboto", sans-serif;
      font-size: 1.1875rem;
    }

    &__key {
      font-size: 1.6rem;

      color: var(--color-red);

      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;

      padding: 0.5rem 0.6rem;
      margin-right: 1rem;

      transform: translateY(0.4rem);
    }

    &__red {
      color: var(--color-red);
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      margin-top: 1.5rem;

      &__call-to-action {
        background: var(--color-red);
        color: var(--color-white);

        text-decoration: none;
        font-weight: 600;
        font-size: 0.925rem;

        padding: 0.7rem 2rem;

        border-radius: 18px;

        transition: all 0.3s;

        svg {
          margin-left: 0.4rem;
        }

        &:hover {
          background: var(--color-white);
          color: var(--color-red);
        }

        &--transparent {
          background: transparent;
          color: var(--color-red);

          outline: 1px solid transparent;

          svg {
            fill: var(--color-red);
          }

          &:hover {
            outline-color: var(--color-red);
            background: transparent;
          }
        }
      }
    }

    &__spinner {
      width: 2.5rem;
      height: 2.5rem;

      position: absolute;
      top: 8rem;
      right: -1.2rem;

      z-index: 9999;
    }
  }

  .promo-video {
    width: 51vw;

    background: url("@/assets/girl.webp") no-repeat center/cover;

    position: relative;

    border-radius: 0 0 30px 30px;

    &__button {
      background: var(--color-purple);
      color: var(--color-white);

      font-size: 0.925rem;
      font-weight: 500;
      line-height: 1.875rem;
      text-decoration: none;

      border-radius: 16px;

      padding: 1.5rem 1.875rem 1.5rem 5.3125rem;

      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;

      transition: all 0.3s;

      img {
        position: absolute;
        left: 1.5rem;
        top: 1.1rem;
      }

      &:hover {
        background: var(--color-red);
        color: var(--color-white);
      }
    }
  }
}
</style>
