import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Crear una cuenta"
      description="Regístrate para comenzar a explorar."
      mode="signup"
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
