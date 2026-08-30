// Host cities with coordinates and stadium info
const cities = {
    'Rio de Janeiro': { lat: -22.9068, lng: -43.1729, stadium: 'Estádio do Maracanã' },
    'Salvador': { lat: -12.9777, lng: -38.5016, stadium: 'Arena Fonte Nova' },
    'Brasília': { lat: -15.7801, lng: -47.9292, stadium: 'Estádio Nacional' },
    'São Paulo': { lat: -23.5505, lng: -46.6333, stadium: 'Arena Itaquera' },
    'Belo Horizonte': { lat: -19.9167, lng: -43.9345, stadium: 'Estádio Mineirão' },
    'Porto Alegre': { lat: -30.0346, lng: -51.2177, stadium: 'Estádio Beira-Rio' },
    'Fortaleza': { lat: -3.7319, lng: -38.5267, stadium: 'Arena Castelão' },
    'Recife': { lat: -8.0476, lng: -34.8770, stadium: 'Arena de Pernambuco' }
};

// Major Brazil attractions near host cities
const attractions = [
    { name: 'Christ the Redeemer', city: 'Rio de Janeiro', lat: -22.9519, lng: -43.2105, icon: '🗽' },
    { name: 'Sugarloaf Mountain', city: 'Rio de Janeiro', lat: -22.9486, lng: -43.1566, icon: '⛰️' },
    { name: 'Copacabana Beach', city: 'Rio de Janeiro', lat: -22.9711, lng: -43.1822, icon: '🏖️' },
    { name: 'Iguazu Falls', city: 'Porto Alegre', lat: -25.6953, lng: -54.4367, icon: '💧' },
    { name: 'Pelourinho', city: 'Salvador', lat: -12.9714, lng: -38.5124, icon: '🏛️' },
    { name: 'Amazon Theatre', city: 'Brasília', lat: -3.1302, lng: -60.0217, icon: '🎭' },
    { name: 'Ibirapuera Park', city: 'São Paulo', lat: -23.5875, lng: -46.6576, icon: '🌳' },
    { name: 'São Paulo Cathedral', city: 'São Paulo', lat: -23.5505, lng: -46.6396, icon: '⛪' },
    { name: 'Pampulha Modern Ensemble', city: 'Belo Horizonte', lat: -19.8511, lng: -43.9708, icon: '🏛️' },
    { name: 'Beach Park', city: 'Fortaleza', lat: -3.8103, lng: -38.4003, icon: '🎢' },
    { name: 'Recife Old Town', city: 'Recife', lat: -8.0631, lng: -34.8711, icon: '🏛️' }
];

