<template>
    <div class="w-full">
        <div class="grid w-full grid-cols-12 gap-4">
            <template v-for="(_comp, index) in _components" :key="index">
                <AtomsTile :data="_comp" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { iAtoms } from "../../../types/index";

const _components = ref<iAtoms[]>([
    {
        name: "logo",
    },
    {
        name: "button",
    },
    {
        name: "input",
    },
]);
</script>