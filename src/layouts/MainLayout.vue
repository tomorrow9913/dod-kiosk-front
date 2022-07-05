<template>
    <q-layout view="lHh Lpr lFf" v-on:click.capture="updateLastAction">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
                <q-toolbar-title>
                    D.o.D Kiosk
                </q-toolbar-title>
                <div>
                    <span> kiosk v{{ $q.version }}</span>
                    <span id="time">{{time.toLocaleDateString()+" "+time.toLocaleTimeString()}}</span>
                </div>
            </q-toolbar>
        </q-header>
        <q-drawer v-model="leftDrawerOpen" bordered>
            <q-list>
                <q-item-label header>
                    메뉴
                </q-item-label>
                <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
            </q-list>
        </q-drawer>
        <q-page-container>
            <q-linear-progress :value="progress" color="warning" class="q-mt-sm" />
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    import EssentialLink from 'components/EssentialLink.vue'
    const linksList = [{
            title: 'Docs',
            caption: 'quasar.dev',
            icon: 'school',
            link: 'https://quasar.dev'
        },
        {
            title: 'Github',
            caption: 'github.com/quasarframework',
            icon: 'code',
            link: 'https://github.com/quasarframework'
        },
        {
            title: 'Discord Chat Channel',
            caption: 'chat.quasar.dev',
            icon: 'chat',
            link: 'https://chat.quasar.dev'
        },
        {
            title: 'Forum',
            caption: 'forum.quasar.dev',
            icon: 'record_voice_over',
            link: 'https://forum.quasar.dev'
        },
        {
            title: 'Twitter',
            caption: '@quasarframework',
            icon: 'rss_feed',
            link: 'https://twitter.quasar.dev'
        },
        {
            title: 'Facebook',
            caption: '@QuasarFramework',
            icon: 'public',
            link: 'https://facebook.quasar.dev'
        },
        {
            title: 'Quasar Awesome',
            caption: 'Community Quasar projects',
            icon: 'favorite',
            link: 'https://awesome.quasar.dev'
        }
    ]
    export default defineComponent({
        name: 'MainLayout',
        components: {
            EssentialLink
        },
        methods: {
            updateLastAction() {
                delete this.lastAction;
                this.lastAction = new Date();
            },
        },
        setup() {
            const routeTime = 1000 * 30
            const unitProgress = 1/(routeTime/1000)
            const progress = ref(unitProgress*1.5)
            const leftDrawerOpen = ref(false)
            return {
                progress,
                unitProgress,
                routeTime,
                essentialLinks: linksList,
                leftDrawerOpen,
                toggleLeftDrawer() {
                    leftDrawerOpen.value = !leftDrawerOpen.value
                },
                lastAction: new Date(),
                timer: false,
            }
        },
        data() {
            return {
                time: new Date()
            }
        },
        watch: {
            $route(to, from) {
                if (to.path === '/notice') {
                    delete this.lastAction;
                    delete this.time
                    clearInterval(this.timer)
                }
            }
        },
        async mounted() {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.time = new Date()
                    this.progress = this.unitProgress+(this.time.getTime() - this.lastAction.getTime())/this.routeTime
                    if (this.time.getTime() - this.lastAction.getTime() > this.routeTime) {
                        this.$router.push('/notice')
                    }
                }, 1000);
            }
        },
    })
</script>