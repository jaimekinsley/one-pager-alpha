import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Flex, Divider } from "@chakra-ui/core";

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

import { BasicUsage } from './BasicUsage';

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  const [isPaywall, setIsPaywall]: [boolean, any] = React.useState(false);


  // function to push urls into local storage
  const SaveDataToLocalStorage = (data) => {
    let array = [];
    // Parse the serialized onePagerUrl back into an aray of objects
    array = JSON.parse(localStorage.getItem('visited')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    array.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('visited', JSON.stringify(array));
  }

  // Load data on first render.
  React.useEffect(() => {
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);

      // push onePagerUrl into local Storage
      SaveDataToLocalStorage(onePagerUrl);

      // save local storage to a variable
      let visitedSites = JSON.parse(localStorage.getItem('visited'));
      console.log(visitedSites)

      // start conditional to integrate paywall
      if(visitedSites.length > 2){
        console.log('display a paywall');
        console.log(isPaywall);
      // add a modal paywall
        setIsPaywall(true);
        console.log(isPaywall);
      }

      // when the user hits 'payment', remove the modal
      // created a new variable in localstorage for hasPaid
      // disable the visitedSites conditional if hasPaid is true

      // refactor if statement to account for duplicates in the visitedSites array

    });
  }, []);

  return (
    <Box bg='#f2f4f5'>
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

    {isPaywall && <BasicUsage />}

      <OnePagerOverview onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFounders onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFinances onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerVideo onePagerData={onePagerData} isLoading={isLoading} />

{/* conditionally render divider if there is a Pitch Video */}
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
