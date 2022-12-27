import { Fragment } from "react";
import Head from "next/head";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import HeaderOne from "../components/header/header-1";
import Hero from "../components/home-page/hero";
import Services from "../components/home-page/services";
import About from "../components/home-page/about";
import Brand from "../components/home-page/brand";
import FeaturedPost from "../components/home-page/featured-post";
import LatestProject from "../components/home-page/latest-project";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Klassmed</title>
      </Head>
      <HeaderOne />
      <Hero heroItems={props.heroItems} />
      <Services />
      <LatestProject projects={props.projects} />
      <About />
      <Brand brandItems={props.brandItems} />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const heroItems = getAllItems("heros");
  const posts = getAllItems("posts");
  const projects = getAllItems("projects");
  const brandItems = getAllItems("brands");
  const latestProject = getFeaturedItems(projects).reduce(
    (projects, { slug, image, title, order }) => {
      const dOrder = Number(order);

      if (!isNaN(dOrder)) {
        projects[dOrder - 1] = {
          slug,
          image,
          title,
        };
      }
      return projects;
    },
    []
  );
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      heroItems,
      projects: latestProject,
      posts: FeaturedPost,
      brandItems,
    },
  };
}

export default HomePage;
