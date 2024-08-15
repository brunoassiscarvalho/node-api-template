import { Express } from 'express';
import infoApi from './info/info.api';
import ExempleApi from './exemple/exemple.api';

export default function api(app: Express): void {
  infoApi(app);
  ExempleApi(app);
}
