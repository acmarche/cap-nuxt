<script setup lang="ts">
const {msg = 'x', name = 'x'} = defineProps<{
    msg?: string
    name?: string
}>()
// 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
    change: [id: number]
    update: [value: string]
}>()
const modelValue = defineModel<string>()
</script>