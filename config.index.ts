import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   climacellAPIKey: '${process.env.CLIMACELL_API_KEY}'
};
`;
console.log(process.env.CLIMACELL_API_KEY)
writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});