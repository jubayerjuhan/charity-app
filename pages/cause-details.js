import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CauseContent from "../components/causes/cause-content";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const CauseDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Cause Details || Azino || Charity React Next Template">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Cause Details" crumbTitle="Cause Details" />
          <CauseContent />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default CauseDetails;
