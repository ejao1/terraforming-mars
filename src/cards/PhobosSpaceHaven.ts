
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { SpaceName } from "../SpaceName";

export class PhobosSpaceHaven implements IProjectCard {
    public cost: number = 25;
    public tags: Array<Tags> = [Tags.SPACE, Tags.CITY];
    public name: string = "Phobos Space Haven";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Increase your titanium production 1 step and place a city tile on the reserved area. Gain 3 victory points.";
    public description: string = "The doorway to mars.";
    public play(player: Player, game: Game): Promise<void> {
        try { game.addCityTile(player, SpaceName.PHOBOS_SPACE_HAVEN); }
        catch (err) { return Promise.reject(err); }
        player.titaniumProduction++;
        player.victoryPoints += 3;
        return Promise.resolve();
    }
}
