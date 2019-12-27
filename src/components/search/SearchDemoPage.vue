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
    </div>
</template>

<script>
import KeySearch from '@/components/search/KeySearch'
import KLine from '@/components/lines/KLine'
import TestLine from '@/components/lines/TestLine'
import TestLine2 from '@/components/lines/TestLine2'
import KLine0 from '@/components/lines/KLine0'

export default {
    name:"SearchPage",
    components:{KeySearch,KLine,TestLine,TestLine2,KLine0}
}
</script>
