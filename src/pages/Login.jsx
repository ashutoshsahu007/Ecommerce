import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import AuthForm from "../Auth/AuthForm";
import MainLayout from "../layouts/MainLayout";

export default function Login() {
  return (
    <MainLayout>
      <AuthForm />
    </MainLayout>
  );
}
