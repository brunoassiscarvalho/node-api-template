import { Express } from 'express';
import infoApi from './info/info.api';
import TrekApi from './trek/trek.api';

export default function api(app: Express): void {
  infoApi(app);
  TrekApi(app);
}
