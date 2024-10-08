import { LogginProvider } from "@/context/logginContext";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { getProducts } from "@/helpers/product.helper";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ShowComponent from "@/components/ShowComponent/ShowComponent";
import IProduct from "@/interfaces/Products";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JhonDay Solutions",
  description: "Generated by create next app",
};

async function getNavBarData() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      src: product.image,
      link: `/product/${product.id}`,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const images = await getNavBarData();

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen w-full`}>
        <LogginProvider>
          <ShowComponent>
            <NavBar images={images} />
          </ShowComponent>
          {children}
          <Footer />
        </LogginProvider>
      </body>
    </html>
  );
}
