import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import { Progress } from "@chakra-ui/core";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    return '$' + `${financeNumber}`
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  // Calculates the percentage to be used in Progress Bar
  const valueToPercent = (value: number, max: number) => {
    return((value) * 100) / (max)
  }

  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <Progress value={(valueToPercent(onePagerData.fundsRaisedInStage, onePagerData.fundraisingStageGoal))} />
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
      <SubHeading>
        Fundraising Details:
      </SubHeading>
      <Text fontSize='sm' marginTop='5px'>
      {onePagerData.fundraisingDetails}
        </Text>
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
