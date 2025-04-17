import Species from "../model/Species";
import { CreatureData } from "../view/CreatureData";

export default class TaxonomyControl {
    public createSpecies(dados: CreatureData): Species {

        if(!dados.scientificName.indexOf(' ')) {
            throw new Error('Nome científico inválido. Use o formato "Gênero Espécie".');
        }

        return new Species (
            dados.cellType,
            dados.nutrition,
            dados.symmetry,
            dados.skeletalSystem,
            dados.locommotion,
            dados.reproduction,
            dados.morphologicalTraits,
            dados.scientificName,
            dados.habitat
        );
    }


}