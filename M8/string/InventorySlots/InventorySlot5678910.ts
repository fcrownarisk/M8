import '../ABCDEF/ABCD'
type InventorySlot = {
    axis: string;
    items: string;
}
function logInventoryLayout(slots: InventorySlot[]): void {
    slots.forEach((slot) => console.log(`${slot.axis}: ${slot.items}`));
}
const inventoryLayouts: Record<string, InventorySlot[]> = {
    'InventorySlots5': [
        { axis: 'x', items: '--- --- ---' },
        { axis: 'y', items: '||| ||| |||' },
        { axis: 'z', items: '/// /// ///' },
        { axis: 't5',items: '=== === ===' }
    ],
    'InventorySlots6': [
        { axis: 'x1', items: '??? ??? ???' },
        { axis: 'y1', items: '$$$ $$$ $$$' },
        { axis: 'z1', items: '!!! !!! !!!' },
        { axis: 't10',items: '@@@ @@@ @@@' }
    ],
    'InventorySlots7': [
        {axis:'z11',items:'()()() ()()() ()()()'},
        {axis:'z22',items:'[][][] [][][] [][][]'},
        {axis:'z33',items:'{}{}{} {}{}{} {}{}{}'},
        {axis:'z44',items:'^ ^ ^  ^ ^ ^  ^ ^ ^ '},
    ],
    'InventorySlots8': [
        {axis:'zz1',items:'AABBCCDD'},
        {axis:'zz2',items:'DDCCBBAA'},
        {axis:'zz3',items:'ABABCCDD'},
        {axis:'zz4',items:'ABCDDCBA'},
    ],

    'InventorySlots9': [
        { axis: 't1', items: 'ABABCDCD' },
        { axis: 't2', items: 'DCDCBABA' },
        { axis: 't3', items: 'efgh||hgfe' },
        { axis: 't4', items: 'ABCD||DCBA' }
    ],
    'InventorySlots10': [
        { axis: 't6', items: 'ABAB||DCDC' },
        { axis: 't7', items: 'ABAB\\//CDCD' },
        { axis: 't8', items: 'AB|/BA/|CD|/DC' },
        { axis: 't9', items: 'CD&&DC\\//AB&&BA' }
    ]
}
logInventoryLayout(inventoryLayouts['InventorySlots1'])
logInventoryLayout(inventoryLayouts['InventorySlots2'])
logInventoryLayout(inventoryLayouts['InventorySlots3'])
logInventoryLayout(inventoryLayouts['InventorySlots4'])