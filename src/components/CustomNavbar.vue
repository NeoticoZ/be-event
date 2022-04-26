<template>
  <nav class="navbar">
    <a class="logo" href="#">
      <img
        class="logo__image"
        src="@/assets/logo.svg"
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
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    font-weight: 600;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;

    &__link {
      width: 3.8rem;
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

      font-weight: 600;

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
