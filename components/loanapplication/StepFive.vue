<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        If your application is susccessful, which banck account would you like to receive the money?
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Bank Name <span class="text-danger">*</span></label>
                            <input type="text" name="bank_name" v-model="model.bank_name" v-validate="'required'" class="form-control" placeholder="Bank Name">
                            <span class="error">{{ errors.first('bank_name') }}</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Account Name <span class="text-danger">*</span></label>
                            <input type="text" name="account_name" v-model="model.account_name" v-validate="'required'" class="form-control" placeholder="Enter account name">
                            <span class="error">{{ errors.first('account_name') }}</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Account Number <span class="text-danger">*</span></label>
                            <input type="text" name="account_number" v-model="model.account_number" v-validate="'required|numeric'" class="form-control" placeholder="Enter account number">
                            <span class="error">{{ errors.first('account_number') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepFive",
    data() {
        return {
            model: {
                bank_name: '',
                account_name: '',
                account_number: '',
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