<template>
    <!-- https://blog.csdn.net/Lpandeng/article/details/88930795  vue 自定义指令  图片预览 -->
    <div>
        <!-- 默认scale ：1 ，opacity：0.5 -->
        <img alt="Vue logo" src="/static/img/products/xiaomi.jpg"  style="with:10%;" v-lpd-image>  
        <!-- 定义缩放倍数,背景透明度 -->
        <img alt="Vue logo" src="/static/img/products/ipad.jpg" v-lpd-image="{scale:'9.9',opacity:'0.1'}"> 
        111
    </div>
</template>

<script>
import lpdimage from 'lpd-image';
export default {
    
}
</script>


