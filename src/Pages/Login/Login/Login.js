
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,  formState: { errors }, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data);
    
  }
  return (
    <div className="h-[800px] flex justify-center items-center flex-col">
      <div className="w-96 p-7 shadow-lg">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required"  })}
              className="input input-bordered w-full"
            />
            {errors.email && <p role="alert" className="text-red-700 mt-4">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required",
              minLength: {value: 6, message: "Password must be 6 character"}
            },
                 
              )}
              className="input input-bordered w-full"
            />
            {errors.password && <p role="alert" className="text-red-700 mt-4">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text-alt">Forgot Password ?</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-neutral w-full mt-4"
          />
        </form>
        <p className="text-center my-3 ">New to Doctors Portal <Link to="/register" className="text-secondary">Create new account</Link></p>
        <div className="divider my-4">OR</div>
        <button className="btn btn-outline w-full uppercase">continue with google</button>
      </div>
    </div>
  );
};

export default Login;
