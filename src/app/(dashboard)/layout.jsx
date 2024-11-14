import Script from "next/script";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import "../../assets-admin/css/font-awesome.css";
import "../../assets-admin/css/vendors/icofont.css";
import "../../assets-admin/css/vendors/themify.css";
import "../../assets-admin/css/vendors/flag-icon.css";
import "../../assets-admin/css/vendors/feather-icon.css";
import "../../assets-admin/css/vendors/slick.css";
import "../../assets-admin/css/vendors/slick-theme.css";
import "../../assets-admin/css/vendors/scrollbar.css";
import "../../assets-admin/css/vendors/animate.css";
import "../../assets-admin/css/vendors/datatables.css";
import "../../assets-admin/css/vendors/owlcarousel.css";
import "../../assets-admin/css/vendors/bootstrap.css";
import "../../assets-admin/css/style.css";
import "../../assets-admin/css/color-1.css";
import "../../assets-admin/css/responsive.css";

import jquery from "../../assets-admin/js/jquery.min.js";
import bootstrap from "../../assets-admin/js/bootstrap/bootstrap.bundle.min.js";
import simplebar from "../../assets-admin/js/scrollbar/simplebar.js";
import scrollbar from "../../assets-admin/js/scrollbar/custom.js";
import config from "../../assets-admin/js/config.js";
import sidebarmenu from "../../assets-admin/js/sidebar-menu.js";
import sidebarpin from "../../assets-admin/js/sidebar-pin.js";
<>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Zono admin is super flexible, powerful, clean & modern responsive bootstrap 5 admin template with unlimited possibilities."
  />
  <meta
    name="keywords"
    content="admin template, Zono admin template, dashboard template, flat admin template, responsive admin template, web app"
  />
  <meta name="author" content="pixelstrap" />
  {/* <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon" /> */}

  <title>breezendtech admin</title>
  {/* Google font */}
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&display=swap"
    rel="stylesheet"
  />
</>;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {" "}
        {/* <Script src={jquery} strategy="beforeInteractive" />
        <Script src={bootstrap} strategy="beforeInteractive" />
        <Script src={simplebar} strategy="beforeInteractive" />
        <Script src={scrollbar} strategy="beforeInteractive" />
        <Script src={config} strategy="beforeInteractive" />
        <Script src={sidebarmenu} strategy="beforeInteractive" />
        <Script src={sidebarpin} strategy="beforeInteractive" />{" "} */}
      </Head>

      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
