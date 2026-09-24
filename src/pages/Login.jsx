import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { rememberMe: false },
  });

  function onSubmit(data) {
    console.log(data);
    alert("Login successful");
  }

  return (
    <main className="login-container">
      <h1>Login Shopkart</h1>
      <p className="form-intro">Log in to continue shopping with ShopKart.</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="login-username">Username or email</label>
          <input id="login-username" type="text" placeholder="Enter username or email" autoComplete="username" {...register("username", { required: "Username or email is required" })} />
          {errors.username && <span className="error">{errors.username.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" autoComplete="current-password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        <div className="login-options">
          <label className="remember-me"><input type="checkbox" {...register("rememberMe")} />Remember me</label>
          <a href="#forgot-password">Forgot password?</a>
        </div>
        <button type="submit">Log in</button>
      </form>
      <p className="form-footer">New to ShopKart? <Link to="/register">Create an account</Link></p>
    </main>
  );
}
