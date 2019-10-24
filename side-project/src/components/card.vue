<template>
  <div class="card">
    <div class="card_title">
        卡片標題
    </div>
    <div class="card_body">
        卡片內容
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .card {
        width: 300px;
        margin: 10px;
        background: white;
        border: 1px solid #cccccc;
        border-radius: 6px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
    }
    .card_title {
        padding: 16px;
        border-bottom: 1px solid #cccccc;
        color: black;
        font-size: 20px;
        line-height: 26px;
        font-weight: bold;
    }
    .card_body {
        padding: 16px;
        color: #555555;
        font-size: 16px;
        line-height: 22px;
    }
</style>