
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

const OTPVerify = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef([]);

    // Timer
    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    // OTP input
    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Paste OTP
    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!pastedData) return;

        const newOtp = [...otp];

        pastedData.split("").forEach((digit, index) => {
            newOtp[index] = digit;
        });

        setOtp(newOtp);

        const nextIndex = Math.min(pastedData.length, 5);
        inputRefs.current[nextIndex]?.focus();
    };

    // Verify
    const handleVerify = (e) => {
        e.preventDefault();

        const otpValue = otp.join("");

        if (otpValue.length !== 6) {
            alert("Please enter complete OTP");
            return;
        }

        console.log("OTP:", otpValue);

        // Axios verify OTP API yaha call karo
    };

    // Resend
    const handleResend = () => {
        if (timer > 0) return;

        setTimer(60);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();

        console.log("Resend OTP");

        // Axios resend OTP API yaha call karo
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-10 text-white">

            {/* Background Glow */}
            <div className="absolute left-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Card */}
            <div className="relative w-full max-w-md">

                {/* Gradient Border */}
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-sm" />

                <div className="relative rounded-[30px] border border-white/10 bg-[#0b1020]/95 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">

                    {/* Back */}
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="mb-7 flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back
                    </button>

                    {/* Icon */}
                    <div className="text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/20">
                            <ShieldCheck size={32} />
                        </div>

                        <h1 className="mt-6 text-3xl font-bold">
                            Verify Your Account
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400">
                            We've sent a 6-digit verification code to your email address.
                        </p>
                    </div>

                    {/* OTP */}
                    <form onSubmit={handleVerify} className="mt-9">

                        <div
                            className="flex justify-center gap-2 sm:gap-3"
                            onPaste={handlePaste}
                        >
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) =>
                                        handleChange(e.target.value, index)
                                    }
                                    onKeyDown={(e) =>
                                        handleKeyDown(e, index)
                                    }
                                    className={`h-12 w-11 rounded-xl border bg-white/[0.04] text-center text-xl font-bold outline-none transition sm:h-14 sm:w-14 ${digit
                                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                                        : "border-white/10 text-white focus:border-cyan-400/60"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/40"
                        >
                            <CheckCircle2 size={19} />

                            <span className="relative z-10">
                                Verify OTP
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
                        </button>
                    </form>

                    {/* Resend */}
                    <div className="mt-7 text-center">

                        {timer > 0 ? (
                            <p className="text-sm text-gray-500">
                                Resend OTP in{" "}
                                <span className="font-semibold text-cyan-400">
                                    00:{String(timer).padStart(2, "0")}
                                </span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResend}
                                className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                            >
                                Resend OTP
                            </button>
                        )}

                    </div>

                    {/* Security */}
                    <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                        <p className="text-xs leading-5 text-gray-500">
                            🔒 Never share your OTP with anyone.
                            <br />
                            Our team will never ask for your verification code.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OTPVerify;