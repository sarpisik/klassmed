import Head from "next/head";
import { Fragment } from "react";
import HeaderTwo from "../components/header/header-2";
import GoogleMap from "../components/contact/google-map";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>İletişim</title>
        <meta name="description" content="Send us your messages!" />
      </Head>
      <HeaderTwo />
      <GoogleMap />
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
