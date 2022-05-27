import React from 'react';
import Header from '../components/Header';
import CatalogBody from '../components/CatalogBody';
import Footer from '../components/Footer';

type Props = {};

const Catalog: React.FC<Props> = (props) => {
  return (
    <div>
      <CatalogBody />
    </div>
  );
};

export default Catalog;
