var filesList = ["home.png",
"backside_view.png",
"inside_entrance.png",
"living_room.png",
"living_room_2.png",
"living_room_3.png",
"kitchen.png",
"kitchen_2.png",
"dining.png",
"master_bedroom.png",
"master_bathroom_1.png",
"master_bathroom_2.png",
"bathtub.png",
"bedroom_2.png",
"bedroom_3.png",
"bedroom_4.png",
"common_bathroom.png",
"guest_bedroom_2.png",
"guest_bedroom_5.png",
"guest_bathroom.png",
"deck_view.png",
"deck_view_2.png",
"loft.png",
"loft_2.png",
"laundry.png"];

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