
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import axios from "axios";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return;

        try {
            setLoading(true);
            setSuccess(false);

            const res = await axios.post(
                "http://localhost:4000/api/user/forgot-password",
                { email },
                {
                    withCredentials: true,
                }
            );

            console.log(res.data);
            setSuccess(true);
        } catch (error) {
            console.log(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-10 text-white">

            {/* Background Glow */}
            <div className="absolute left-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Card */}
            <div className="relative w-full max-w-md">

                {/* Gradient Glow */}
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-sm" />

                <div className="relative rounded-[30px] border border-white/10 bg-[#0b1020]/95 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">

                    {/* Back */}
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="mb-8 flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back to Login
                    </button>

                    {/* Icon */}
                    <div className="text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/20">
                            <ShieldCheck size={31} />
                        </div>

                        <h1 className="mt-6 text-3xl font-bold">
                            Forgot Password?
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            No worries. Enter your email address and we'll send you a
                            password reset link.
                        </p>
                    </div>

                    {/* Success */}
                    {success ? (
                        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-center">
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10">
                                <Mail className="text-emerald-400" size={23} />
                            </div>

                            <h3 className="font-semibold text-emerald-300">
                                Reset Link Sent
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Check your email inbox and follow the link to reset your
                                password.
                            </p>
                        </div>
                    ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} className="mt-9">

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-white/[0.07]"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={19} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles size={18} />
                                        Send Reset Link
                                    </>
                                )}

                                <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
                            </button>
                        </form>
                    )}

                    {/* Bottom */}
                    <p className="mt-7 text-center text-sm text-gray-500">
                        Remember your password?{" "}
                        <button className="font-semibold text-cyan-400 hover:text-cyan-300">
                            Login
                        </button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
