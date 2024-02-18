function simulateGoto(gotoLabel: string): void {
    const state = { [gotoLabel]: true };
    try {
        if (state[gotoLabel]) {
            console.log('Jump to ' + gotoLabel);
        } else {
            console.log('Normal execution');
        }
    } finally {
        delete state[gotoLabel];
    }
}
simulateGoto('label1');