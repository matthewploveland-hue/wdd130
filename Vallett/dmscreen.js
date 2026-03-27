const data = [
    {
    label: "Food",
    description:    `While meals in Dungeons and Dragons may not provide
                    sustainable bonuses without the Chef feat, it is a 
                    vital part of operations that could leave you in a 
                    bind if forgotten about. The pries of meals, as shown below, 
                    are not terribly high, though this chart presumes 
                    that food is of little to no issue to obtain. In places 
                    with harsh winters or that have recently been ransacked, 
                    the price may become astronomical, or perhaps there will 
                    simply be none for sale. Keep travel rations in mind, as 
                    long journeys to the next objective are frequently 
                    fraught with peril.`,
    items: [
        { name: "Squalid", detail: "3 copper" },
        { name: "Poor", detail: "5 copper" },
        { name: "Modest", detail: "3 silver" },
        { name: "Wealthy", detail: "8 silver" },
        { name: "Aristocratic", detail: "2 gold" }
    ]
    },
    {
    label: "Weapons",
    description:    `Swords, bows, clubs, and even guns can be a part of 
                        your arsenal depending on the setting. Weapons are the 
                        lifeblood of combat, allowing even low-level adventurers 
                        to dispatch enemy combatants. Whether playing a martial 
                        class or one with a greater focus on spellcasting, 
                        having some sort of weapon on you at all times is a must. 
                        Adventuring is not easy, and there are many out there 
                        who will make it even more difficult for you by causing 
                        a ruckus. Whether fighting back hordes of zombies, a coven 
                        of witches, or cutting the ropes that bind your allies, 
                        make sure you have something on hand.`,
    items: [
        { name: "Club", detail: "1 silver" },
        { name: "Dagger", detail: "2 gold" },
        { name: "Quarterstaff", detail: "2 silver" },
        { name: "Light Crossbow", detail: "25 gold" },
        { name: "Longsword", detail: "15 gold" },
        { name: "Rapier", detail: "25 gold" },
        { name: "Longbow", detail: "50 gold" }
    ]
    },
    {
    label: "Trinkets",
    description:    `Small items that are either important to your character
                        or someone else in the world. Trinkets in D&D are small,
                        curious items that have worth which cannot be shown on 
                        a stat sheet. Perhaps it is a bag of pocket sand that 
                        seems to refill itself slowly, an insignia showing loyalty 
                        to the crown, or a small memento of a loved one. The effect
                        of these trinkets are made by the role-playing that goes 
                        into them, they are as important or meaningless as you 
                        wish for them to be. Generally, having a memento or two 
                        for your character helps give them a more concrete 
                        background that other players can interact with.`,
    items: [
        { name: "Pocket lint", detail: "weighs more than it should" },
        { name: "Small skull", detail: "seems to turn and follow movement" },
        { name: "Key attached to a small lock", detail: "does not have a keyhole" },
        { name: "Small translucent cube", detail: "plays an old English lecture" },
        { name: "Canteen", detail: "makes a vaguely cherry flavored liquid" },
        { name: "Compass", detail: "points toward the bearer at all times"}
    ]
    },

    {
    label: "Armor",
    description: `The best way to keep oneself alive during a fight has been 
                    and always will be armor. Many of the types get rather expensive, 
                    but they are worth every copper spent. Provided the character 
                    is proficient in the armor, they can wear it without issue. 
                    Some characters prefer a light armor, allowing for their Dexterity 
                    to be useful in dodging attacks. Others prefer to find the 
                    heaviest metal they can find and drape it over themselves, 
                    becoming a highly deadly onion-shaped warrior. So long as you 
                    have the money and Strength score for it, 
                    armor is a must for every class.`,
    items: [
        { name: "Leather", detail: "5 gold" },
        { name: "Studded Leather", detail: "45 gold" },
        { name: "Scale Mail", detail: "50 gold" },
        { name: "Breastplate", detail: "400 gold" },
        { name: "Plate", detail: "1,500 gold" }
    ]
    },
    {
    label: "Supplies",
    description: `The best way to keep oneself alive during a fight has been 
                    and always will be armor. Many of the types get rather expensive, 
                    but they are worth every copper spent. Provided the character 
                    is proficient in the armor, they can wear it without issue. 
                    Some characters prefer a light armor, allowing for their Dexterity 
                    to be useful in dodging attacks. Others prefer to find the 
                    heaviest metal they can find and drape it over themselves, 
                    becoming a highly deadly onion-shaped warrior. So long as you 
                    have the money and Strength score for it, 
                    armor is a must for every class.`,
    items: [
        { name: "Bedroll", detail: "1 gold" },
        { name: "Map", detail: "4 gold" },
        { name: "Iron Pot", detail: "2 gold" },
        { name: "Torch", detail: "1 copper" },
        { name: "Caltrops", detail: "1 gold" },
        { name: "Crowbar", detail: "2 gold" },
        { name: "Ladder(10ft)", detail: "1 silver" },
        { name: "Hempen Rope(50ft)", detail: "1 gold" },
        { name: "Backpack", detail: "2 gold" },
        { name: "Tinderbox", detail: "5 silver" }
    ]
    }
];

let activeCat = 0;
let activeTab = 1;

function renderAll() {
    document.getElementById('cat-list').innerHTML = data.map((d, i) =>
    `<div class="list-item${i === activeCat ? ' active' : ''}" onclick="selectCat(${i})">${d.label}</div>`
    ).join('');

    document.getElementById('tabs').innerHTML = `
    <div class="tab${activeTab === 1 ? ' active' : ''}" onclick="selectTab(1)">Description</div>
    <div class="tab${activeTab === 0 ? ' active' : ''}" onclick="selectTab(0)">List</div>
    `;

    const cat = data[activeCat];
    const area = document.getElementById('content');

    if (activeTab === 0) {
    area.innerHTML = `<ul class="item-list">${cat.items.map(it =>
        `<li>${it.name} <span>${it.detail}</span></li>`
    ).join('')}</ul>`;
    } else {
    area.innerHTML = `
        <div class="panel-title">${cat.label}</div>
        <p class="panel-desc">${cat.description}</p>
    `;
    }
}

function selectCat(i) {
    activeCat = i;
    renderAll();
}

function selectTab(i) {
    activeTab = i;
    renderAll();
}
renderAll();