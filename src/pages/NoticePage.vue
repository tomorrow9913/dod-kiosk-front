<template>
    <q-page>
        <q-carousel 
            animated 
            v-model="slide" 
            navigation 
            infinite 
            :autoplay="autoplay" 
            arrows 
            transition-prev="slide-right" 
            transition-next="slide-left"
            height="100vh"
            class="bg-blue-grey-4 text-white">
            
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" @click="$router.push('/')"/>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" @click="$router.push('/')" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" @click="$router.push('/')" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" @click="$router.push('/')" />
            <q-carousel-slide name="style" class="column no-wrap flex-center" @click="$router.push('/')">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                    <div class="text-h3">공지사항</div>
                    
                    <div class="text-h4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dignissimos aliquam tenetur nam doloribus ipsam eius vitae magni quasi accusamus aspernatur sed itaque vel illum dolorem, possimus et. Suscipit.
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center" @click="$router.push('/')">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dignissimos aliquam tenetur nam doloribus ipsam eius vitae magni quasi accusamus aspernatur sed itaque vel illum dolorem, possimus et. Suscipit.
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center" @click="$router.push('/')">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dignissimos aliquam tenetur nam doloribus ipsam eius vitae magni quasi accusamus aspernatur sed itaque vel illum dolorem, possimus et. Suscipit.
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center" @click="$router.push('/')">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                    <router-link to="/"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dignissimos aliquam tenetur nam doloribus ipsam eius vitae magni quasi accusamus aspernatur sed itaque vel illum dolorem, possimus et. Suscipit.</router-link>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </q-page>
</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    export default defineComponent({
        name: "NoticePage",
        components: {},
        setup() {
            return {
                slide: ref(1),
                autoplay: ref(true)
            }
        },
        data: () => {
            return {}
        }
    })
</script>
