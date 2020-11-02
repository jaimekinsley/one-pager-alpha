import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerMapProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerMap = ({
  onePagerData,
  isLoading,
}: OnePagerMapProps) => {


  return (
    <ContentCard title='Map' isLoading={isLoading}>
      <h1>Testing</h1>
    </ContentCard>
  );
};
