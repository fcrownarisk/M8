type InventorySlot = {
    axis: string;
    items: string;
}
function logInventoryLayout(slots: InventorySlot[]): void {
    slots.forEach((slot) => console.log(`${slot.axis}: ${slot.items}`))
}
const inventoryLayouts: Record<string, InventorySlot[]> = {
    'InventorySlots1': [
        { axis: 'x', items: '-- -- -- --' },
        { axis: 'y', items: '|| || || ||' },
        { axis: 'z', items: '~~ ~~ ~~ ~~' },
        { axis: 't', items: '\\ \\ \\ \\' }
    ],
    'InventorySlots2': [
        { axis: 'x1', items: '?? ?? ?? ??' },
        { axis: 'y1', items: '$$ $$ $$ $$' },
        { axis: 'z1', items: '!! !! !! !!' },
        { axis: 't1', items: '@@ @@ @@ @@' }
    ],
    'InventorySlots3': [
        { axis: 'z1', items: '()() ()() ()() ()()' },
        { axis: 'z2', items: '[][] [][] [][] [][]' },
        { axis: 'z3', items: '{}{} {}{} {}{} {}{}' },
        { axis: 'z4', items: '<><> <><> <><> <><>' }
    ],
    'InventorySlots4': [
        { axis: 'zz1', items: '++ ++ ++ ++' },
        { axis: 'zz2', items: '-- -- -- --' },
        { axis: 'zz3', items: '** ** ** **' },
        { axis: 'zz4', items: '%% %% %% %%' }
    ]
}
logInventoryLayout(inventoryLayouts['InventorySlots1'])
logInventoryLayout(inventoryLayouts['InventorySlots2'])
logInventoryLayout(inventoryLayouts['InventorySlots3'])
logInventoryLayout(inventoryLayouts['InventorySlots4'])
