<template>
  <div id="register">
        <div class="container">
            <div class="login-content">
                <form action="index.html">
                    <img src="../../assets/images/avatar.svg">
                    <h2 class="title">Fago-labs</h2>
					<div :class="{'input-div':true,one:true,focus:isNameFocus}">
						<div class="i">
								<i class="fas fa-user"></i>
						</div>
						<div class="div">
								<h5>Name</h5>
								<input 
									type="text" 
									:class="{input:true}" 
									@focus="this.name?isNameFocus=isNameFocus:isNameFocus=!isNameFocus" 
									@blur="this.name?isNameFocus=isNameFocus:isNameFocus=!isNameFocus"
									v-model="name"
								>
						</div>
                    </div>
					<div :class="{'input-div':true,one:true,focus:isEmailFocus}">
						<div class="i">
								<i class="fas fa-envelope"></i>
						</div>
						<div class="div">
								<h5>Email</h5>
								<input 
									type="email" 
									:class="{input:true}" 
									@focus="this.email?isEmailFocus=isEmailFocus:isEmailFocus=!isEmailFocus" 
									@blur="this.email?isEmailFocus=isEmailFocus:isEmailFocus=!isEmailFocus"
									v-model="email"
								>
						</div>
                    </div>
                    <div :class="{'input-div':true,one:true,focus:isUsernameFocus}">
						<div class="i">
								<i class="fas fa-user"></i>
						</div>
						<div class="div">
								<h5>Username</h5>
								<input 
									type="text" 
									:class="{input:true}" 
									@focus="this.username?isUsernameFocus=isUsernameFocus:isUsernameFocus=!isUsernameFocus" 
									@blur="this.username?isUsernameFocus=isUsernameFocus:isUsernameFocus=!isUsernameFocus"
									v-model="username"
								>
						</div>
                    </div>
                    <div :class="{'input-div':true,pass:true,focus:isPasswordFocus}">
						<div class="i"> 
								<i class="fas fa-lock"></i>
						</div>
						<div class="div">
								<h5>Password</h5>
								<input 
									type="password" 
									:class="input" 
									@focus="this.password?isPasswordFocus=isPasswordFocus:isPasswordFocus=!isPasswordFocus" 
									@blur="this.password?isPasswordFocus=isPasswordFocus:isPasswordFocus=!isPasswordFocus"
									v-model="password"
								>
						</div>
                    </div>
                    <input type="submit" class="btn" value="Register">
                </form>
            </div>
			<div class="img">
                <img src="../../assets/images//bg.svg">
            </div>
        </div>
		<img class="wave" src="../../assets/images/wave.png">
  </div>
</template>

<script>

export default {
    name:"Register",
    data(){
		return{
			username:'',
			password:'',
			email:'',
			name:'',
			isUsernameFocus:false,
			isPasswordFocus:false,
			isNameFocus:false,
			isEmailFocus:false
		}
    },
}
</script>

<style>

body{
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}

#register .wave{
	position: fixed;
	bottom: 0;
	right:0;
	height: 100%;
	z-index: -1;
	transform: scaleX(-1);
}

#register .container{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
}

#register .img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

#register .login-content{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
}

#register .img img{
	width: 500px;
}

#register form{
	width: 360px;
}

#register .login-content img{
    height: 100px;
}

#register .login-content h2{
	margin: 15px 0;
	color: var(--primary-color);
	font-size: 35px;
}

#register .login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

#register .login-content .input-div.one{
	margin-top: 0;
}

#register .i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

#register .i i{
	transition: .3s;
}

#register .input-div > div{
    position: relative;
	height: 45px;
}

#register .input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

#register .input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: var(--primary-color);
	transition: .4s;
}

#register .input-div:before{
	right: 50%;
}

#register .input-div:after{
	left: 50%;
}

#register .input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

#register .input-div.focus > div > h5{
	top: -5px;
	font-size: 13px;
}

#register .input-div.focus > .i > i{
	color: var(--primary-color);
}

#register .input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

#register .input-div.pass{
	margin-bottom: 4px;
}

#register a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
	margin-top:10px;
}

#register a:hover{
	color: var(--primary-color);
}

#register .btn{
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, var(--primary-color), var(--primary-color), var(--primary-color));
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}
#register .btn:hover{
	background-position: right;
}


@media screen and (max-width: 1050px){
	#register .container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	#register form{
		width: 290px;
	}

	#register .login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	#register .img img{
		width: 400px;
	}
}

@media screen and (max-width: 900px){
	#register .container{
		grid-template-columns: 1fr;
	}

	#register .img{
		display: none;
	}

	#register .wave{
		display: none;
	}

	#register .login-content{
		justify-content: center;
	}
}
</style>