<template>
  <div id="app">

    <v-app v-if="!loggedIn">

      <main>
        <v-container fill-height>
          <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
              <login-signup @loginAction="loggedIn = $event" @adminAction="isAdmin = $event"></login-signup>
            </v-flex>
          </v-layout>
        </v-container>
      </main>

    </v-app>

    <v-app v-else-if="loggedIn && !isAdmin">

      <app-bar @logout="loggedIn = $event"></app-bar>

      <user @logout="loggedIn = $event"></user>

    </v-app>

    <v-app v-else-if="loggedIn && isAdmin">

      <admin-console></admin-console>

    </v-app>

  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import LoginSignup from "./components/LoginSignup.vue";
import Admin from "./components/Admin.vue";
import admintest from "./components/admintest.vue";
import user from "./components/user/user.vue";
export default {
  data() {
    return {
      loggedIn: false,
      isAdmin: null
    };
  },
  methods: {},
  components: {
    "app-bar": AppBar,
    "login-signup": LoginSignup,
    "admin-console": admintest,
    user: user
  }
};
</script>

<style>
#toolBar,
#logoutBtn,
#editBtn {
  height: 90px;
}

.newColor {
  background-color: #3B5998;
}

.toolBarItem {
  height: 90px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-active {
  transition: all 0s ease;
  opacity: 1;
}

.fade-full-enter-active {
  transition: all 0.25s;
}

.fade-full-enter {
  opacity: 0;
}

.fade-full-leave-active {
  transition: all 0.25s;
  opacity: 0;
}
</style>
