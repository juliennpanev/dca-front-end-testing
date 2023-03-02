const boostingInfoElement = document.getElementById('wx-locked');

async function getLockedInBoosting() {
    const req = await fetch('https://nodes.wavesnodes.com/addresses/data/3PJL8Hn8LACaSBWLQ3UVhctA5cTQLBFwBAP/%25s%25d%25s__paramByUserNum__10548__amount')
    const data = await req.json()
    let formatAmount = (data.value / Math.pow(10, 8)).toFixed(4);
    boostingInfoElement.textContent = `${formatAmount} WX`;
}


export default getLockedInBoosting;