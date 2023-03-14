<template>
    <input :value="modelValue" @input="updateInput" type="text" class="c-input">
</template>

<script>
    export default {
        name: 'CustomInput',
        props: {
            modelValue: {
                type: [String, Number],
                required: true
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped src="./custom-input.scss">

</style>