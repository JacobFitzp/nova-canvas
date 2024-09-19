<template>
    <Modal :show="true">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <slot>
                <ModalHeader>
                    Insert link
                </ModalHeader>
                <ModalContent>
                    <Input v-model="link" placeholder="https://example.com" />
                </ModalContent>
            </slot>

            <ModalFooter>
                <div>
                    <Button
                        v-if="value.length > 0"
                        @click="this.$emit('remove')"
                        type="button"
                        state="danger"
                        class="mr-3"
                    >
                        Remove
                    </Button>

                    <Button
                        @click="this.$emit('confirm', link)"
                        type="button"
                    >
                        Save
                    </Button>

                    <link-button @click.prevent="this.$emit('cancel')" class="ml-auto">
                        Cancel
                    </link-button>
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
    }
};
</script>
