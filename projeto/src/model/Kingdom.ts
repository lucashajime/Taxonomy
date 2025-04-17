import Domain from "./Domain";

export default class Kingdom extends Domain {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        public nutrition: 'Autotroph' | 'Heterotroph' 
    ) {
        super(cellType);
    }
}