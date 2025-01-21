<script setup lang="ts">
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                &copy; {{ year }} 昆明理工大学
            </p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background-color: #f8f9fa;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid #e7e7e7;
}

.footer .content {
    max-width: 800px;
    margin: 0 auto;
}

.footer p {
    margin: 0;
    color: #6c757d;
}
</style>