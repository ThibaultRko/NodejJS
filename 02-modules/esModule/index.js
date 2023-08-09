import defaultImport, { namedExport } from './export.js';
import * as banane from './export.js';

defaultImport();
// ça fait planté l'application
// defaultImport.namedExport();
namedExport();

banane.default();
banane.namedExport();