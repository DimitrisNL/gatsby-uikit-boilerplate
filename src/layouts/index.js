import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Footer, Navigation } from 'Blocks';

import Uikit from 'uikit/dist/js/uikit.min';
import Icons from 'uikit/dist/js/uikit-icons.min';

Uikit.use(Icons);

import './styles.scss';
import 'animate.css/animate.css';

const TemplateWrapper = ({ children }) => (
  <div className="uk-section-secondary uk-preserve-color">
    <Navigation />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
