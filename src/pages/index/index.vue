<template>
  <view class="content">
    <view></view>
  </view>
</template>

<script>
import { isLogin } from '../../lib/utils'

export default {
  data() {
    return {}
  },
  onLoad() {
    const loginFlag = isLogin()

    if (!loginFlag) {
      uni.redirectTo({
        url: '/pages/guide/index'
      })
    }
  },
  methods: {}
}
</script>

<style></style>
