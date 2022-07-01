<template>

    <q-card class="card card-btn">
        <q-card-section class="text-white" :class="color">
            
            <q-item-section v-if="icon" avatar>
                <q-icon :name="icon" />
            </q-item-section>

            <div class="text-h6"> {{title}}</div>
            <div class="text-subtitle2">{{subtitle}}</div>
        
        </q-card-section>
        <q-card-actions align="right">
            {{caption}}
        </q-card-actions>
    </q-card>
    
</template>

<script>
    import {
        defineComponent
    } from 'vue'
    export default defineComponent({
        name: 'CardBtn',
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: true
            },
            caption: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            }
        }
    })
</script>