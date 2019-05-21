<template>
    <div style="text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <!-- <ul>
                <li v-for="(error, index) in errors.all()" :key="index">{{ error }}</li>
                </ul> -->
                <template v-if="workType == 'employee'">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Company Name <span class="text-danger">*</span></label>
                            <input type="text" name="Company name" v-validate="'required'" v-model="model.company_name" class="form-control" placeholder="Enter company name">
                            <span class="error">{{ errors.first('Company name') }}</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Company Address <span class="text-danger">*</span></label>
                            <input type="text" name="Company address" v-validate="'required'" v-model="model.company_address" class="form-control" placeholder="Enter company address">
                            <span class="error">{{ errors.first('Company address') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Position Held <span class="text-danger">*</span></label>
                            <input type="text" name="Position held" v-validate="'required'" v-model="model.position_held" class="form-control" placeholder="Enter position held">
                            <span class="error">{{ errors.first('Position held') }}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Date Of Employment <span class="text-danger">*</span></label>
                            <input type="date" name="Date of employment" v-validate="'required'" v-model="model.date_of_employment" class="form-control">
                            <span class="error">{{ errors.first('Date of employment') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Monthly Pay Day <span class="text-danger">*</span></label>
                            <select name="Monthly pay day" v-validate="'required'" v-model="model.monthly_pay_day" class="form-control" id="">
                                <option v-for="(i, index) in 31" :key="index" :value="i">{{ i }}</option>
                            </select>
                            <span class="error">{{ errors.first('Monthly pay day') }}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Monthly Pay (&#8358;)</label>
                            <input type="text" name="Monthly pay" class="form-control" placeholder="Enter your monthly pay">
                            <!-- <span class="error">{{ errors.first('money_pay') }}</span> -->
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Net Salary (&#8358;) <span class="text-danger">*</span></label>
                            <input type="text" name="Net salary" v-validate="'required'" v-model="model.net_salary" class="form-control" placeholder="Enter your net salary">
                            <span class="error">{{ errors.first('Net salary') }}</span>
                        </div>
                    </div>
                </div>
                </template>
                <template v-if="workType == 'business_owner'">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">Business Name <span class="text-danger">*</span></label>
                            <input type="text" name="Business name" v-validate="'required'" v-model="model.business_name" class="form-control" placeholder="Enter business name">
                            <span class="error">{{ errors.first('Business name') }}</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="label">RC Number</label>
                            <input type="text"  name="Rc number" v-model="model.rc_number" class="form-control" placeholder="Enter RC Number">
                            <span class="error">{{ errors.first('Rc number') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Business Address <span class="text-danger">*</span></label>
                            <input type="text"  name="Business address" v-validate="'required'" v-model="model.business_address" class="form-control" placeholder="Enter business address">
                            <span class="error">{{ errors.first('Business address') }}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Business Website</label>
                            <input type="text" name="business_website" v-model="model.business_website" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Business Phone Number <span class="text-danger">*</span></label>
                            <input type="text" v-validate="'required|numeric|min:13|max:13'" name="Business phone" v-model="model.business_phone" class="form-control" placeholder="Enter business phone number">
                            <span class="error">{{ errors.first('Business phone') }}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Number of years in Business <span class="text-danger">*</span></label>
                            <input type="text" name="Number of years in business" v-validate="'required|numeric'" v-model="model.number_of_year_in_business" class="form-control">
                            <span class="error">{{ errors.first('Number of years in business') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Business Size (Employees) <span class="text-danger">*</span></label>
                            <input type="number" name="Total number of staff" v-validate="'required|numeric'" v-model="model.total_number_of_staff" class="form-control">
                            <span class="error">{{ errors.first('Total number of staff') }}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Average Monthly Income (&#8358;) <span class="text-danger">*</span></label>
                            <input type="text" name="Average monthly income" v-validate="'required'" v-model="model.average_monthly_income" class="form-control" placeholder="Enter average monthly income">
                            <span class="error">{{ errors.first('Average monthly income') }}</span>
                        </div>
                    </div>
                </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepTwo",
    props: {
        workType: {
            type: String
        }
    },
    data() {
        return {
            model: {
                company_name: '',
                company_address: '',
                position_held: '',
                date_of_employment: '',
                monthly_pay_day: '',
                net_salary: '',
                business_name: '',
                rc_number: '',
                business_address: '',
                business_website: '',
                business_phone: '',
                number_of_year_in_business: '',
                total_number_of_staff: '',
                average_monthly_income: '',
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