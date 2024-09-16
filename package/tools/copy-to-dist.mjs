import {readdirSync, lstatSync, cpSync, rmdirSync, rmSync, existsSync} from 'fs';

const packageFolder = './package/';
const packageSrcFolder = `${packageFolder}src/`;
const packageDistFolder = `${packageFolder}dist/`;
const distFolder = './dist/';
const distSrcFolder = `${distFolder}src/`;
const distDistFolder = `${distFolder}dist/`;

if (existsSync(distFolder)) {
  rmdirSync(distFolder, {recursive: true});
}

cpSync(packageSrcFolder, distSrcFolder, {recursive: true});

cpSync(packageDistFolder, distDistFolder, {recursive: true});
rmdirSync(packageDistFolder, {recursive: true});
rmSync(`${distDistFolder}/esm/package.json`);
rmSync(`${distDistFolder}/cjs/package.json`);
rmSync(`${distDistFolder}/types/package.json`);
removeSpecFiles(distSrcFolder);

cpSync('./LICENSE.txt', `${distFolder}LICENSE.txt`);
cpSync('./README.md', `${distFolder}README.md`);
cpSync('./CONTRIBUTING.md', `${distFolder}CONTRIBUTING.md`);
cpSync('./CODE_OF_CONDUCT.md', `${distFolder}CODE_OF_CONDUCT.md`);
cpSync(`${packageFolder}package.json`, `${distFolder}package.json`);

function removeSpecFiles(folder) {
  readdirSync(folder).forEach(item => {
    const itemPath = folder + item;
    if (lstatSync(itemPath).isDirectory()) {
      removeSpecFiles(`${itemPath}/`);
    } else if (itemPath.endsWith('.spec.ts')) {
      rmSync(itemPath);
    }
  });
}
