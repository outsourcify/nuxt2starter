<template>
  <div class="paginator">
    <div class="paginator-content">
      <slot>
        <a-empty />
      </slot>
    </div>

    <div class="paginator-bottom">
      <div class="flex">
        <div class="w-1/3">
          <a-select
            v-model="pagination.pageSize"
            class="select-page-size"
            :disabled="pagination.total == 0"
            @change="handlePageSizeChange"
          >
            <a-select-option
              v-for="(option, index) in pagination.pageSizeOptions"
              :key="index"
              :value="option"
            >
              {{ option }} Per page
            </a-select-option>
          </a-select>
        </div>
        <div class="w-2/3">
          <ul class="pagination">
            <li class="pagination-total-text">
              {{ totalText }}
            </li>
            <li
              class="no-margin arrow-double-prev"
              :class="{ disabled: isFirstPage || total == 0 }"
              @click="gotoFirstPage"
            >
              <i class="icon icon-double-arrow-left"></i>
            </li>
            <li class="no-margin">
              <a-pagination
                v-model="pagination.current"
                :total="pagination.total"
                :page-size="pagination.pageSize"
                :show-total="showTotal"
                show-less-items
                @change="handlePageChange"
              />
            </li>
            <li
              class="no-margin arrow-double-next"
              :class="{ disabled: isLastPage || total == 0 }"
              @click="gotoLastPage"
            >
              <i class="icon icon-double-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefaultPagination } from '@/assets/js/pagination.js'
const { current, pageSize, pageSizeOptions } = getDefaultPagination()

export default {
  props: {
    current: {
      type: Number,
      default: current,
    },
    pageSize: {
      type: Number,
      default: pageSize,
    },
    pageSizeOptions: {
      type: Array,
      default() {
        return pageSizeOptions
      },
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      // Pass initial prop directly to the data for use v-model.
      pagination: {
        current: this.current,
        pageSize: this.pageSize,
        pageSizeOptions: this.pageSizeOptions,
        total: this.total,
      },
      totalText: '',
    }
  },

  computed: {
    isFirstPage() {
      return this.pagination.current === 1
    },
    isLastPage() {
      const { pageSize, total } = this.pagination
      return this.pagination.current === Math.ceil(total / pageSize)
    },
  },

  watch: {
    current: {
      handler(value) {
        this.pagination.current = value
      },
      immediate: true,
    },
    pageSize: {
      handler(value) {
        this.pagination.pageSize = value
      },
      immediate: true,
    },
    pageSizeOptions: {
      handler(value) {
        this.pagination.pageSizeOptions = value
      },
      immediate: true,
    },
    total: {
      handler(value) {
        this.pagination.total = value
      },
      immediate: true,
    },
  },

  methods: {
    /**
     * Pagination change
     *
     * @param {Integer} current current page
     * @param {Integer} pageSize item per page
     */
    handlePageChange(current, pageSize) {
      this.$emit('change', this.pagination)
    },

    /**
     * Page size change
     *
     * @param {Integer} pageSize item per page
     */
    handlePageSizeChange(pageSize) {
      const { current, total } = this.pagination

      if (pageSize * current >= total) {
        this.pagination.current = Math.ceil(total / pageSize)
      }

      this.$emit('change', this.pagination)
    },

    /**
     * Hook show-total of a-pagination to display the total number and range
     */
    showTotal(total, range) {
      const totalText = `${range[0]}-${range[1]} of ${total}`
      this.totalText = totalText
      return false
    },

    /**
     * Handle click double arrow
     */
    gotoFirstPage() {
      this.pagination.current = 1
      this.$emit('change', this.pagination)
    },

    /**
     * Handle click double arrow
     */
    gotoLastPage() {
      const { pageSize, total } = this.pagination
      this.pagination.current = Math.ceil(total / pageSize)
      this.$emit('change', this.pagination)
    },
  },
}
</script>
