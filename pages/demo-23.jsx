import { Fragment } from 'react'; // -------- custom hook -------- //

import useProgressbar from 'hooks/useProgressbar'; // -------- custom component -------- //

import { Blog5 } from 'components/blocks/blog';
import { Hero23 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { About24 } from 'components/blocks/about';
import { Footer9 } from 'components/blocks/footer';
import { Banner5 } from 'components/blocks/banner';
import { Services26 } from 'components/blocks/services';
import { CTA9 } from 'components/blocks/call-to-action';
import { Portfolio4 } from 'components/blocks/portfolio';
import { Testimonial18 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo23 = () => {
  // used for the animated line
  useProgressbar();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar info search stickyBox={false} logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none" />
      </header>

      {
      /* ========== main content ========== */
    }
      <main className="content-wrapper">
        {
        /* ========== hero section ========== */
      }
         <About24 />

        {
        /* ========== service section =========   */
      }


        {
        /* ========== testimonial section ========== */
      }
        <Testimonial18 />

        {

<Portfolio4 />
        /* ========== banner section ========== */
      }
        <Banner5 />

        {
        /* ========== portfolio section ========== */
      }
        

        {
        /* ========== call to action section ========== */
      }
        <CTA9 />

        {
        /* ========== about us section ========== */
      }
        {/* <Hero23 /> */}

        {
        /* ========== blog section ========== */
      }
        <Blog5 />
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer9 />
    </Fragment>;
};

export default Demo23;