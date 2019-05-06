<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Loan Amount Requested (&#8358;) <span class="text-danger">*</span></label>
                            <input type="text" name="requested_amount" v-model="model.requested_amount" v-validate="'required'" class="form-control" placeholder="Enter loan amount">
                            <span class="error">{{ errors.first('requested_amount') }}</span>
                        </div> 
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Loan Tenure (Months) <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="tenure" v-model="model.tenure" v-validate="'required'" value="1" type="radio" class="form-control"> <b>1 month</b></span>
                                <span class="pull-left mr-5"><input name="tenure" v-model="model.tenure" value="2" type="radio" class="form-control"> <b>2 months</b></span>
                                <span class="pull-left mr-5"><input name="tenure" v-model="model.tenure" value="3" type="radio" class="form-control"> <b>3 months</b></span>
                            </div>
                            <span class="error">{{ errors.first('tenure') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Affordable Monthly Repayment (&#8358;)</label>
                            <input type="text" v-model="model.affordable_repayment" name="affordable_repayment" v-validate="'required'" class="form-control" placeholder="Enter affordable monthly repayment">
                            <span class="error">{{ errors.first('affordable_repayment') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Are you currently serving a loan from another financial company <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="currently_servicing_a_loan_from_another_financial_company" v-model="model.currently_servicing_a_loan_from_another_financial_company" v-validate="'required'" value="Yes" type="radio" class="form-control"> <b>Yes</b></span>
                                <span class="pull-left mr-5"><input name="currently_servicing_a_loan_from_another_financial_company" v-model="model.currently_servicing_a_loan_from_another_financial_company" value="No" type="radio" class="form-control"> <b>No</b></span>
                            </div>
                            <span class="error">{{ errors.first('currently_servicing_a_loan_from_another_financial_company') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Have you ever applied for a loan with MoneyLine <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="have_you_applied_for_a_loan_with_moneyline" v-model="model.have_you_applied_for_a_loan_with_moneyline" v-validate="'required'" value="Yes" type="radio" class="form-control"> <b>Yes</b></span>
                                <span class="pull-left mr-5"><input name="have_you_applied_for_a_loan_with_moneyline" v-model="model.have_you_applied_for_a_loan_with_moneyline" value="No" type="radio" class="form-control"> <b>No</b></span>
                            </div>
                            <span class="error">{{ errors.first('have_you_applied_for_a_loan_with_moneyline') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Purpose of loan <span class="text-danger">*</span></label>
                            <textarea name="purpose_of_loan" v-model="model.purpose_of_loan" v-validate="'required'" class="form-control" placeholder="Enter the purpose of your loan"></textarea>
                            <span class="error">{{ errors.first('purpose_of_loan') }}</span>
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
                requested_amount: '',
                tenure: '',
                affordable_repayment: '',
                have_you_applied_for_a_loan_with_moneyline: '',
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