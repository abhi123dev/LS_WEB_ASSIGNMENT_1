// java script code for main page

function navigateTo(selectElement) {
    const value = selectElement.value;
    if (value) {
        window.location.href = value;
    }
}
function resetSelectMenu() {
    const navSelect = document.querySelector('.nav-select');
    navSelect.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const vehicles = [
        { name: 'Jeep', description: 'A versatile vehicle for all terrains.' },
        { name: 'Motorbike', description: 'Fast and agile for quick maneuvers.' },
        { name: 'Monster Truck', description: 'Large and powerful for tough climbs.' },
        { name: 'Tractor', description: 'A robust vehicle with excellent climbing capabilities.'},
        { name: 'Race Car', description: 'A high-speed vehicle perfect for flat, straight tracks.'},
        { name: 'Quad Bike', description: 'A four-wheeled vehicle with decent stability and speed.'},
        { name: 'Tourist Bus ', description: 'A large vehicle with high fuel capacity but slower acceleration.'},
        { name: 'Dune Buggy', description: 'A lightweight vehicle optimized for sandy terrains.'},
        { name: 'Snowmobile', description: 'Perfect for snowy tracks, offering great control and speed.'},
        { name: 'Tank', description: 'A heavily armored vehicle with exceptional durability and climbing power.'},
        { name: 'Hovercraft', description: 'A unique vehicle that hovers over surfaces, minimizing friction.'},
        { name: 'Fire Truck ', description: 'A heavy vehicle with a powerful water cannon for added fun.'},
        { name: 'Super Diesel 4x4 ', description: 'A high-performance truck with excellent off-road capabilities.'},
        { name: 'Sports Car', description: 'A sleek vehicle built for speed and agility.'},
        { name: 'Formula 1', description: 'A top-tier racing car designed for maximum speed and precision.'}
    ];

    const vehicleSelect = document.createElement('select');
    vehicles.forEach(vehicle => {
        const option = document.createElement('option');
        option.value = vehicle.name;
        option.textContent = vehicle.name;
        vehicleSelect.appendChild(option);
    });

    const vehicleInfo = document.createElement('div');
    document.querySelector('#interactive').appendChild(vehicleSelect);
    document.querySelector('#interactive').appendChild(vehicleInfo);

    vehicleSelect.addEventListener('change', (event) => {
        const selectedVehicle = vehicles.find(vehicle => vehicle.name === event.target.value);
        vehicleInfo.textContent = selectedVehicle ? selectedVehicle.description : '';
    });
});

document.getElementById('overview').onclick = function() {
    
    window.location.href = 'overview.html';
};

document.getElementById('highlights').onclick = function() {
    
    window.location.href = 'highlights.html';
};

document.getElementById('get-started').onclick = function() {
    
    window.location.href = 'get.html';
};

document.getElementById('quiz').onclick = function() {
    
    window.location.href = 'quiz.html';
};
