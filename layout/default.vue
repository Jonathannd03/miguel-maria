<template>
    <div>
        <AppHeader />
            <slot />
        <AppFooter />
    </div>
</template>
<script>
import AppFooter from "~/layout/AppFooter.vue";
import AppHeader from "~/layout/AppHeader.vue"
</script>