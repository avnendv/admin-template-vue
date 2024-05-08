import type { RouteRecordRaw } from 'vue-router'
import outsideLayout from './outsideLayout'
import staticModules from './staticModules'

export const routes: RouteRecordRaw[] = [...staticModules, ...outsideLayout]
