<template>
    <q-layout>
        <q-page-container>
            <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                appear
                :duration="300"
                >
                <router-view />
            </transition>
        </q-page-container>
    </q-layout>
</template>

<script>
    import {
        defineComponent
    } from 'vue'
    export default defineComponent({
        name: 'NoticeLayout',
        components: {},
        setup() {
            return {}
        },
        data() {
            return {}
        },
        async mounted() {},
    })
</script>