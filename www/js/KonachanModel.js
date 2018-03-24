class KonachanModel extends AbstractDanbooruAPIModel {
	constructor() {
		super("https://konachan.com");
		this.name = "KON";
		this.ruleset.page = "&page=%PAGE%";
	}
}