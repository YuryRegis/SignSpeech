/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import { ROUTES } from './routes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: ROUTES.home,
            },
          },
          Learning: {
            screens: {
              LearningScreen: ROUTES.learning,
            },
          },
          // TabThree: {
          //   screens: {
          //     TabThreeScreen: "two",
          //   },
          // },
          // TabFour: {
          //   screens: {
          //     TabFourScreen: "two",
          //   },
          // },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;