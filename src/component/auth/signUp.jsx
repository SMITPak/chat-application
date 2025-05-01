import FormPage from "../form/form"

export const SignUp = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="py-4 space-y-2 px-8 shadow-2xl text-center rounded-xl">
                <p className="font-bold text-xl text-blue-500">Welcome To Live Chat</p>
                <FormPage />
            </div>

        </div>
    )
}