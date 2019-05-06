<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Select means of Identity <span class="text-danger">*</span></label>
                            <div>
                                <span class="pull-left mr-5"><input name="identity_type" v-model="model.identity_type" v-validate="'required'" value="Passport" type="radio" class="form-control"> <b>Passport</b></span>
                                <span class="pull-left mr-5"><input name="identity_type" v-model="model.identity_type" value="VotersId" type="radio" class="form-control"> <b>Voters ID</b></span>
                                <span class="pull-left mr-5"><input name="identity_type" v-model="model.identity_type" value="DriversLicense" type="radio" class="form-control"> <b>Drivers License</b></span>
                            </div>
                            <span class="error">{{ errors.first('identity_type') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">ID Number <span class="text-danger">*</span></label>
                            <input type="text" name="identity_number" class="form-control" v-model="model.identity_number" v-validate="'required'" placeholder="ID Number">
                            <span class="error">{{ errors.first('identity_number') }}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Date of Issue <span class="text-danger">*</span></label>
                            <input type="date" name="date_of_issue" v-validate="'required'" v-model="model.date_of_issue" class="form-control">
                            <span class="error">{{ errors.first('date_of_issue') }}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Expiry Date <span class="text-danger">*</span></label>
                            <input type="date" name="expiry_date" v-model="model.expiry_date" v-validate="'required'" class="form-control">
                            <span class="error">{{ errors.first('expiry_date') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepFour",
    data() {
        return {
            model: {
                identity_type: '',
                identity_number: '',
                date_of_issue: '',
                expiry_date: '',
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