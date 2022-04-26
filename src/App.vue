<template>
  <CustomNavbar />

  <HomeSection />
</template>

<script>
import CustomNavbar from "./components/CustomNavbar.vue";
import HomeSection from "./components/HomeSection.vue";

export default {
  name: "App",
  components: {
    CustomNavbar,
    HomeSection,
  },
};
</script>
