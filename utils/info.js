const infoIcons = document.querySelectorAll('.bi')
const infoWindows = document.getElementsByName('info-window')

function showInfoWindow() {
    for (let i = 0; i < infoIcons.length; i++) {
        const element = infoIcons[i];
        const infoWindow = infoWindows[i];
        element.addEventListener('click', (e) => {
            e.preventDefault();
            if (infoWindow.style.display == 'none') {
                infoWindow.style.display = 'block'
            } else {
                infoWindow.style.display = 'none'
            }
        })
    }
}

export default showInfoWindow;