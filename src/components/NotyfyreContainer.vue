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
        <TransitionGroup v-for="(items, pos) in groups" :key="pos" tag="div" name="toast" class="toast-list"
            :data-position="pos">
            <article v-for="t in items" :key="t.id" class="toast" :class="[
                `toast-${t.type}`,
                { 'toast-auto-close': t.options.progress && t.options.autoClose !== false }
            ]" :data-position="pos">
                <div class="toast-content">
                    <span class="toast-title">{{ t.title }}</span>
                </div>

                <div v-if="t.options.progress && t.options.autoClose !== false" class="toast-progress"
                    :style="{ animationDuration: (t.options.autoClose || 0) + 'ms' }"></div>

                <div class="toast-close">
                    <button type="button" @click="remove(t.id)" aria-label="Dismiss notification">x</button>
                </div>
            </article>
        </TransitionGroup>
    </Teleport>
</template>
