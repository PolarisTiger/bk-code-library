<template>
  <div>
    <div id="qrcode" ref="qrcode" align="center"></div>
  </div>
</template>

<script>
// npm install qrcodejs2 --save
import QRCode from "qrcodejs2"
export default {
 mounted() {
   this.handelQrCode()
 },
 methods: {
  handelQrCode() {
    this.$refs.qrcode.innerHTML = "";
      this.qr = new QRCode("qrcode", {
        width: 300,
        height: 300,
        correctLevel: QRCode.CorrectLevel.Q, //这里默认
        text: 'www.baidu.com' //这里内容见下方
      });
  }
 }
}
</script>

<style>

</style>