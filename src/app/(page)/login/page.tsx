import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="min-w-screen flex justify-center h-full">
      <div className="max-w-3xl lg:w-1/2 px-4 py-8">
        <div className="text-3xl flex items-center justify-center font-bold pb-8">
          Staff Login
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
