import LoginForm from "@/components/login-form";


export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full  rounded-lg bg-gray-400 p-3 md:h-36 justify-center items-center">
                    <div className=" text-white text-xl font-semibold ">
                        Rise and Shine
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}