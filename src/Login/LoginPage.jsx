import { SiGooglesummerofcode } from "react-icons/si";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import axios from "axios";
import { IoIosAlert } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const [loding, setLoding] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
                navigate("/")
            }, 3000);
            return () => clearTimeout(timer);
        }
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Login Data:", formData);
        setLoding(true)
        try {
            const response = await axios.post(
                "http://localhost:4000/api/auth/login",
                formData,
                {
                    withCredentials: true,
                }
            );

            console.log("Login Success:", response.data);
            setSuccess(true)
        } catch (error) {
            console.log("Login Error:", error.response?.data);
            setError(true)
        }
        setLoding(false)

        // Axios login API yaha call kar sakte ho
    };

    return (
        <div className="relative w-full flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-10 text-white">

            {/* Background Glow */}
            <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Login Card */}
            <div className="relative w-full max-w-md">

                {/* Glow Border */}
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-sm" />

                <div className="relative rounded-[28px] border border-white/10 bg-[#0b1020]/90 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">

                    {/* Logo */}
                    <div className="mb-8 text-center">

                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/20">
                            <SiGooglesummerofcode size={26} />
                        </div>

                        <h1 className="text-3xl font-bold">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Login to your account and continue
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

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
                            <div className="mb-2 flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-300">
                                    Password
                                </label>

                                <button
                                    onClick={() => navigate("/forgot-password")}
                                    type="button"
                                    className="text-xs text-cyan-400 transition hover:text-cyan-300"
                                >
                                    Forgot password?
                                </button>
                            </div>

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
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/20 bg-white/5 accent-cyan-400"
                            />

                            <span className="text-sm text-gray-400">
                                Remember me
                            </span>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/40"
                        >
                            <span className="relative z-10">
                                {loding ? "Login..." : "Login"}
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />

                        <span className="text-xs text-gray-600">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Signup */}
                    <p className="text-center text-sm text-gray-400">
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/register")}
                            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                        >
                            Create account
                        </button>
                    </p>

                </div>
                {success ? <div className=" fixed top-3 left-1/2 -translate-x-1/2">
                    <p className="text-white  rounded-xl border border-white px-5 flex items-center py-2 bg-green-600 ">User Login successful <IoCheckmarkCircle size={25} className="text-white ml-3" /> </p>
                </div> : ""}
                {error ? <div className=" fixed top-3 left-1/2 -translate-x-1/2">
                    <p className="text-white  rounded-xl border border-white px-5 flex items-center py-2 bg-red-600 ">User Login faild <IoIosAlert size={25} className="text-white ml-3" /> </p>
                </div> : ""}
            </div>
        </div>
    );
};

export default Login;
