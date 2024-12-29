import {cpSync, rmdirSync, existsSync} from 'fs';

const distFolder = './dist/';
const siteFolder = './site/';

if (existsSync(siteFolder)) {
  rmdirSync(siteFolder, {recursive: true});
}

cpSync(distFolder, siteFolder, {recursive: true});
