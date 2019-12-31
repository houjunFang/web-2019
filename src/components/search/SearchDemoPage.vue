<template>
    <div>
    <key-search></key-search>
    <br>
    <br>
    <k-line></k-line>
    <br>
    <br>
    <br>
    <test-line></test-line>
    <br>
    <br>
    <test-line2></test-line2>
    <br>
    <br>
    <k-line0></k-line0>
    <br>
    <br>
    图片缩图
    <picture-view></picture-view>
    </div>

</template>

<script>
import KeySearch from '@/components/search/KeySearch'
import KLine from '@/components/lines/KLine'
import TestLine from '@/components/lines/TestLine'
import TestLine2 from '@/components/lines/TestLine2'
import KLine0 from '@/components/lines/KLine0'
import PictureView from '@/components/test/PictureView'

export default {
    name:"SearchPage",
    components:{KeySearch,KLine,TestLine,TestLine2,KLine0,PictureView}
}
</script>
