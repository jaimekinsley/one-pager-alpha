import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFAQProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerFAQ = ({
  onePagerData,
  isLoading,
}: OnePagerFAQProps) => {

  return (
    <ContentCard title='FAQs' isLoading={isLoading}>
      <h3>testing</h3>
    </ContentCard>
  );
};
