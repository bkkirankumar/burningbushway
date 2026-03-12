var filesList = ["home.jpg",
"home_2.jpg",
"front.jpg",
"backside.jpg",
"backside_2.jpg",
"hallway.jpg",
"living_room.jpg",
"living_room_2.jpg",
"kitchen_dining.jpg",
"kitchen.jpg",
"kitchen_2.jpg",
"kitchen_3.jpg",
"kitchen_4.jpg",
"kitchen_5.jpg",
"kitchen_6.jpg",
"master_bedroom.jpg",
"master_bedroom_2.jpg",
"master_bathroom.jpg",
"master_bathroom_2.jpg",
"bedroom_2.jpg",
"bedroom_2_2.jpg",
"bedroom_3.jpg",
"bedroom_3_2.jpg",
"bedroom_4.jpg",
"bedroom_4_2.jpg",
"common_bathroom.jpg",
"guest_bedroom.jpg",
"guest_bedroom_2.jpg",
"guest_bathroom.jpg",
"loft.jpg",
"loft_2.jpg",
"laundry.jpg",
"deck.jpg",
"deck_2.png",
"deck_3.png",
"basement.jpg",
"basement_2.jpg",
"basement_media_room.jpg",
"aerial_front.jpg",
"aerial_left.jpg",
"aerial_right.jpg",
"aerial_back.jpg",
"aerial_back_3.jpg",
"aerial_community.jpg",
"aerial_back_2.jpg"]

const fs = require('fs');
const path = require('path');

const outputPath = './output';

function generateInfo(name, filename) {
  return `                            <!-- item begin -->
                            <div class="item">
                                <a href="images/gallery/${filename}" class="image-popup d-block hover">
                                    <div class="relative overflow-hidden rounded-1">
                                        <div class="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                                            View
                                        </div>
                                        <div class="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                                        <img src="images/gallery/${filename}" class="w-100 hover-scale-1-2" alt="">
                                        <div class="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                            <h4 class="text-light mb-3">${name}</h4>
                                        </div>
                                        <div class="gradient-edge-bottom abs w-100 h-50 op-5 bottom-0"></div>
                                    </div>
                                </a>
                            </div>
                            <!-- item end -->`;
}

try {
  var outputString = "";
  var convertedFileName = "";

  filesList.forEach(file => {
    convertedFileName = file;
    outputString += generateInfo(file.substring(0, file.indexOf(".")), convertedFileName) + "\r\n";
  });
  fs.writeFileSync(outputPath + "/output_ordered.txt", outputString);
} catch (err) {
  console.error('Error reading directory:', err);
}