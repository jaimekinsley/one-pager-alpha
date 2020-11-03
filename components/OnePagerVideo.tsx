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

  const videoId = onePagerData.pitchVideoLink.substring(onePagerData.pitchVideoLink.lastIndexOf("?") + 3);

  // remove this after Spotify works
  console.log(videoId)

  return (
    <ContentCard title='Pitch Video' isLoading={isLoading}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </ContentCard>
  );
};
