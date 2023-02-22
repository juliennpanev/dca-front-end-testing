import getDcaHolders from "./getDcaHolders.js";

const depositPeriodElement = document.getElementById('time');

async function calculateDepositWindow () {

    const currentHeight = await getDcaHolders.getHeight();
    try {

        const stopBlock = await fetch('https://nodes.wavesnodes.com/addresses/data/3PAFi86jNXNmgc4Fx4RnV6aJLXcW4zn99LJ/_stopDeposits');
        const keyValue = await stopBlock.json();
        const value = keyValue.value;
        if (currentHeight >= value) {
            depositPeriodElement.textContent = 'Deposits are halted!' 
        } else {
            depositPeriodElement.textContent = `Open untill block ${keyValue['value']}`
        }
    
    } catch {
        window.alert("Couldn't read data from DCA dApp");
    }
}
   



export default {
    calculateDepositWindow,
}
