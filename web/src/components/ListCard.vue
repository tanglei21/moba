<template>
  <m-card :icon='icon'
          :title="title">
    <div class="nav jc-between">
      <div class="nav-item"
           :class="{active:active===index}"
           v-for="(cate,index) in categories"
           :key="index"
           @click="active=index">
        <div class="nav-link">{{cate.name}}</div>
      </div>
    </div>
    <div class="pt-2">
      <swiper>
        <swiper-slide v-for="(cate,index) in categories"
                      :key="index">
          <slot name="items"
                :category="cate"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>