/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Parent from './Parent'
import {name as appName} from './app.json';
import Main from './js/Main/main.js'
AppRegistry.registerComponent(appName, () => Main);
