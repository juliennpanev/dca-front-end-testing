const participantsCountElement = document.getElementById('total-persons')

async function getHeight () {
    try {
        const req = await fetch('https://nodes.wavesnodes.com/blocks/height');
        const data = await req.json();
        return data.height;
    } catch (e) {
        window.alert(e.data);
    }
}


async function getParticipants() {
    let height = await getHeight();
    try {
        const req = await fetch(`https://nodes.wavesnodes.com/assets/FGe2fT41osaHcE6JRKtXbUwHaWFRB4Ygye9vS5hRJWJy/distribution/${height - 1}/limit/50`);
        const data = await req.json();
        const holdersCount = Object.keys(data.items).length;
        participantsCountElement.textContent = holdersCount;
    
    }
    catch (e) {
        console.log('getDCAHolders.js')
        console.log(e)
    }
    
}

export default {
    getParticipants,
    getHeight,
};