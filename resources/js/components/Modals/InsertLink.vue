<template>
    <Modal :show="true" size="md">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <slot>
                <ModalHeader>
                    Insert link
                </ModalHeader>
                <ModalContent>
                    <form @submit.prevent="this.$emit('confirm', link)">
                        <Input
                            v-model="link"
                            icon="link"
                            focus
                            placeholder="https://example.com"
                        />
                    </form>
                </ModalContent>
            </slot>

            <ModalFooter>
                <div class="px-2 flex items-center">
                    <Button
                        @click="this.$emit('confirm', link)"
                        type="button"
                        class="mr-3"
                    >
                        {{ updating ? 'Update' : 'Insert' }}
                    </Button>

                    <Button
                        v-if="updating"
                        @click="this.$emit('remove')"
                        type="button"
                        state="danger"
                        class="mr-3"
                    >
                        Remove
                    </Button>

                    <Button
                        variant="link"
                        state="mellow"
                        @click.prevent="this.$emit('cancel')"
                    >
                        Cancel
                    </Button>
                </div>
            </ModalFooter>
        </div>
    </Modal>
</template>

<script>
import { Button, Input } from 'laravel-nova-ui'

export default {
    emits: ['cancel', 'remove', 'confirm'],
    components: { Input, Button },
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            link: this.value
        }
    },
    computed: {
        updating () {
            return this.value.length > 0
        }
    }
};
</script>
