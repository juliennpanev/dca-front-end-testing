async function getStakedCapital(address, element) {
    try {
        const req = await fetch('https://nodes.wavesnodes.com/addresses/data/' + address + '/_treasury');
        const data = await req.json();
        element.textContent = data.value / Math.pow(10, 8);
        return req;
    } catch(e) {
        window.alert(e.data);
    }

    
}

export default getStakedCapital;