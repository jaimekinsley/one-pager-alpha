import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {

  if(!onePagerData.pitchVideoLink) {
    return null;
  }

  const paramsString = onePagerData.pitchVideoLink.split("?")[1];
  const paramsArray = paramsString.split('&')
  const paramsKeyValues = paramsArray.map((param) => param.split('='));
  const paramsObj = paramsKeyValues.reduce((map, prop) => {
    map[prop[0]] = prop[1];
    return map;
  }, {});
  const videoId = paramsObj['v'];

  let timeStart = 0;
  if(paramsObj['t']){
    timeStart = paramsObj['t'].slice(0, -1)
  };



  // remove this after Spotify works
  console.log({paramsString, paramsArray, paramsKeyValues, paramsObj, videoId, timeStart})

  return (
    <ContentCard title='Pitch Video' isLoading={isLoading}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=${timeStart}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </ContentCard>
  );
};
