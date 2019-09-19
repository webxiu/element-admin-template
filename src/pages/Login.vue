<template>
  <div class="login-box">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="authCode">
        <el-input v-model.number="ruleForm.authCode" placeholder="请输入验证码" style="width:140px"></el-input>
        <img src="http://192.168.5.142:81/captcha/default?aEsL1J6H" alt="" class="change-img">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
	  var validateUser = (rule, value, callback) => {
		  if (value === "") {
			  callback(new Error("请输入用户名"));
      } else {
		  callback();
      }
    };
    var validatePass = (rule, value, callback) => {
		if (value === "") {
			callback(new Error("请再次输入密码"));
      }  else {
		  callback();
      }
    };
	var checkCode = (rule, value, callback) => {
		if (!value) {
		return callback(new Error("年龄不能为空"));
		}
		setTimeout(() => {
		if (!Number.isInteger(value)) {
			callback(new Error("请输入数字值"));
		} else {
			if (value < 18) {
			callback(new Error("必须年满18岁"));
			} else {
			callback();
			}
		}
		}, 1000);
	};
    return {
      ruleForm: {
        user: "admin",
        checkPass: "123456",
        authCode: 2203
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }],
        authCode: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
		  this.$router.push( {path: '/home',query:{login: 1}} )
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box{
	width: 400px;
	overflow: hidden;
	position: absolute;
	top: 30%;
	left: 50%;
	padding: 20px 30px 0 0;
	border-radius: 4px;
	margin-left: -200px;
	background: #ccc;
	.change-img{
		display: inline-block;
		vertical-align: middle;
		margin-left: 10px;
	}
}
</style>