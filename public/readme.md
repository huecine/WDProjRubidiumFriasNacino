Since pages are updated, previous wireframes submitted also apply to the data storage wireframes

Page Update #1 (Pet Page):

The first web page that will be updated with the game page where the players will see the updates to their pets hunger, hygiene, energy, and fun stats. Some of these stats may increase or decrease due to the choices the player makes such as buying an item may increase the pet's fun level or making food may increase the pet's hunger. These stats will decrease over time as well. This data will be updated whenever the player does an action such as the ones mentioned. It will be used when displayed in the game page and when these stats reach 0, the pet will run away.

Type of Data: Pet Statistics Modifications
Purpose: To implement the modifications of pet statistic changes (actions or decreasing) that come from items bought from the shop/gacha. The first four key-value pairs pertain to modifications for each of the four pet statistics, meanwhile the last pair pertains to the rate at which the pet statistic bars decay.
JSON Format:
petstatsmod {
hungermod: array-of-numbers;
hygienemod: array-of-numbers;
energymod: array-of-numbers;
funmod: array-of-numbers;
slowmod: array-of-numbers;	
}
Wireframe: Divs above the stat divs will show the modifiers.. Data is stored/changed via shop buttons whenever an item is rolled or bought

Type of Data: Pet Statistics
Purpose: To upkeep the accurate display of pet statistics in the main game web page, and monitor the triggering of other dialogue (game over, etc.)
JSON Format:
petstats {
	hunger: number;
	hygiene: number;
	energy: number;
	fun: number;
}
Wireframe: Save stats via JS, display in game page

Page Update #2 (Store Page):

The second wireframe that will be updated will be the Store where the money will be updated when a player buys something or does the gacha in which the money will decrease. The money will increase when —. This data will be used when the player buys something and the data that will be updated in the game page as mentioned above in the last paragraph.

Type of Data: User Account’s Information
Purpose: To store information related to the user account/pet owner that are external/general to the pet and game mechanics.
JSON Format:
ownerinfo {
	name: string;
	balance: number;
}
Wireframe:
Change via Edit Name button, display new edited name in div
Display balance through balance div, changes come via JS

Miscellaneous Data Storage:
Type of Data: User Inventory
Purpose: To track items bought and owned by the user in various areas of the game (shop/gacha/kitchen/room) in order to avoid duplicates and error in cash balance, and to use/display the items in other webpages of the game.
JSON Format:
inventory {
	shop: array;
	gacha: array;
	food: array;
	room: array;
}
Wireframe:
Show inventory in inv div in game, shop, and kitchen pages. Saved/changed whenever items are bought

Type of Data: Pet Information
Purpose: To track information about the pet that may be displayed in various web pages of the game and that may be useful for general game mechanics.
JSON Format:
petinfo {
	name: string;
	birthdate: string-in-date-format;
	age: number-of-hours;
}
Wireframe:
Display name in game page, edit name button
Birthdate and age are displayed in home and game page
