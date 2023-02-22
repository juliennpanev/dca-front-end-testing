import getStakedCapital from "../utils/calcBaseCapital.js";


export class Dapp {
    constructor (address) {
        this.address = address;
    }

    async pullStakedBalance() {
        const plutoBtcDcaTeasuryElement = document.querySelector('#Pluto-Bitcoin #upcoming-round-total')
        return getStakedCapital(this.address, plutoBtcDcaTeasuryElement)
    }

    async getDappData(address) {
        const req = await fetch('https://nodes.wavesnodes.com/addresses/data/' + address);
        return await req.json();
    }

    async getState() {
        return await KeeperWallet.publicState();
    }

}