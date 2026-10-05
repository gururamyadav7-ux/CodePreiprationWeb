import { SiGooglesummerofcode } from "react-icons/si";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
} from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        navigate("/OTPVerify");
        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match!");
            return;
        }

        console.log("Register Data:", formData);

        // Axios Register API yaha call kar sakte ho
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-10 text-white">

            {/* Background Glow */}
            <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Register Card */}
            <div className="relative w-full max-w-md">

                {/* Gradient Glow */}
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-sm" />

                <div className="relative rounded-[28px] border border-white/10 bg-[#0b1020]/90 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">

                    {/* Header */}
                    <div className="mb-7 text-center">

                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/20">
                            <SiGooglesummerofcode size={26} />
                        </div>

                        <h1 className="text-3xl font-bold">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Create your account and get started
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Full Name
                            </label>

                            <div className="relative">
                                <User
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.07]"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.07]"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.07]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.07]"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2 pt-1">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 h-4 w-4 rounded border-white/20 accent-cyan-400"
                            />

                            <p className="text-xs leading-5 text-gray-400">
                                I agree to the{" "}
                                <span className="cursor-pointer text-cyan-400">
                                    Terms & Conditions
                                </span>{" "}
                                and{" "}
                                <span className="cursor-pointer text-cyan-400">
                                    Privacy Policy
                                </span>
                            </p>
                        </div>

                        {/* Register Button */}
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="group relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/40"
                        >
                            <span className="relative z-10">
                                Create Account
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
                        </button>
                    </form>

                    {/* Login */}
                    <p className="mt-7 text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/")}
                            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                        >
                            Login
                        </button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Register;