<template>
	<div class="content">
        <div class="">
            <div class="slidee">
                <div class="payoff">
                    <span class="highlight">LOAN APPLICATION FORM</span>
                </div>
            </div>  
        </div>
        <div style="background: #fafafa;" class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <horizontal-stepper :steps="applicationSteps" @completed-step="completeStep"
                                     @active-step="isStepActive">                     
                        </horizontal-stepper>
                    </div>
                </div>
            </div>
        </div>

        <CallToAction/>

	</div>
</template>
<style>
    .content {
        color: rgb(123, 121, 121);
    }
    .stepper-box h4 {
        font-size: 10px !important;
    }
    h4 {
        font-weight: 600;
    }
    h6 {
        color: green;
        font-weight: 600;
    }
    h6.title {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300px;
    }
    .slidee {
        background-image: url('/Artboard_1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .payoff {
        font-size: 2.15em;
        font-weight: 200;
        color: #fff;
        padding: 50px 0 50px 30px;
    }
    .highlight {
        font-weight: bold;
    }
</style>
<script>
import HorizontalStepper from '@/node_modules/vue-stepper';
import Header from "@/components/layouts/Header";
import CallToAction from "@/components/layouts/CallToAction";
import StepOne from '@/components/loanapplication/StepOne.vue';
import StepTwo from '@/components/loanapplication/StepTwo.vue';
import StepThree from '@/components/loanapplication/StepThree.vue';
import StepFour from '@/components/loanapplication/StepFour.vue';
import StepFive from '@/components/loanapplication/StepFive.vue';
import StepSix from '@/components/loanapplication/StepSix.vue';

export default {
	components: {
        Header,
        CallToAction,
        HorizontalStepper,
    },
    data() {
        return {
            applicationSteps: [
                {
                    icon: 'account_circle',
                    name: 'one',
                    title: 'PERSONAL DETAILS',
                    component: StepOne,
                    completed: false

                }
                ,
                {
                    icon: 'card_travel',
                    name: 'two',
                    title: 'SECTION B - EMPLOYMENT DETAILS',
                    component: StepTwo,
                    completed: false
                }
                ,
                {
                    icon: 'credit_card',
                    name: 'three',
                    title: 'SECTION C - LOAN DETAILS',
                    component: StepThree,
                    completed: false
                }
                ,
                {
                    icon: 'cloud_upload',
                    name: 'four',
                    title: 'SECTION D - IDENTITY AND DOCUMENT UPLOAD',
                    component: StepFour,
                    completed: false
                }
                ,
                {
                    icon: 'call_split',
                    name: 'five',
                    title: 'SECTION E - DISBURSEMENT DETAILS',
                    component: StepFive,
                    completed: false
                }
                ,
                {
                    icon: 'accessibility',
                    name: 'six',
                    title: 'SECTION F - GUARANTOR DETAILS',
                    component: StepSix,
                    completed: false
                }
                ,
            ]
        }
    },
    methods: {
        // Executed when @completed-step event is triggered
        completeStep(payload) {
            this.applicationSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        // Executed when @active-step event is triggered
        isStepActive(payload) {
            this.applicationSteps.forEach((step) => {
                if (step.name === payload.name) {
                    if(step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        // Executed when @stepper-finished event is triggered
        alert(payload) {
            alert('end')
        }
    },
};
</script>
