# @rayhan-bapari/notyfyre-vue

> Elegant toast notifications for **Vue 3**, inspired by the [Laravel Notyfyre](https://github.com/rayhan-bapari/Notyfyre) package.

---

## ✨ Features

- ⚡ Simple API: `notyfyre.success('Title')`
- 🎨 Clean, modern design
- 📍 6 positions: top/bottom left/center/right
- ⏳ Auto-close + bottom progress bar
- ⚙️ Customizable global options
- 🧩 Written in TypeScript + Vue 3

---

## 📦 Installation

```bash
npm install @rayhan-bapari/notyfyre-vue
# or
yarn add @rayhan-bapari/notyfyre-vue
```

## Register the plugin

```javascript
import { createApp } from 'vue';
import App from './App.vue';

import Notyfyre from '@rayhan-bapari/notyfyre-vue';
import '@rayhan-bapari/notyfyre-vue/style.css';

createApp(App)
  .use(Notyfyre)
  .mount('#app');


// Add the container once
<script setup lang="ts">
import { NotyfyreContainer } from '@rayhan-bapari/notyfyre-vue';
</script>

<template>
  <RouterView />
  <NotyfyreContainer />
</template>
```

## 💬 Triggering Notifications

```javascript
// Basic usage
notyfyre.success('Operation successful!');
notyfyre.error('Something went wrong!');
notyfyre.warning('Please check your input.');
notyfyre.info('New update available.');

// With custom options
notyfyre.success('Custom toast', {
  position: 'bottom-right',
  autoClose: 5000,
  progress: false
});****

// Set global defaults
notyfyre.options({
  position: 'top-right',
  autoClose: 4000,
  progress: true
});

// Using the composable
import { useNotyfyre } from '@rayhan-bapari/notyfyre-vue';
const noty = useNotyfyre();
noty.success('Data saved!');
```

## ⚙️ Available Options

```
| Option      | Type                                                                                              | Default        | Description                                 |
| ----------- | ------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------- |
| `position`  | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `"top-center"` | Toast placement                             |
| `autoClose` | `number \| false`                                                                                 | `3000`         | Auto close delay (ms) or `false` to disable |
| `progress`  | `boolean`                                                                                         | `true`         | Show bottom progress bar                    |

