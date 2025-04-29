import { AppContextProvider } from "@/context/app.context";
import navigation from "@/config/navigation.json";

// styles
import "@/style/globals.css";
import "@/style/main.scss";
import Footer1 from "@/components/elements/footer/footer1";
import Header3 from "@/components/elements/header/header3";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body suppressHydrationWarning={true} dir="ltr">
        <AppContextProvider>
          <div className="has-smooth" id="has_smooth"></div>
          <div className="tropiline-bold root-layout" theme-setting="style-3">
            <ScrollSmootherComponent />
            <ScrollTop />
            <Header3 headerNav={navigation.header} />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div>{children}</div>
                <Footer1 footerNav={navigation.footer1 as any} />
              </div>
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
