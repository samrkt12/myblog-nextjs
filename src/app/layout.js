import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/theme-context";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyBlog",
  description:
    "Unleash your creativity, share your experiences, and be part of a vibrant community that celebrates the magic of words.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toast />
        <ThemeContextProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
