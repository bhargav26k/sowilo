import { Fragment } from 'react';
import CountUp from 'react-countup';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import useReplaceMe from 'hooks/useReplaceMe';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import Layers from 'icons/solid/Layers';
import useLightBox from 'hooks/useLightBox';
import Safe from 'icons/solid/Safe';
import Share from 'icons/solid-mono/Share';
import Puzzle from 'icons/solid-mono/Puzzle';
import PenTool from 'icons/solid-duo/PenTool';
import Devices from 'icons/solid-mono/Devices';
import GlobeTwo from 'icons/solid-mono/GlobeTwo';
import Demo23 from './demo-23';

const Home = () => {
  // used for hero area text change
  useReplaceMe(); // use for show popup on the images

  useLightBox();
  return <Fragment>
      <PageProgress />

      <Demo23></Demo23>
    </Fragment>;
};

export default Home;