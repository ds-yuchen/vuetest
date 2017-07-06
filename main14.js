Vue.component('modal' , {
    template:
        `
            <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <slot name="hander"></slot>
                </header>
                <section class="modal-card-body">
                  <slot>defount value</slot>
                </section>
                <footer class="modal-card-foot">
                  <a class="button is-success">Save changes</a>
                  <a class="button">Cancel</a>
                </footer>
              </div>
            </div>
        `
});

new Vue({
    el:'#root',
});