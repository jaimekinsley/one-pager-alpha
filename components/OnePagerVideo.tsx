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

  // this parses the pitchVideoLink to account for time start on the Spotify video. In practice, it would be better to have all OnePage users submit the Embed link from YouTube that would not require any transformation.

    let url = new URL(onePagerData.pitchVideoLink);
    let params = new URLSearchParams(url.search.substring(1));
    let videoId = params.get('v')
    let timeStart = 0;
    if(params.get('t') != null){
      let timeStart = params.get('t').slice(0, -1)
  }

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
