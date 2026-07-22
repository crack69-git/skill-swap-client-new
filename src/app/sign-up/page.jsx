import SignUpSection from "@/Components/MainComponents/loginSection/SignUpSection";
export const metadata = {
  title: "Sign Up",
  description: "Sign up to our platform and start your journey.",
};
const page = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-center my-20">
        <SignUpSection />
      </div>
    </div>
  );
};

export default page;
