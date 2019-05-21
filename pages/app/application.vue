<template>
	<div class="content">
        <UserHero :pageTitle="pageTitle" />
        <div style="background: #fafafa;" class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt-4 loan" style="background: #fff !important;">
                        <form-wizard
                            @on-complete="onComplete"
                            :title="'LOAN APPLICATION FORM'"
                            :subtitle="'Fill the form below to get started'"
                            color="#015A86"
                            shape="circle"
                            error-color="#ff4949"
                            >

                            <tab-content
                                title="PERSONAL DETAILS"
                                icon="fa fa-user"
                                :before-change="() => validate('stepOne')"
                            >
                                
                                <step-one ref="stepOne" :loggedInUser="loggedInUser" @on-validate="onStepValidate" @employee_business_owner="workType"></step-one>

                            </tab-content>

                            <tab-content
                                title="EMPLOYMENT DETAILS"
                                icon="fa fa-briefcase"
                                :before-change="() => validate('stepTwo')"
                            >
                                
                                <step-two ref="stepTwo" :workType="employee_or_business_owner" @on-validate="onStepValidate"></step-two>

                            </tab-content>

                            <tab-content
                                title="LOAN DETAILS"
                                icon="fa fa-credit-card-alt"
                                :before-change="() => validate('stepThree')"
                            >
                                
                                <step-three ref="stepThree" @on-validate="onStepValidate"></step-three>

                            </tab-content>
                            <tab-content
                                title="IDENTITY AND DOCUMENT UPLOAD"
                                icon="fa fa-id-card-o"
                                :before-change="() => validate('stepFour')"
                            >
                                
                                <step-four ref="stepFour" @on-validate="onStepValidate"></step-four>

                            </tab-content>
                            <tab-content
                                title="DISBURSEMENT DETAILS"
                                icon="fa fa-university"
                                :before-change="() => validate('stepFive')"
                            >
                                
                                <step-five ref="stepFive" @on-validate="onStepValidate"></step-five>

                            </tab-content>
                            <tab-content
                                title="GUARANTOR DETAILS"
                                icon="fa fa-male"
                                :before-change="() => validate('stepSix')"
                            >
                                
                                <step-six ref="stepSix" @on-validate="onStepValidate"></step-six>

                            </tab-content>
                        </form-wizard>
                    </div>
                </div>
            </div>
        </div>


	</div>
</template>
<style>
    .content {
        color: rgb(123, 121, 121);
    }
    h4.wizard-title {
        margin-bottom: 20px !important;
    }
    .stepTitle {
        font-size: 12px !important;
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
    .loan {
        -webkit-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
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
    .error{
        color: #bf0915;
        font-size: 11px
    }
</style>
<script>
import HorizontalStepper from '@/node_modules/vue-stepper';
import Header from "@/components/layouts/Header";
import UserHero from "@/components/layouts/UserHero";
import CallToAction from "@/components/layouts/CallToAction";
import StepOne from '@/components/loanapplication/StepOne.vue';
import StepTwo from '@/components/loanapplication/StepTwo.vue';
import StepThree from '@/components/loanapplication/StepThree.vue';
import StepFour from '@/components/loanapplication/StepFour.vue';
import StepFive from '@/components/loanapplication/StepFive.vue';
import StepSix from '@/components/loanapplication/StepSix.vue';

export default {
    layout: 'user',
	components: {
        Header,
        UserHero,
        CallToAction,
        HorizontalStepper,
        StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
    },
    data() {
        return {
            loggedInUser: '',
            finalModel: {},
            pageTitle: 'LOAN APPLICATION',
            topButtons: true,
            employee_or_business_owner: ''
        }
    },
    mounted() {
        this.loggedInUser = this.$store.state.auth.user.user;
    },
    methods: {
        validate(ref) {
            return this.$refs[ref].validate();
        },
        onStepValidate(validated, model) {
            if (validated) {
                this.finalModel = { ...this.finalModel, ...model };    
            }
        },
        workType(value) {
            this.employee_or_business_owner = value;
        },
        onComplete() {
            console.log(this.finalModel);
            this.finalModel.currently_servicing_a_loan_from_another_financial_company = false;
            this.finalModel.have_you_applied_for_a_loan_with_moneyline = false;
            if(this.finalModel.currently_servicing_a_loan_from_another_financial_company == 'true') {
                this.finalModel.currently_servicing_a_loan_from_another_financial_company = true;
            }
            if(this.finalModel.have_you_applied_for_a_loan_with_moneyline == 'true') {
                this.finalModel.have_you_applied_for_a_loan_with_moneyline = true;
            }
            this.$axios.post('/loans', this.finalModel).then(res => {
                this.$router.push('/loan/my-loans');
            })
        },
    },
};
</script>
