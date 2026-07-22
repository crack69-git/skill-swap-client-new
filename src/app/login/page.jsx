import LoginSection from "@/Components/MainComponents/loginSection/LoginSection";

export const metadata = {
  title: "Login ",
  description: "Sign in to your SkillSwap user account.",
};
const Page = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-center my-20">
      <LoginSection />
    </div>
  );
};

export default Page;
