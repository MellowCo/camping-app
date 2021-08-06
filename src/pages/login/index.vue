<template>
  <view>
    <image :src="logoImg" class="logo"></image>

    <view class="login-box">
      <view class="login-label">Email</view>

      <view class="login-input">
        <input v-model="account" type="text" />
      </view>

      <view class="login-label">Password</view>

      <view class="login-input" :class="{ error: pwdError }">
        <input v-model="pwd" type="password" @focus="pwdError = false" />
      </view>
      <view v-if="pwdError" class="password-error-desc"
        >!Wrong password please try again.</view
      >
    </view>

    <view class="login-forgot-desc">Forgot Password?</view>

    <view class="btns">
      <view class="login-btn btn" @click="handleLogin">Log In</view>
      <view class="register-btn btn">Register</view>
    </view>
  </view>
</template>

<script>
import { logoImg } from '../../constant/img'

const _pwd = 'aaaaaa'

export default {
  data() {
    return {
      logoImg,
      account: '',
      pwd: '',
      pwdError: false
    }
  },
  methods: {
    handleLogin() {
      if (this.pwd !== _pwd) {
        this.pwdError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  margin: 192rpx auto 0;
  width: 590rpx;
  height: 126rpx;
}

.login-box {
  margin: 120rpx 78rpx auto;

  .login-label {
    line-height: 48rpx;
    font-size: 32rpx;
    color: #71717a;
  }

  .login-input {
    box-sizing: border-box;
    margin: 14rpx 0 38rpx;
    padding: 24rpx 32rpx;
    border-radius: 26rpx;
    height: 96rpx;
    background-color: #fafafa;
    color: #3f3f46;

    &.error {
      border: 2rpx $error-color solid;
    }
  }

  .password-error-desc {
    margin-top: -24rpx;
    line-height: 24rpx;
    text-align: right;
    font-size: 24rpx;
    color: $error-color;
  }
}

.login-forgot-desc {
  margin-bottom: 48rpx;
  line-height: 48rpx;
  text-align: center;
  font-size: 32rpx;
  color: #a1a1aa;
}

.btns {
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 26rpx;
    width: 590rpx;
    height: 88rpx;
    font-size: 28rpx;
  }

  .login-btn {
    margin-bottom: 40rpx;
    background-color: $theme-color;
    box-shadow: 0 20rpx 40rpx rgba(132, 204, 22, .2);
    color: white ;
  }

  .register-btn {
    border: 2rpx $theme-color solid;
    color: $theme-color;
  }
}
</style>