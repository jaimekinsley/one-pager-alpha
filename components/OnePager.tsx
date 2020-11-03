import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Flex, Divider } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { getOnePagerData } from '../data/dataService';
import { EMPTY_ONE_PAGER } from '../data/onepagers';
import { ContentCard } from './ContentCard';
import { Header } from './Header';
import { OnePagerOverview } from './OnePagerOverview';
import { OnePagerFounders } from './OnePagerFounders';
import { OnePagerFinances } from './OnePagerFinances';
import { OnePagerVideo } from './OnePagerVideo';
import { OnePagerFAQ } from './OnePagerFAQ';

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  // Load data on first render.
  React.useEffect(() => {
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);


// stackoverflow
// let array = [];
// array.push(JSON.parse(localStorage.getItem('visited')));
// localStorage.setItem('visited', JSON.stringify(array));

const SaveDataToLocalStorage = (data) => {
    let array = [];
    // Parse the serialized onePagerUrl back into an aray of objects
    array = JSON.parse(localStorage.getItem('visited')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    array.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('visited', JSON.stringify(array));
}

SaveDataToLocalStorage(onePagerUrl);

let visitedSites = JSON.parse(localStorage.getItem('visited'));
console.log(visitedSites)

    });
  }, []);

  return (
    <Box bg='#f2f4f5'>
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <OnePagerOverview onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFounders onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFinances onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerVideo onePagerData={onePagerData} isLoading={isLoading} />

      {onePagerData.pitchVideoLink && <Diveder50 />}

      <OnePagerFAQ onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <ContentCard isLoading={false}>
        <Flex justifyContent='center'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Flex>
      </ContentCard>
      <Box h='20'></Box>
    </Box>
  );
};

const Diveder50 = () => <Divider width='50%' />;
