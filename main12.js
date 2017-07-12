window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }
    fire(event , data = null){
        this.vue.$emit(event,data);
    }
    lisiten(event , callback){
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon' , {
    template:
        `
            <input placeholder="Enter your coupon code" @blur="onCouponApplided">
        `,
    methods:{
        onCouponApplided(){
            Event.fire('applied');
        }
    }
});

new Vue({
    el:'#root',
    data:{
        couponApplied:false
    },
    created(){
        Event.lisiten('applied',() => alert('Hold Down'));
    }
});