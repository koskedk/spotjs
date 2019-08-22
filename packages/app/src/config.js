import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('globe', () => SystemJS.import('@portal/globe'), isActive.globe)
singleSpa.registerApplication('stats', () => SystemJS.import('@portal/stats'), isActive.stats)

singleSpa.start()
