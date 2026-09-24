import { useForm } from "react-hook-form";
import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful");
  };

  return (
    <div className="register-container">
      <h1>Create your account</h1>
      <p className="form-intro">Join ShopKart and start shopping today.</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="full-name">Full name</label>
          <input id="full-name" type="text" placeholder="Enter your full name" autoComplete="name" {...register("fullName", { required: "Full name is required" })} />
          {errors.fullName && <span className="error">{errors.fullName.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            autoComplete="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" placeholder="Enter your 10-digit phone number" autoComplete="tel" {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" } })} />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!_]{6,}$/,
                message:
                  "Password must contain at least 6 characters, one letter and one number",
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input id="confirm-password" type="password" placeholder="Re-enter your password" autoComplete="new-password" {...register("confirmPassword", { required: "Please confirm your password", validate: (value, formValues) => value === formValues.password || "Passwords do not match" })} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
        </div>

        <label className="terms"><input type="checkbox" {...register("terms", { required: "Please accept the terms to continue" })} /><span>I agree to the Terms of Service and Privacy Policy.</span></label>
        {errors.terms && <span className="error">{errors.terms.message}</span>}

        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
