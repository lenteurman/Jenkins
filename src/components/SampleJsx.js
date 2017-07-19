import React from 'react';
import { Image, ScrollView } from 'react-native';

const image1 = require('../../assets/NY1.jpg');
const image2 = require('../../assets/NY2.jpg');
const image3 = require('../../assets/NY3.jpg');

export default function SampleJsx() {
  const monComposant = (
    <Image source={image1} />
  );

  const images = [
    <Image key="1" source={image1} />,
    <Image key="2" source={image2} />,
    <Image key="3" source={image3} />,
    <Image key="4" source={image1} />,
    <Image key="5" source={image2} />,
    <Image key="6" source={image3} />,
  ];

  return (
    <ScrollView horizontal>
      {monComposant}
      {images}
    </ScrollView>
  );
}
