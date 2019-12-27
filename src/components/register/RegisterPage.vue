<template>
    <div>
    <!-- <code-check></code-check> -->
    <register-view></register-view>
    </div>
</template>

<script>
import RegisterView from '@/components/register/RegisterView'
import CodeCheck from "@/components/login/CodeCheck"

export default {
    name:"RegisterPage",
    components:{RegisterView}
}
</script>
