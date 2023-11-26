<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router"
import type {Menu} from "@/app/types"

const router = useRouter();
const appMenu = ref<Menu[]>([
    {
        label   : "Dashboard",
        to      : "/dashboard",
        icon    : ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z">
                        </path>
                    </svg>`,
    },
    {
        label   : "Product",
        to      : "/product",
        icon    : ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z">
                        </path>
                    </svg>`,
    },
    {
        label   : "Category",
        to      : "/category",
        icon    : ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z">
                        </path>
                    </svg>`,
    },
    {
        label   : "Supplier",
        to      : "/supplier",
        icon    : ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z">
                        </path>
                    </svg>`,
    },
])
</script>
<template>
    <div class="app-sidebar">
        <ul class="sidebar_menu">
            <template v-for="menu of appMenu">
                <router-link :to="menu.to">
                    <li class="sidebar_men_item" @click="router.push(menu.to)">
                        <span class="menu_icon" v-html="menu.icon"></span>
                        {{ menu.label }}
                    </li>
                </router-link>
            </template>
        </ul>
    </div>
</template>

<style lang="scss">
.app-sidebar {
    padding-top: 60px;
    width : 280px;
    background-color : #FFF;
    box-shadow: 1px 0 10px #CACDD0;
    height : 100vh;
    .sidebar_menu {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 10px;
        list-style: none;
        a {
            text-decoration: none;
            .sidebar_men_item {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 12px;
                transition: color .3s,background-color .3s;
                color: #2C2E30;
                font-weight: 400;
                font-size: 16px;
                .menu_icon {
                    svg {
                        width: 20px;
                        fill: #2C2E30;
                        transition: fill .3s;
                    }
                }
                &:hover {
                    background-color: #2C42CE;
                    color: #FFF;
                    svg {
                        fill: #FFF;
                    }
                }
            }
            &.router-link-active {
                .sidebar_men_item {
                    background-color: #2C42CE;
                    color: #FFF;
                    svg {
                        fill: #FFF; 
                    }
                }
            }

        }
    }
}
</style>