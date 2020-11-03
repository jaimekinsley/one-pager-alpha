import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerMapProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

// interface MyMap {
//   mapType: google.maps.MapTypeId,
//   mapTypeControl ?: boolean;
// }

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

export const OnePagerMap = ({
  onePagerData,
  isLoading,
  // mapType,
  // mapTypeControl = false
}: OnePagerMapProps) => {

  return (
    <ContentCard isLoading={isLoading}>

    </ContentCard>
  );
};
