<template>
    <Modal :show="true" size="md">
        <div class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <slot>
                <ModalHeader>
                    Insert link
                </ModalHeader>
                <ModalContent>
                    <form
                        class="space-y-4"
                        @submit.prevent="this.$emit('confirm', link)"
                    >
                        <div>
                            <label>URL</label>
                            <Input
                                v-model="link"
                                class="mt-1"
                                placeholder="https://example.com"
                                autofocus
                                focus
                            />
                        </div>

                        <div>
                            <label>Target (optional)</label>
                            <Input
                                class="mt-1"
                                placeholder="_blank"
                            />
                        </div>

                        <div>
                            <label>Rel (optional)</label>
                            <Input
                                class="mt-1"
                                placeholder="norefer"
                            />
                        </div>
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
