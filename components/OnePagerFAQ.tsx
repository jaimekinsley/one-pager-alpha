import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Heading,
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
        Section 1 title
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <AccordionHeader>
      <Box flex="1" textAlign="left">
        Section 2 title
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </ContentCard>
  );
};
