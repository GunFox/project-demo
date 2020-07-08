<template>
  <div id="previewBox" class="previewStyle" />
</template>

<script>
export default {
  props: {
    url: String
  },
  mounted() {
    this.showIframe(this.url)
  },
  methods: {
    showIframe(url) {
      $("<div id='showMobilePreview'>" +
          "<div class='mobile_preview_header'><i class='mobile_preview_header_icon'></i></div>" +
          "<div class='mobile_preview_frame'><object id='YuFrameMobilePreview' name='YuFrameMobilePreview' ></object></div>" +
          "<div class='mobile_preview_footer'><i class='mobile_preview_footer_icon'></i></div>" +
        '</div>').prependTo('#previewBox')

      $('#YuFrameMobilePreview').attr('data', url)
      // 添加背景遮罩
      $("<div id='YuFrameMobilePreviewBg' style='cursor:pointer;width:100%;height:100%;background-color: Gray;display:block;z-index:9998;position:absolute;left:0px;top:0px;filter:Alpha(Opacity=30);/* IE */-moz-opacity:0.4;/* Moz + FF */opacity: 0.4; '/>").prependTo('#previewBox')

      // 点击背景遮罩移除iframe和背景
      // $('#YuFrameMobilePreviewBg').click(function() {
      //   $('#showMobilePreview').remove()
      //   $('#YuFrameMobilePreviewBg').remove()
      // })
    }
  }
}
</script>

<style lang="less">
.previewStyle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
#showMobilePreview {
  z-index: 9999;
  width: 391px;
  height: 768px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  text-align: center;
  box-sizing: content-box;
}

.mobile_preview_header {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 387px;
  background: #eeeff2;
  text-align: center;
  line-height: 40px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
}

.mobile_preview_header_icon {
  display: inline-block;
  width: 65px;
  height: 10px;
  background: #c8c9cc;
  border-radius: 9px;
  vertical-align: middle;
  margin-top: 18px;
}

.mobile_preview_frame {
  width: 375px;
  min-height: 294px;
  height: 667px;
  max-height: calc(100vh - 166px);
  top: 40px;
  left: 0;
  border: 6px solid #eeeff2;
  position: relative;
  background-color: #fff;
  display: block;
}

#YuFrameMobilePreview {
  border: none;
  width: 375px;
  height: 100%;
}

.mobile_preview_footer {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 52px;
  width: 387px;
  background: #eeeff2;
  text-align: center;
  line-height: 45px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

.mobile_preview_footer_icon {
  display: inline-block;
  width: 43px;
  height: 43px;
  background: #c8c9cc;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
