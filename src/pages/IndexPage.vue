<template>

    <q-page class="flex flex-center">
        <CardBtn 
        v-for="card in btnList"
        v-bind:title="card.title"
        v-bind:subtitle="card.subtitle"
        v-bind:caption="card.caption"
        v-bind:color="card.color"
        v-bind:icon="card.icon"
        v-bind:key="card.title"
        v-bind:route="card.route" 
        ></CardBtn>
    </q-page>
    
</template>

<script>
    import { defineComponent } from 'vue'
    import CardBtn from 'src/components/CardBtn.vue'

    const cardsList = [{
            title: 'Person',
            subtitle: '팀플, 프로젝트 구인',
            caption: '팀플, 프로젝트 같이 할 사람 구해요',
            color: 'bg-primary',
            icon: 'group_add',
            route: '/board'
        },
        {
            title: 'Server',
            subtitle: '서버 대여',
            caption: '프로젝트 서버가 필요해요',
            color: 'bg-purple',
            icon: 'dns',
            route: '/board'
        },
        {
            title: 'Book',
            subtitle: '도서 대여',
            caption: '책 좀 빌릴게요',
            color: 'bg-teal',
            icon: 'auto_stories',
            route: '/board'
        },
        {
            title: 'Product',
            subtitle: '장비 대여',
            caption: '장비가 필요해요',
            color: 'bg-brown-5',
            icon: 'precision_manufacturing',
            route: '/board'
        },
        {
            title: 'Other',
            subtitle: '연장, 및 반납',
            caption: '잘 사용했어요!',
            color: 'bg-grey-8',
            icon: 'architecture',
            route: '/notice'
        }
    ]

    export default defineComponent({
    name: "IndexPage",
    components: { 
        CardBtn
    },
    data:()=>{
        return {
            btnList: cardsList
        }
    }

})
</script>
