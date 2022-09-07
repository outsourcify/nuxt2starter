<template>
  <div>
    <a-page-header
      title="Dashboard"
      :breadcrumb="{ props: { routes: breadcrumb } }"
    />
  </div>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      breadcrumb: [
        {
          to: { name: 'index' },
          breadcrumbName: 'Dashboard',
        },
      ],
    }
  },
}
</script>
