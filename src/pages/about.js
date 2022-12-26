import Head from 'next/head';
import { Fragment } from 'react';
import HeaderOne from '../components/header/header-1';
import Services from '../components/home-page/services';
import Hakkımızda from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '../lib/items-util';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team';

function HakkımızdaPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Hakkımızda</title>
            </Head>
            <HeaderOne />
            <PageBanner />
            <Hakkımızda />
            <Services />
            <Testimonial testimonialItems={props.testimonialItems} />
            <Brand brandItems={props.brandItems} />
            <Team teamItems={props.teamItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');

    return {
        props: {
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

export default HakkımızdaPage;
