import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initBurgerMenu} from './modules/init-burger-menu';
import {initSliders} from './modules/init-sliders';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initBurgerMenu();
initSliders();