// Match data
const matches = [
    { date: '2027-06-24', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group A — Brazil (Opening Match)', group: 'A', brazil: true },
    { date: '2027-06-25', city: 'Salvador', round: 'Group Stage', match: 'Group A', group: 'A', brazil: false },
    { date: '2027-06-25', city: 'Brasília', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-06-25', city: 'São Paulo', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-06-26', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-06-26', city: 'Porto Alegre', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-06-26', city: 'Fortaleza', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-06-26', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-06-27', city: 'Recife', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-06-27', city: 'Brasília', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-06-27', city: 'Salvador', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-06-27', city: 'São Paulo', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-06-28', city: 'Fortaleza', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-06-28', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-06-28', city: 'Porto Alegre', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-06-29', city: 'Salvador', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-06-29', city: 'Recife', round: 'Group Stage', match: 'Group A', group: 'A', brazil: false },
    { date: '2027-06-29', city: 'São Paulo', round: 'Group Stage', match: 'Group A — Brazil', group: 'A', brazil: true },
    { date: '2027-06-30', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-06-30', city: 'Porto Alegre', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-06-30', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-07-01', city: 'Brasília', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-07-01', city: 'Recife', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-07-01', city: 'São Paulo', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-07-02', city: 'Fortaleza', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-07-02', city: 'Salvador', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-07-02', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-07-03', city: 'Porto Alegre', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-07-03', city: 'Recife', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-07-03', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-07-04', city: 'Fortaleza', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-07-04', city: 'São Paulo', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-07-04', city: 'Salvador', round: 'Group Stage', match: 'Group A', group: 'A', brazil: false },
    { date: '2027-07-04', city: 'Brasília', round: 'Group Stage', match: 'Group A — Brazil', group: 'A', brazil: true },
    { date: '2027-07-05', city: 'Recife', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-07-05', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group B', group: 'B', brazil: false },
    { date: '2027-07-05', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-07-05', city: 'Porto Alegre', round: 'Group Stage', match: 'Group C', group: 'C', brazil: false },
    { date: '2027-07-06', city: 'Fortaleza', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-07-06', city: 'Brasília', round: 'Group Stage', match: 'Group D', group: 'D', brazil: false },
    { date: '2027-07-07', city: 'Recife', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-07-07', city: 'Belo Horizonte', round: 'Group Stage', match: 'Group E', group: 'E', brazil: false },
    { date: '2027-07-07', city: 'Salvador', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-07-07', city: 'Rio de Janeiro', round: 'Group Stage', match: 'Group F', group: 'F', brazil: false },
    { date: '2027-07-08', city: 'Fortaleza', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-07-08', city: 'São Paulo', round: 'Group Stage', match: 'Group G', group: 'G', brazil: false },
    { date: '2027-07-08', city: 'Brasília', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-07-08', city: 'Porto Alegre', round: 'Group Stage', match: 'Group H', group: 'H', brazil: false },
    { date: '2027-07-10', city: 'Fortaleza', round: 'Round of 16', match: '1A v 2B', group: null, brazil: false },
    { date: '2027-07-10', city: 'Recife', round: 'Round of 16', match: '1C v 2D', group: null, brazil: false },
    { date: '2027-07-11', city: 'Belo Horizonte', round: 'Round of 16', match: '1B v 2A', group: null, brazil: false },
    { date: '2027-07-11', city: 'São Paulo', round: 'Round of 16', match: '1D v 2C', group: null, brazil: false },
    { date: '2027-07-12', city: 'Porto Alegre', round: 'Round of 16', match: '1E v 2F', group: null, brazil: false },
    { date: '2027-07-12', city: 'Salvador', round: 'Round of 16', match: '1G v 2H', group: null, brazil: false },
    { date: '2027-07-13', city: 'Fortaleza', round: 'Round of 16', match: '1F v 2E', group: null, brazil: false },
    { date: '2027-07-13', city: 'Brasília', round: 'Round of 16', match: '1H v 2G', group: null, brazil: false },
    { date: '2027-07-16', city: 'Belo Horizonte', round: 'Quarter-Final', match: 'Winner M49 v Winner M50', group: null, brazil: false },
    { date: '2027-07-16', city: 'Rio de Janeiro', round: 'Quarter-Final', match: 'Winner M53 v Winner M54', group: null, brazil: false },
    { date: '2027-07-17', city: 'Fortaleza', round: 'Quarter-Final', match: 'Winner M51 v Winner M52', group: null, brazil: false },
    { date: '2027-07-17', city: 'São Paulo', round: 'Quarter-Final', match: 'Winner M55 v Winner M56', group: null, brazil: false },
    { date: '2027-07-20', city: 'São Paulo', round: 'Semi-Final', match: 'Winner M57 v Winner M58', group: null, brazil: false },
    { date: '2027-07-21', city: 'Rio de Janeiro', round: 'Semi-Final', match: 'Winner M59 v Winner M60', group: null, brazil: false },
    { date: '2027-07-24', city: 'São Paulo', round: 'Bronze Final', match: 'Losers of the two Semi-Finals', group: null, brazil: false },
    { date: '2027-07-25', city: 'Rio de Janeiro', round: 'Final', match: 'Winners of the two Semi-Finals', group: null, brazil: false }
];

let map;
let markers = {};
let attractionMarkers = [];
let cityLabels = [];
let filteredMatches = matches;
let distanceMode = false;
let selectedCities = [];
let distanceLine = null;
let attractionsVisible = false;

// Initialize the map
function initMap() {
    map = L.map('map').setView([-14.235, -51.9253], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Prevent map zoom on double tap (iOS)
    map.doubleClickZoom.disable();

    // Create markers for each city
    Object.keys(cities).forEach(cityName => {
        createMarker(cityName);
        createCityLabel(cityName);
    });

    // Initialize group checkboxes
    initializeGroupCheckboxes();
    
    // Update stats
    updateStats();
}

function createMarker(cityName) {
    const city = cities[cityName];
    const cityMatches = matches.filter(m => m.city === cityName);
    
    // Determine marker color based on matches
    const hasBrazilMatches = cityMatches.some(m => m.brazil);
    const hasFinals = cityMatches.some(m => m.round === 'Final' || m.round === 'Semi-Final');
    
    let markerColor = '#009c3b'; // Default green
    if (hasFinals) markerColor = '#002776'; // Blue for finals
    else if (hasBrazilMatches) markerColor = '#ffdf00'; // Yellow for Brazil matches
    
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${markerColor}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-weight: bold; color: ${markerColor === '#ffdf00' ? '#000' : '#fff'}; font-size: 12px;">${cityMatches.length}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    const marker = L.marker([city.lat, city.lng], { icon })
        .addTo(map)
        .on('click', () => handleMarkerClick(cityName));
    
    // Create popup content
    const popupContent = createPopupContent(cityName, cityMatches);
    marker.bindPopup(popupContent, { maxWidth: 300, className: 'match-popup' });
    
    markers[cityName] = marker;
}

function createCityLabel(cityName) {
    const city = cities[cityName];
    
    const labelIcon = L.divIcon({
        className: 'city-label',
        html: `<div style="font-weight: 700; font-size: 13px; color: #002776; white-space: nowrap; text-shadow: 1px 1px 2px rgba(255,255,255,0.9), -1px -1px 2px rgba(255,255,255,0.9), 1px -1px 2px rgba(255,255,255,0.9), -1px 1px 2px rgba(255,255,255,0.9);">${cityName}</div>`,
        iconSize: [0, 0],
        iconAnchor: [-15, 40]
    });
    
    const label = L.marker([city.lat, city.lng], { 
        icon: labelIcon,
        interactive: false,
        zIndexOffset: -1000
    }).addTo(map);
    
    cityLabels.push(label);
}

function createPopupContent(cityName, cityMatches) {
    const city = cities[cityName];
    let html = `<div class="match-popup">
        <h3>⚽ ${cityName}</h3>
        <p style="color: #666; font-size: 12px; margin-bottom: 10px;">${city.stadium}</p>
        <p style="font-weight: 600; margin-bottom: 10px;">Matches: ${cityMatches.length}</p>`;
    
    // Show first 5 matches in popup
    const displayMatches = cityMatches.slice(0, 5);
    displayMatches.forEach(match => {
        const matchClass = match.brazil ? 'brazil-match' : '';
        html += `<div class="match-item ${matchClass}">
            <div class="match-date">${formatDate(match.date)} - ${match.round}</div>
            <div class="match-details">${match.match}</div>
        </div>`;
    });
    
    if (cityMatches.length > 5) {
        html += `<p style="text-align: center; color: #666; font-size: 12px; margin-top: 10px;">+ ${cityMatches.length - 5} more matches</p>`;
    }
    
    html += '</div>';
    return html;
}

function initializeGroupCheckboxes() {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const container = document.getElementById('groupCheckboxes');
    
    groups.forEach(group => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `<input type="checkbox" value="${group}" checked> Group ${group}`;
        
        const checkbox = label.querySelector('input');
        checkbox.addEventListener('change', () => {
            label.classList.toggle('checked', checkbox.checked);
        });
        
        label.classList.add('checked');
        container.appendChild(label);
    });
}

function applyFilters() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const round = document.getElementById('roundFilter').value;
    const brazilOnly = document.getElementById('brazilOnly').checked;
    
    const selectedGroups = Array.from(document.querySelectorAll('#groupCheckboxes input:checked'))
        .map(cb => cb.value);
    
    filteredMatches = matches.filter(match => {
        // Date filter
        if (startDate && match.date < startDate) return false;
        if (endDate && match.date > endDate) return false;
        
        // Round filter
        if (round !== 'all' && match.round !== round) return false;
        
        // Brazil filter
        if (brazilOnly && !match.brazil) return false;
        
        // Group filter logic:
        // - If it's a group stage match, check if its group is selected
        // - If it's a knockout match (no group), only show if round filter is set to 'all' or specific knockout round
        if (match.group) {
            // Group stage match - must be in selected groups
            if (!selectedGroups.includes(match.group)) return false;
        } else {
            // Knockout match - only show if round filter allows it
            if (round === 'Group Stage') return false;
        }
        
        return true;
    });
    
    updateMarkers();
    updateStats();
}

function updateMarkers() {
    Object.keys(markers).forEach(cityName => {
        const cityMatches = filteredMatches.filter(m => m.city === cityName);
        const marker = markers[cityName];
        
        if (cityMatches.length === 0) {
            marker.setOpacity(0.3);
        } else {
            marker.setOpacity(1);
            
            // Update marker content
            const hasBrazilMatches = cityMatches.some(m => m.brazil);
            const hasFinals = cityMatches.some(m => m.round === 'Final' || m.round === 'Semi-Final');
            
            let markerColor = '#009c3b';
            if (hasFinals) markerColor = '#002776';
            else if (hasBrazilMatches) markerColor = '#ffdf00';
            
            const icon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="background-color: ${markerColor}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-weight: bold; color: ${markerColor === '#ffdf00' ? '#000' : '#fff'}; font-size: 12px;">${cityMatches.length}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            marker.setIcon(icon);
            
            // Update popup
            const popupContent = createPopupContent(cityName, cityMatches);
            marker.setPopupContent(popupContent);
        }
    });
}

function resetFilters() {
    document.getElementById('startDate').value = '2027-06-24';
    document.getElementById('endDate').value = '2027-07-25';
    document.getElementById('roundFilter').value = 'all';
    document.getElementById('brazilOnly').checked = false;
    
    document.querySelectorAll('#groupCheckboxes input').forEach(cb => {
        cb.checked = true;
        cb.parentElement.classList.add('checked');
    });
    
    applyFilters();
}

function updateStats() {
    document.getElementById('totalMatches').textContent = matches.length;
    document.getElementById('filteredMatches').textContent = filteredMatches.length;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function toggleDistanceMode() {
    distanceMode = !distanceMode;
    selectedCities = [];
    
    if (distanceLine) {
        map.removeLayer(distanceLine);
        distanceLine = null;
    }
    
    const distanceInfo = document.getElementById('distanceInfo');
    if (distanceMode) {
        distanceInfo.classList.add('visible');
        distanceInfo.innerHTML = '<h4>Distance Mode Active</h4><p>Click two cities to measure distance</p>';
    } else {
        distanceInfo.classList.remove('visible');
    }
}

function handleMarkerClick(cityName) {
    if (!distanceMode) return;
    
    selectedCities.push(cityName);
    
    if (selectedCities.length === 2) {
        calculateDistance(selectedCities[0], selectedCities[1]);
        selectedCities = [];
    } else {
        const distanceInfo = document.getElementById('distanceInfo');
        distanceInfo.innerHTML = `<h4>Distance Mode</h4><p>First city: <strong>${cityName}</strong></p><p>Click another city</p>`;
    }
}

function calculateDistance(city1Name, city2Name) {
    const city1 = cities[city1Name];
    const city2 = cities[city2Name];
    
    // Haversine formula for distance calculation
    const R = 6371; // Earth's radius in km
    const dLat = toRad(city2.lat - city1.lat);
    const dLon = toRad(city2.lng - city1.lng);
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(city1.lat)) * Math.cos(toRad(city2.lat)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    // Draw line between cities
    if (distanceLine) {
        map.removeLayer(distanceLine);
    }
    
    distanceLine = L.polyline([
        [city1.lat, city1.lng],
        [city2.lat, city2.lng]
    ], {
        color: '#ff0000',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);
    
    // Show distance info
    const distanceInfo = document.getElementById('distanceInfo');
    distanceInfo.innerHTML = `
        <h4>Distance Calculated</h4>
        <p><strong>${city1Name}</strong> to <strong>${city2Name}</strong></p>
        <p style="font-size: 20px; color: #009c3b; font-weight: bold; margin: 10px 0;">${Math.round(distance)} km</p>
        <p style="font-size: 14px; color: #666;">${Math.round(distance * 0.621371)} miles</p>
        <button class="btn" style="margin-top: 10px; padding: 8px;" onclick="toggleDistanceMode()">Close</button>
    `;
}

function toRad(degrees) {
    return degrees * Math.PI / 180;
}

function toggleAttractions() {
    attractionsVisible = !attractionsVisible;
    
    if (attractionsVisible) {
        // Create attraction markers
        attractions.forEach(attraction => {
            const attractionIcon = L.divIcon({
                className: 'attraction-marker',
                html: `<div style="font-size: 24px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">${attraction.icon}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([attraction.lat, attraction.lng], { icon: attractionIcon })
                .addTo(map)
                .bindPopup(`
                    <div style="text-align: center;">
                        <div style="font-size: 32px; margin-bottom: 5px;">${attraction.icon}</div>
                        <strong>${attraction.name}</strong>
                        <p style="font-size: 12px; color: #666; margin: 5px 0 0 0;">Near ${attraction.city}</p>
                    </div>
                `, { className: 'attraction-popup' });
            
            attractionMarkers.push(marker);
        });
    } else {
        // Remove attraction markers
        attractionMarkers.forEach(marker => map.removeLayer(marker));
        attractionMarkers = [];
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-sidebar');
    
    if (window.innerWidth <= 768 && 
        sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// Initialize on load - wait for all resources including Leaflet library
window.addEventListener('load', initMap);
