<template>
    <div style="text-align: left;">
        
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row">
                    <div class="col-md-12 mb-2">
                        Fields marked with  <span class="text-danger">*</span> are required
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Title <span class="text-danger">*</span></label>
                            <select  class="form-control">
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Other.</option>
                            </select>
                            <el-select v-model="value" placeholder="Select Title">
                                <el-option
                                v-for="item in ['Mr']"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Gender <span class="text-danger">*</span></label>
                            <select class="form-control">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Surname <span class="text-danger">*</span></label>
                            <input name="surname"  type="text" class="form-control" placeholder="Enter your surname">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Firstname <span class="text-danger">*</span></label>
                            <input type="text" name="firstname"   class="form-control" placeholder="Enter your firstname">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Other Name <span class="text-danger">*</span></label>
                            <input type="text" name="othername"   class="form-control" placeholder="Enter your Othername">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Date Of Birth <span class="text-danger">*</span></label>
                            <input type="date" name="dob"   class="form-control">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" name="phone"   class="form-control" placeholder="2348123456789">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Marital Status <span class="text-danger">*</span></label>
                            <select   class="form-control">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Complicated</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Email <span class="text-danger">*</span></label>
                            <input name="email"  type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="label">Highest Educational Level <span class="text-danger">*</span></label>
                            <select   class="form-control">
                                <option>SSCE</option>
                                <option>OND</option>
                                <option>HND</option>
                                <option>BSc.</option>
                                <option>Masters, PhD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepOne",
    data() {
        return {
            model: {
                employee_business_owner: 'employee'
            },
            rules: {
                firstName: [{
                required: true,
                message: 'First name is required',
                trigger: 'blur'
                }],
                lastName: [{
                required: true,
                message: 'Last name is required',
                trigger: 'blur'
                }],
                email: [{
                required: true,
                message: 'Email is required',
                trigger: 'blur'
                },
                {
                type: 'email',
                message: 'Invalid email',
                trigger: 'change'
                }],
            }
        }
    },
    methods: {
    },
    mounted() {
    },

};
</script>