import './Css/LoginSingUp.css'

export default function LoginSignUp() {
  return (
    <div className='login-singup'>
      <div className="login-singup-container">
        <h1>Sing UP</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Nam' />
          <input type="Email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className='login-p'>Already have an account? <span>Login here</span></p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree of the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
