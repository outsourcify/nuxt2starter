<template>
  <a-layout id="layout-default" class="min-h-screen">
    <!-- Sider -->
    <a-layout-sider
      v-model="collapsed"
      :width="200"
      :trigger="null"
      collapsible
      class="fixed left-0 top-0 h-screen overflow-x-hidden overflow-y-auto"
    >
      <!-- Trigger -->
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="() => (collapsed = !collapsed)"
      />

      <NavigationMainMenu :sider-collapsed="collapsed" />
    </a-layout-sider>

    <!-- Layout -->
    <a-layout class="relative">
      <!-- Header -->
      <a-layout-header class="px-4 fixed flex items-center top-0 bg-white">
        <!-- Logo -->
        <GeneralLogo class="ml-2" />

        <!-- User profile -->
        <a-dropdown v-if="$auth.loggedIn">
          <a-button
            type="link"
            class="profile flex items-center ml-auto text-left"
          >
            <a-avatar size="large" icon="user" />
            <span
              class="
                ml-2
                w-28
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                text-gray-700
                leading-tight
              "
            >
              {{ $auth.user.fullname }}
              <br />
              <small class="text-gray-400">{{ $auth.user.email }}</small>
            </span>
          </a-button>

          <a-menu slot="overlay">
            <a-menu-item key="dashboard" class="text-sm">
              Your dashboard
            </a-menu-item>
            <a-menu-item key="profile" class="text-sm">
              Your profile
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="logout" class="text-sm">
              <a href="javascript:;" @click="logout"> Sign out </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>

      <!-- Main -->
      <a-layout-content class="my-6 mx-4 p-6 bg-white">
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  middleware: ['auth', 'authenticated'],

  data() {
    return {
      collapsed: false,
    }
  },

  head() {
    return {
      ...this.getHead(),
    }
  },

  methods: {
    logout() {
      this.$auth.logout('local')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>