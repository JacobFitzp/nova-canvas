<template>
    <Modal :show="true">
        <form
            @submit.prevent="$emit('confirm')"
            class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
            <slot>
                <ModalHeader>
                    Insert link
                </ModalHeader>
                <ModalContent>
                    <input
                        class="form-control form-input form-control-bordered"
                    />
                </ModalContent>
            </slot>

            <ModalFooter>
                <div class="ml-auto">
                    <link-button
                        type="button"
                        @click.prevent="this.$emit('close')"
                        class="mr-3"
                    >
                        Cancel
                    </link-button>

                    <Button ref="confirmButton" type="submit">
                        Link
                    </Button>
                </div>
            </ModalFooter>
        </form>
    </Modal>
</template>

<script>
import { Button } from 'laravel-nova-ui'

export default {
    emits: ["close", "confirm"],

    components: { Button },
};
</script>
