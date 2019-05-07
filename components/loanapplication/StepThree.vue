<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Loan Amount Requested (&#8358;) <span class="text-danger">*</span></label>
                            <input type="text" name="Requested amount" v-model="model.request_amount" v-validate="'required|numeric'" class="form-control" placeholder="Enter loan amount">
                            <span class="error">{{ errors.first('Requested amount') }}</span>
                        </div> 
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Loan Tenure (Months) <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="Tenure" v-model="model.tenure" v-validate="'required'" value="1" type="radio" class="form-control"> <b>1 month</b></span>
                                <span class="pull-left mr-5"><input name="Tenure" v-model="model.tenure" value="2" type="radio" class="form-control"> <b>2 months</b></span>
                                <span class="pull-left mr-5"><input name="Tenure" v-model="model.tenure" value="3" type="radio" class="form-control"> <b>3 months</b></span>
                            </div>
                            <span class="error">{{ errors.first('Tenure') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Affordable Monthly Repayment (&#8358;)</label>
                            <input type="text" v-model="model.monthly_repayment" name="Affordable repayment" v-validate="'required|numeric'" class="form-control" placeholder="Enter affordable monthly repayment">
                            <span class="error">{{ errors.first('Affordable repayment') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Are you currently serving a loan from another financial company <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="Currently servicing a loan from another financial company" v-model="model.currently_servicing_a_loan_from_another_financial_company" v-validate="'required'" value="true" type="radio" class="form-control"> <b>Yes</b></span>
                                <span class="pull-left mr-5"><input name="Currently servicing a loan from another financial company" v-model="model.currently_servicing_a_loan_from_another_financial_company" value="false" type="radio" class="form-control"> <b>No</b></span>
                            </div>
                            <span class="error">{{ errors.first('Currently servicing a loan from another financial company') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Have you ever applied for a loan with MoneyLine <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="Have you applied for a loan with moneyline" v-model="model.have_you_applied_for_a_loan_with_moneyline" v-validate="'required'" value="true" type="radio" class="form-control"> <b>Yes</b></span>
                                <span class="pull-left mr-5"><input name="Have you applied for a loan with moneyline" v-model="model.have_you_applied_for_a_loan_with_moneyline" value="false" type="radio" class="form-control"> <b>No</b></span>
                            </div>
                            <span class="error">{{ errors.first('Have you applied for a loan with moneyline') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Purpose of loan <span class="text-danger">*</span></label>
                            <textarea name="Purpose of loan" v-model="model.purpose_of_loan" v-validate="'required'" class="form-control" placeholder="Enter the purpose of your loan"></textarea>
                            <span class="error">{{ errors.first('Purpose of loan') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepThree",
    data() {
        return {
            model: {
                request_amount: '',
                tenure: '',
                affordable_repayment: '',
                currently_servicing_a_loan_from_another_financial_company: Boolean,
                have_you_applied_for_a_loan_with_moneyline: Boolean,
                purpose_of_loan: '',
            }
        }
    },
    methods: {
        validate() {

           return  this.$validator.validate().then(valid => {
				if (valid) {
                    this.$emit('on-validate', valid, this.model);
					return true;
				}else{
					return false
				}
			})

        }
    },
    mounted() {
    },
};
</script>