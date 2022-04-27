<template>
  <nav class="navbar">
    <a class="logo" href="#">
      <img
        class="logo__image"
        :src="require(`@/assets/logo.svg`)"
        alt="logo com o nome be event"
      />
    </a>

    <div class="links">
      <div class="navigation">
        <a href="#" class="navigation__link navigation__link--active">Home</a>
        <a href="#" class="navigation__link">About</a>
        <a href="#" class="navigation__link">Offer</a>
        <a href="#" class="navigation__link">Events</a>
        <a href="#" class="navigation__link">Contact</a>
      </div>

      <div class="call-to-action">
        <a class="call-to-action__button" href="#">Call us</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  max-width: 1260px;
  height: 6rem;

  margin: 0 auto;

  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99999;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    font-weight: 500;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;

    &__link {
      width: 4rem;
      height: 3rem;

      line-height: 3rem;

      color: var(--color-white);

      transition: 0.3s;

      &--active,
      &:hover {
        color: var(--color-red);

        position: relative;

        &:after {
          content: "";

          display: block;

          position: absolute;
          bottom: 0;

          width: 100%;
          height: 4px;

          background: var(--color-red);
        }
      }
    }
  }

  .call-to-action {
    &__button {
      width: 6rem;
      height: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--color-red);
      color: var(--color-white);

      font-weight: 500;

      border-radius: 20px;

      transition: 0.3s;

      &:hover {
        background: var(--color-white);
        color: var(--color-red);
      }
    }
  }
}
</style>
