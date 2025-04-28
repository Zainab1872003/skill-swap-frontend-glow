
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your journey with SkillSwap today"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
