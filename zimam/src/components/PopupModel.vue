<script setup>
defineProps({
    showingModal: Boolean
})
</script>

<template>
    <!--  هنالك طريقتان لتعريف التحول
      1- كتابتها داخل العنصر ذاته
      2- اعطاءها اسم وكتابها دائل css
      <transition   name="modal" >
    :
    :
    <style> 
        .modal-enter-from{} 
        .modal-enter-to{}
        .modal-enter-active{}
      -->
    <transition enter-from-class=" scale-130 opacity-0 " enter-to-class="  opacity-100 "
        enter-active-class="transition duration-300" leave-from-class=" opacity-100 "
        leave-to-class=" scale-130 opacity-0 " leave-active-class="transition duration-500">
        <div v-show="showingModal" class="modal-mask">
            <div class="modal-container">
                <header>
                    <slot name="header">
                    
                    </slot>
                </header>
                <div>
                    <slot>
                      
                    </slot>
                </div>
                <footer>
                    <slot name="footer">
                        <button class="close-btn" @click="$emit('closeModal')">close</button>

                    </slot>

                </footer>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(43, 51, 59, 0.482);
    display: grid;
    place-items: center;
}

.modal-container {
    background-color: aliceblue;
    border-radius: 10px;
    width: 600px;
    max-width: 500px;
    padding: 30px;
}

footer {
    margin-top: 10px;
    border-top: 1px solid rgba(135, 131, 131, 0.652);
    padding-top: 10px;
}

.close-btn {
    background-color: rgb(179, 181, 183);
    color: rgb(31, 48, 63);
    padding: 4px 10px 6px;
    border-radius: 20px;

}

.close-btn:hover {
    background-color: rgb(162, 163, 164);

}
</style>