<template>
  <div id="app">
    <h1 id="title">Sailor DB</h1>

    <div id="nav">
      <router-link to="/">Add Sailor</router-link> |
      <router-link to="/search">Search Sailor</router-link> |
      <router-link to="/all">All Sailors</router-link> |
      <router-link to="/delete">Delete Sailor</router-link> |
      <router-link to="/update">Update Sailor</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./settings";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  textarea,
  input {
    outline: none;
    box-shadow: none;
    appearance: none;
    border: none;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $light-color1;
  background: $dark-color1;

  #title {
    font-size: 3rem;
    color: $accent-color;
    padding-top: 1rem;
  }
}

#nav {
  padding: 1rem;

  a {
    font-weight: bold;
    color: $light-color0;
    text-decoration: none;

    &.router-link-exact-active {
      color: $accent-color;
      text-decoration: underline;
    }
  }
}
</style>
