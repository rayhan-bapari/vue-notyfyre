<script setup lang="ts">
import { computed } from 'vue';
import { store, remove } from '@/core/service';
import type { NotyItem, NotyPosition } from '@/core/types';

const groups = computed<Record<NotyPosition, NotyItem[]>>(() => {
    const map: Record<NotyPosition, NotyItem[]> = {
        'top-left': [],
        'top-center': [],
        'top-right': [],
        'bottom-left': [],
        'bottom-center': [],
        'bottom-right': []
    };
    for (const t of store.items) map[t.options.position].push(t);
    return map;
});
</script>

<template>
    <Teleport to="body">
        <div v-for="(items, pos) in groups" :key="pos" class="notyfyre__container" :class="`pos-${pos}`">
            <TransitionGroup name="notyfade">
                <div v-for="t in items" :key="t.id" class="notyfyre noty--card" :class="`type-${t.type}`">
                    <div class="noty--title">{{ t.title }}</div>

                    <div v-if="t.options.progress && t.options.autoClose !== false" class="noty--progress"
                        :style="{ animationDuration: (t.options.autoClose || 0) + 'ms' }"></div>

                    <button class="noty--close" @click="remove(t.id)">×</button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>
