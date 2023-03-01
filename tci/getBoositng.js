const boostingInfoElement = document.getElementById('wx-locked');

async function getLockedInBoosting() {
    const req = await fetch('http://20.7.14.174:6869/addresses/data/3PJL8Hn8LACaSBWLQ3UVhctA5cTQLBFwBAP/%25s%25d%25s__paramByUserNum__10548__amount')
    const data = await req.json()
    let formatAmount = (data.value / Math.pow(10, 8)).toFixed(4);
    boostingInfoElement.textContent = `${formatAmount} WX`;
}


export default getLockedInBoosting;