
const LANDING_DATA_INTERVAL = 300000; // re-fetch every 5 minutes

let landingData = {};

function fetchData(dataSource) {
    fetch(`${DATA_ENDPOINT}/${dataSource}.json`)
        .then(r => r.text())
        .then(data => {
            landingData[dataSource] = data;
        })
        .catch(err => {
            console.warn(`Error fetching landing data: ${err}`);
        });
}

export function fetchLandingData(){

    setTimeout(fetchLandingData, LANDING_DATA_INTERVAL); // refreshes every 5 minutes (as if this was a real site :-)

    fetchData('carOfTheWeek');
    fetchData('makes');
    fetchData('models');
}

export function getLandingData(){
    return landingData;
}