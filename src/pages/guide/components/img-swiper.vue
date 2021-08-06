<template>
  <view class="guide-content">
    <swiper
      style="height: 924rpx"
      :current="currentIndex"
      @change="handleChange"
    >
      <swiper-item v-for="(info, index) in swiperInfo" :key="index">
        <img class="guide-img" :src="info.img" alt="" />
        <view class="guide-title">{{ info.title }}</view>
        <view class="guide-desc">{{ info.desc }}</view>
      </swiper-item>
    </swiper>

    <view class="guide-move">
      <view
        class="guide-move-box guide-move-left"
        :class="{ isHide: currentIndex === 0 }"
        @click="handleLeft"
      >
        <img class="guide-arrow" :src="guideImgs[4]" alt="" />
      </view>

      <view class="guide-move-dot-group">
        <view
          v-for="i in 4"
          :key="i"
          :class="{ isSee: currentIndex > i, active: currentIndex === i }"
          class="guide-dot"
        ></view>
        <!-- <view class="guide-dot active"></view>
        <view class="guide-dot"></view>
        <view class="guide-dot"></view> -->
      </view>

      <view
        class="guide-move-box guide-move-right"
        :class="{ isHide: currentIndex === 3 }"
        @click="handleRight"
      >
        <img class="guide-arrow" :src="guideImgs[5]" alt="" />
      </view>
    </view>

    <view class="guide-log-in">Log in</view>

    <view class="guide-tip">Don’t have an Account? Register</view>
  </view>
</template>

<script>
import { guideImgs } from '../../../constant/img'

export default {
  data() {
    return {
      guideImgs,
      swiperInfo: [
        {
          img: guideImgs[0],
          title: 'Your Tasks',
          desc: 'I always reminds you about your planned activities. which is always mypriority and your importance.'
        },
        {
          img: guideImgs[1],
          title: 'Capture Your Memories',
          desc: 'We know that catching photos are necessary in your trip. that’s why we have built-in camera and gallery feature.'
        },
        {
          img: guideImgs[2],
          title: 'Track Your Fitness',
          desc: 'Fitness is one of the main thing which is really inportant to your body and we track it in every second.'
        },
        {
          img: guideImgs[3],
          title: 'There Is Much More',
          desc: 'We have bunch of other cool features. which is super helpful for your next camping trip. so what are you waiting for?'
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    handleRight() {
      this.currentIndex++
    },
    handleLeft() {
      this.currentIndex--
    },
    handleChange(e) {
      const { current } = e.detail
      this.currentIndex = current
    }
  }
}
</script>

<style lang="scss" scoped>
.guide-content {
  height: 1624rpx;
}

.guide-img {
  display: block;
  margin: 164rpx auto 0;
  width: 496rpx;
  height: 454rpx;
}

.guide-title {
  margin-top: 80rpx;
  line-height: 1;
  text-align: center;
  font-size: 64rpx;
}

.guide-desc {
  margin: 16rpx auto 0;
  width: 670rpx;
  line-height: 48rpx;
  text-align: center;
  font-size: 32rpx;
  color: #3f3f46;
}

.guide-log-in {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48rpx auto 0;
  border-radius: 20rpx;
  width: 670rpx;
  height: 88rpx;
  background-color: $theme-color;
  box-shadow: 0 20rpx 40rpx rgba(132, 204, 22, .15);
  line-height: 42rpx;
  font-size: 28rpx;
  color: white;
}

.guide-tip {
  margin-top: 32rpx;
  text-align: center;
  font-size: 32rpx;
  color: #18181b;
}

.guide-move {
  display: flex;
  justify-content: space-between;
  margin: 64rpx 40rpx 0;


  &-dot-group {
    display: flex;
    justify-content: center;
    align-items: center;

    .guide-dot {
      margin-right: 32rpx;
      border-radius: 30rpx;
      width: 16rpx;
      height: 16rpx;
      background-color: #f4f4f5;

      &.isSee {
        background-color: #d9f99d;
      }

      &.active {
        position: relative;
        background-color: $theme-color;

        &::after {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 4rpx $theme-color solid;
          border-radius: 50rpx;
          width: 32rpx;
          height: 32rpx;
          content: "";
          transform: translateY(-50%) translateX(-50%);
        }
      }
    }
  }

  &-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25rpx;
    width: 80rpx;
    height: 80rpx;

    .guide-arrow {
      display: block;
      width: 32rpx;
      height: 28rpx;
    }


    &.guide-move-left {
      background-color: #ecfccb;
    }

    &.guide-move-right {
      background-color: #365314;
    }
  }
}

.isHide {
  visibility: hidden;
}
</style>
