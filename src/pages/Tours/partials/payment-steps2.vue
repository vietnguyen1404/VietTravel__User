<template>
    <div class="container">
        <step-progress
            :steps="mySteps"
            :current-step="currentStep"
            icon-class="fa fa-check"
            passive-color="#ccc"
            active-color="#e66836"
        ></step-progress>
    </div>
</template>

<script>
import StepProgress from "vue-step-progress";

// import the css (OPTIONAL - you can provide your own design)
import "vue-step-progress/dist/main.css";

// ...
// register the component in your Vue instance
export default {
    components: {
        "step-progress": StepProgress,
    },
    props : {
        value : Number
    },
    watch : {
        value : {
            handler : function () {
                this.currentStep = this.value
            }
        }
    },
    data :() => ({
        mySteps : ['Select Tour','Contact Details','Payment','Complete'],
        currentStep : 1
    })
};
// ...
</script>
