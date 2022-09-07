<template>
  <a-menu
    id="main-menu"
    theme="dark"
    mode="inline"
    :selected-keys="selectedKeys"
    :open-keys.sync="openKeys"
    @click="onClickMenu"
  >
    <component
      :is="hasChildren(route) ? 'a-sub-menu' : 'a-menu-item'"
      v-for="route in routes"
      :key="route.key"
      :disabled="route.disabled"
    >
      <!-- Single Menu -->
      <template v-if="!hasChildren(route)">
        <a-icon v-if="route.icon" :type="route.icon" class="align-middle" />
        <span>
          {{ route.label }}
        </span>
      </template>

      <!-- Menu + Submenu -->
      <template v-else>
        <span slot="title">
          <a-icon v-if="route.icon" :type="route.icon" class="align-middle" />
          <span>
            {{ route.label }}
          </span>
        </span>

        <a-menu-item
          v-for="child in route.children"
          :key="child.key"
          :style="child.style"
          :disabled="child.disabled"
        >
          {{ child.label }}
        </a-menu-item>
      </template>
    </component>
  </a-menu>
</template>

<script>
import routes from '@/assets/js/routes.js'

export default {
  props: {
    siderCollapsed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      openKeys: [],
    }
  },

  computed: {
    routes() {
      // TODO: load menu by user role
      return routes.ADMIN_USER_ROLE
    },

    selectedKeys() {
      const routeName = this.getRealRouteName()
      if (routeName === 'index') {
        return ['dashboard']
      }

      // check matched with key
      const matched = this.routes.find((a) => {
        const matchSelf = a.key === routeName
        const matchChild = a.children?.some((c) => {
          return c.key === routeName
        })
        return matchSelf || matchChild
      })

      // get child keys from matched
      let childKeys = ''
      if (matched) {
        const currentChild = matched.children?.find((c) => {
          return c.key === routeName
        })
        childKeys = currentChild?.key
      }

      const list = matched ? [matched.key, childKeys] : [routeName]

      return list.filter((l) => !!l)
    },
  },

  watch: {
    $route: {
      handler() {
        // Check open keys
        this.checkOpenKeys()
      },
      // the callback will be called immediately after the start of the observation
      immediate: true,
    },
    siderCollapsed: {
      handler(val) {
        if (val) this.openKeys = []
      },
      // the callback will be called immediately after the start of the observation
      immediate: true,
    },
  },

  methods: {
    // check menu has children
    hasChildren({ children }) {
      return children && children.length > 0
    },

    // check open menu submenu
    checkOpenKeys() {
      if (this.siderCollapsed) {
        this.openKeys = []
        return
      }

      const routeName = this.getRealRouteName()

      const matched = this.routes.find((a) => {
        const matchSelf = a.key === routeName
        const matchChild = a.children?.some((c) => {
          return c.key === routeName
        })
        return matchSelf || matchChild
      })

      this.openKeys = matched ? [matched.key] : []
    },

    // handle click menu
    onClickMenu({ key }) {
      this.$router.push({ name: key })
    },
  },
}
</script>
