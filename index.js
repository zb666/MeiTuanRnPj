/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import Launcher from './js/Launcher/launcher'; //-------------- ./代表的是回到上一级的目录也就MeiTuanRnPj这个文件夹之下,然后再进入到Js文件夹之下
import {Navigator} from "react-native-deprecated-custom-components"

/**
 * abstract class  Navigator{
 *     Object component
 *
 *     constuct(){
 *         component= initialRoute()
 *
 *     }
 *
 *  abstract initialRoute(component );
 * onDraw(){   renderScene
 *
 *     return Component
 *
 * }
 * }
 */
class MeiTuan extends Component {
    render(): React.ReactNode {
        return <Navigator
            initialRoute={{
                name: "启动页",
                component: Launcher
            }}
            renderScene={(router, navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>;

            }
            }
        />;
    }

}

AppRegistry.registerComponent(appName, () => MeiTuan);
