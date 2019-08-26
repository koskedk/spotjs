import 'primereact/resources/primereact.css';
import './assets/theme/theme-maun.scss'
import './assets/layout/css/layout-maun.scss'
import 'primeicons/primeicons.css';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./favicon.ico";
import * as ssa from 'single-spa-react'

import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('stats', () => SystemJS.import('@portal/stats'), isActive.stats)
singleSpa.registerApplication('globe', () => SystemJS.import('@portal/globe'),  isActive.globe)

singleSpa.start()

