<template>
    <div class="q-pa-md flex flex-center">
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Person" icon="group_add" to="/board" />
        </q-breadcrumbs>
        <hr>
        <q-card style="margin-top: 1%">
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
                <q-tab name="team" label="팀 구해요" @click="mode = 'team'"/>
                <q-tab name="members" label="팀원 구해요" @click="mode = 'members'"/>
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated style="max-height: 78vh" class="scroll">
                <q-tab-panel name="team" class="flex flex-center">
                    <q-intersection v-for="index in 30" :key="index" transition="jump-down" class="example-item">
                        <q-card class="q-ma-sm" @click="fixed = true" >
                            <img src="https://cdn.quasar.dev/img/mountains.jpg">
                            <q-card-section>
                                <div class="text-h6">Card #{{ index }}</div>
                                <div class="text-subtitle2">by John Doe</div>
                            </q-card-section>
                        </q-card>
                    </q-intersection>
                </q-tab-panel>
                <q-tab-panel name="members" class="flex flex-center">
                    <q-intersection v-for="index in 60" :key="index" transition="scale" class="example-item">
                        <q-card class="q-ma-sm" @click="fixed = true" >
                            <img src="https://cdn.quasar.dev/img/mountains.jpg">
                            <q-card-section>
                                <div class="text-h6">Card #{{ index }}</div>
                                <div class="text-subtitle2">by John Doe</div>
                            </q-card-section>
                        </q-card>
                    </q-intersection>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
        <q-btn push color="white" text-color="primary" label="뒤로가기" style="margin-top: 1%" to="/" />
        <q-dialog v-model="fixed">
            <q-card>
                <q-card-section>
                    <div class="text-h6">{{mode=="team"?'팀 구해요':'팀원 구해요'}}</div>
                </q-card-section>
                <q-separator />
                <q-card-section style="max-height: 50vh" class="scroll">
                    <div class="text-h6">이런 것을 하고 있어요(프로젝트 설명)</div>
                    <q-input outlined v-model="text" type="textarea" readonly disable />
                    <div class="text-h6">이런 것을 이용하고 있어요(기술스택/툴)</div>
                    <q-input outlined v-model="text" type="textarea" readonly disable />
                    <div class="text-h6">이것을 할 줄 알아요(포지션)</div>
                    <q-input outlined v-model="text" type="textarea" readonly disable />
                    <div class="text-h6">이 날 전에는 연락 주세요(마감일)</div>
                    <q-input outlined v-model="text" readonly disable/>
                    <div class="text-h6">이곳으로 연락주세요(연락처)</div>
                    <q-input outlined v-model="text" readonly disable/>
                        
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">
                    <q-btn outline label="연락하기" color="primary" v-close-popup />
                    <q-btn outline label="닫기" color="red-12" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    export default defineComponent({
        name: "PersonMainPage",
        components: {},
        setup() {
            return {
                tab: ref('team'),
                fixed: ref(false)
            }
        },
        data: () => {
            return {
                modalOpne: false,
                mode: 'team'
            }
        },
        async mounted() {
            
            
        },
    })
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>