"use strict";

let hikes = [
   {
      id: "H101",
      name: "Birding Loop",
      description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
      scenicImage: "../tb_images/birding_loop_1.png",
      trailMapImage: "../tb_images/birding_loop_2.png",
      length: "2.3 miles",
      difficulty: 2
   },
   {
      id: "H102",
      name: "Deep Blue Pool Trail",
      description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
      scenicImage: "../tb_images/deep_blue_1.png",
      trailMapImage: "../tb_images/deep_blue_2.png",
      length: "2 miles",
      difficulty: 2
   },
   {
      id: "H103",
      name: "Overlook Trail",
      description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
      scenicImage: "../tb_images/overlook_trail_1.png",
      trailMapImage: "../tb_images/overlook_trail_2.png",
      length: ".7 miles",
      difficulty: 2
   },
];

// Populate the dropdown with hikes
function populateHikesDropdown() {
   const select = document.getElementById('hikes');
   hikes.forEach(hike => {
      const option = new Option(hike.name, hike.id);
      select.add(option);
   });
}

// Display details of the selected hike
function showHikeDetails() {
   const selectedId = document.getElementById('hikes').value;
   const hike = hikes.find(h => h.id === selectedId);
   if (hike) {
      document.getElementById('hike-name').textContent = hike.name;
      document.getElementById('hike-description').textContent = hike.description;
      document.getElementById('hike-length').textContent = `Length: ${hike.length}`;
      document.getElementById('hike-difficulty').textContent = `Difficulty: ${hike.difficulty}`;
      document.getElementById('scenic-image').src = hike.scenicImage;
      document.getElementById('scenic-image').alt = `Scenic view of ${hike.name}`;
      document.getElementById('trail-map-image').src = hike.trailMapImage;
      document.getElementById('trail-map-image').alt = `Trail map of ${hike.name}`;
      document.getElementById('hike-details').style.display = 'block';
   }
}

// Initialize the page by populating the dropdown
document.addEventListener('DOMContentLoaded', populateHikesDropdown);