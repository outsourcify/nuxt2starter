<template>
  <div
    class="
      relative
      flex flex-col
      items-center
      justify-center
      min-h-screen
      bg-gray-50
      overflow-hidden
    "
  >
    <GeneralCircle class="absolute -left-96 -top-10" />

    <a-card
      class="rounded-xl shadow-lg hover:shadow-md"
      :bordered="false"
      :body-style="{ padding: '40px 60px' }"
    >
      <div class="text-center">
        <GeneralLogo class="mb-6 text-8xl" />
      </div>

      <a-form :form="form" class="max-w-xs" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
            placeholder="Email"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            :type="showPassowrd ? 'text' : 'password'"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />

            <a-icon
              v-if="showPassowrd"
              slot="suffix"
              type="eye"
              class="cursor-pointer"
              style="color: rgba(0, 0, 0, 0.25)"
              @click="showPassowrd = false"
            />
            <a-icon
              v-else
              slot="suffix"
              type="eye-invisible"
              class="cursor-pointer"
              style="color: rgba(0, 0, 0, 0.25)"
              @click="showPassowrd = true"
            />
          </a-input>
        </a-form-item>
        <a-form-item class="mb-0">
          <a-button type="primary" html-type="submit" block :loading="busy">
            Sign in
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',

  layout: 'plain',

  middleware: ['notAuthenticated'],

  data() {
    return {
      busy: false,
      showPassowrd: false,
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.busy = true
          try {
            await this.$auth.loginWith('local', {
              data: values,
            })
            this.$router.push({ name: 'index' })
          } catch (err) {
            this.catchError(err)
          }
          this.busy = false
        }
      })
    },
  },
}
</script>
