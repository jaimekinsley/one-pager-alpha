import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/core";

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
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Year Founded
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
          {onePagerData.founded}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Revenue
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
           {onePagerData.revenue}
          </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Number of Employees
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
           {onePagerData.employees}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ContentCard>
  );
};
