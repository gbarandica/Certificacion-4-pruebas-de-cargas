/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 3437.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 184.0], [1.0, 184.0], [1.1, 185.0], [1.2, 185.0], [1.3, 185.0], [1.4, 185.0], [1.5, 185.0], [1.6, 185.0], [1.7, 185.0], [1.8, 185.0], [1.9, 185.0], [2.0, 185.0], [2.1, 185.0], [2.2, 185.0], [2.3, 185.0], [2.4, 185.0], [2.5, 185.0], [2.6, 185.0], [2.7, 185.0], [2.8, 185.0], [2.9, 185.0], [3.0, 185.0], [3.1, 185.0], [3.2, 185.0], [3.3, 185.0], [3.4, 185.0], [3.5, 185.0], [3.6, 185.0], [3.7, 185.0], [3.8, 185.0], [3.9, 185.0], [4.0, 186.0], [4.1, 186.0], [4.2, 186.0], [4.3, 186.0], [4.4, 186.0], [4.5, 186.0], [4.6, 186.0], [4.7, 186.0], [4.8, 186.0], [4.9, 186.0], [5.0, 186.0], [5.1, 186.0], [5.2, 186.0], [5.3, 186.0], [5.4, 186.0], [5.5, 186.0], [5.6, 186.0], [5.7, 186.0], [5.8, 186.0], [5.9, 186.0], [6.0, 186.0], [6.1, 186.0], [6.2, 186.0], [6.3, 186.0], [6.4, 186.0], [6.5, 186.0], [6.6, 186.0], [6.7, 186.0], [6.8, 186.0], [6.9, 186.0], [7.0, 186.0], [7.1, 186.0], [7.2, 186.0], [7.3, 186.0], [7.4, 186.0], [7.5, 186.0], [7.6, 186.0], [7.7, 186.0], [7.8, 186.0], [7.9, 186.0], [8.0, 186.0], [8.1, 186.0], [8.2, 186.0], [8.3, 186.0], [8.4, 187.0], [8.5, 187.0], [8.6, 187.0], [8.7, 187.0], [8.8, 187.0], [8.9, 187.0], [9.0, 187.0], [9.1, 187.0], [9.2, 187.0], [9.3, 187.0], [9.4, 187.0], [9.5, 187.0], [9.6, 187.0], [9.7, 187.0], [9.8, 187.0], [9.9, 187.0], [10.0, 187.0], [10.1, 187.0], [10.2, 187.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 187.0], [11.1, 187.0], [11.2, 187.0], [11.3, 187.0], [11.4, 187.0], [11.5, 187.0], [11.6, 187.0], [11.7, 187.0], [11.8, 187.0], [11.9, 187.0], [12.0, 187.0], [12.1, 187.0], [12.2, 187.0], [12.3, 187.0], [12.4, 187.0], [12.5, 187.0], [12.6, 187.0], [12.7, 187.0], [12.8, 187.0], [12.9, 187.0], [13.0, 187.0], [13.1, 187.0], [13.2, 188.0], [13.3, 188.0], [13.4, 188.0], [13.5, 188.0], [13.6, 188.0], [13.7, 188.0], [13.8, 188.0], [13.9, 188.0], [14.0, 188.0], [14.1, 188.0], [14.2, 188.0], [14.3, 188.0], [14.4, 188.0], [14.5, 188.0], [14.6, 188.0], [14.7, 188.0], [14.8, 188.0], [14.9, 188.0], [15.0, 188.0], [15.1, 188.0], [15.2, 188.0], [15.3, 188.0], [15.4, 188.0], [15.5, 188.0], [15.6, 188.0], [15.7, 188.0], [15.8, 188.0], [15.9, 188.0], [16.0, 188.0], [16.1, 188.0], [16.2, 188.0], [16.3, 188.0], [16.4, 188.0], [16.5, 188.0], [16.6, 188.0], [16.7, 188.0], [16.8, 188.0], [16.9, 188.0], [17.0, 188.0], [17.1, 188.0], [17.2, 188.0], [17.3, 188.0], [17.4, 188.0], [17.5, 188.0], [17.6, 188.0], [17.7, 188.0], [17.8, 188.0], [17.9, 188.0], [18.0, 189.0], [18.1, 189.0], [18.2, 189.0], [18.3, 189.0], [18.4, 189.0], [18.5, 189.0], [18.6, 189.0], [18.7, 189.0], [18.8, 189.0], [18.9, 189.0], [19.0, 189.0], [19.1, 189.0], [19.2, 189.0], [19.3, 189.0], [19.4, 189.0], [19.5, 189.0], [19.6, 189.0], [19.7, 189.0], [19.8, 189.0], [19.9, 189.0], [20.0, 189.0], [20.1, 189.0], [20.2, 189.0], [20.3, 189.0], [20.4, 189.0], [20.5, 189.0], [20.6, 189.0], [20.7, 189.0], [20.8, 189.0], [20.9, 189.0], [21.0, 189.0], [21.1, 189.0], [21.2, 189.0], [21.3, 189.0], [21.4, 189.0], [21.5, 189.0], [21.6, 189.0], [21.7, 189.0], [21.8, 189.0], [21.9, 189.0], [22.0, 190.0], [22.1, 190.0], [22.2, 190.0], [22.3, 190.0], [22.4, 190.0], [22.5, 190.0], [22.6, 190.0], [22.7, 190.0], [22.8, 190.0], [22.9, 190.0], [23.0, 190.0], [23.1, 190.0], [23.2, 190.0], [23.3, 190.0], [23.4, 190.0], [23.5, 190.0], [23.6, 190.0], [23.7, 190.0], [23.8, 190.0], [23.9, 190.0], [24.0, 190.0], [24.1, 190.0], [24.2, 190.0], [24.3, 190.0], [24.4, 190.0], [24.5, 190.0], [24.6, 190.0], [24.7, 191.0], [24.8, 191.0], [24.9, 191.0], [25.0, 191.0], [25.1, 191.0], [25.2, 191.0], [25.3, 191.0], [25.4, 191.0], [25.5, 191.0], [25.6, 191.0], [25.7, 191.0], [25.8, 191.0], [25.9, 191.0], [26.0, 191.0], [26.1, 191.0], [26.2, 191.0], [26.3, 192.0], [26.4, 192.0], [26.5, 192.0], [26.6, 192.0], [26.7, 192.0], [26.8, 192.0], [26.9, 192.0], [27.0, 192.0], [27.1, 192.0], [27.2, 192.0], [27.3, 193.0], [27.4, 193.0], [27.5, 193.0], [27.6, 193.0], [27.7, 193.0], [27.8, 193.0], [27.9, 193.0], [28.0, 193.0], [28.1, 193.0], [28.2, 193.0], [28.3, 193.0], [28.4, 193.0], [28.5, 193.0], [28.6, 193.0], [28.7, 194.0], [28.8, 194.0], [28.9, 194.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 194.0], [29.5, 194.0], [29.6, 194.0], [29.7, 194.0], [29.8, 194.0], [29.9, 194.0], [30.0, 194.0], [30.1, 194.0], [30.2, 194.0], [30.3, 194.0], [30.4, 194.0], [30.5, 194.0], [30.6, 194.0], [30.7, 194.0], [30.8, 194.0], [30.9, 194.0], [31.0, 194.0], [31.1, 194.0], [31.2, 194.0], [31.3, 194.0], [31.4, 194.0], [31.5, 194.0], [31.6, 195.0], [31.7, 195.0], [31.8, 195.0], [31.9, 195.0], [32.0, 195.0], [32.1, 195.0], [32.2, 195.0], [32.3, 195.0], [32.4, 195.0], [32.5, 195.0], [32.6, 195.0], [32.7, 195.0], [32.8, 195.0], [32.9, 195.0], [33.0, 195.0], [33.1, 195.0], [33.2, 195.0], [33.3, 195.0], [33.4, 195.0], [33.5, 195.0], [33.6, 195.0], [33.7, 195.0], [33.8, 195.0], [33.9, 195.0], [34.0, 195.0], [34.1, 195.0], [34.2, 195.0], [34.3, 195.0], [34.4, 195.0], [34.5, 195.0], [34.6, 195.0], [34.7, 195.0], [34.8, 195.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 195.0], [35.6, 195.0], [35.7, 195.0], [35.8, 195.0], [35.9, 195.0], [36.0, 195.0], [36.1, 195.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 196.0], [36.6, 196.0], [36.7, 196.0], [36.8, 196.0], [36.9, 196.0], [37.0, 196.0], [37.1, 196.0], [37.2, 196.0], [37.3, 196.0], [37.4, 196.0], [37.5, 196.0], [37.6, 196.0], [37.7, 196.0], [37.8, 196.0], [37.9, 196.0], [38.0, 196.0], [38.1, 196.0], [38.2, 196.0], [38.3, 196.0], [38.4, 196.0], [38.5, 196.0], [38.6, 196.0], [38.7, 196.0], [38.8, 196.0], [38.9, 196.0], [39.0, 196.0], [39.1, 196.0], [39.2, 196.0], [39.3, 196.0], [39.4, 196.0], [39.5, 196.0], [39.6, 196.0], [39.7, 196.0], [39.8, 196.0], [39.9, 196.0], [40.0, 196.0], [40.1, 196.0], [40.2, 196.0], [40.3, 196.0], [40.4, 196.0], [40.5, 196.0], [40.6, 196.0], [40.7, 196.0], [40.8, 196.0], [40.9, 196.0], [41.0, 196.0], [41.1, 196.0], [41.2, 196.0], [41.3, 196.0], [41.4, 196.0], [41.5, 196.0], [41.6, 196.0], [41.7, 196.0], [41.8, 196.0], [41.9, 196.0], [42.0, 196.0], [42.1, 196.0], [42.2, 197.0], [42.3, 197.0], [42.4, 197.0], [42.5, 197.0], [42.6, 197.0], [42.7, 197.0], [42.8, 197.0], [42.9, 197.0], [43.0, 197.0], [43.1, 197.0], [43.2, 197.0], [43.3, 197.0], [43.4, 197.0], [43.5, 197.0], [43.6, 197.0], [43.7, 197.0], [43.8, 197.0], [43.9, 197.0], [44.0, 197.0], [44.1, 197.0], [44.2, 197.0], [44.3, 197.0], [44.4, 197.0], [44.5, 197.0], [44.6, 197.0], [44.7, 197.0], [44.8, 197.0], [44.9, 197.0], [45.0, 197.0], [45.1, 197.0], [45.2, 197.0], [45.3, 197.0], [45.4, 197.0], [45.5, 197.0], [45.6, 197.0], [45.7, 197.0], [45.8, 197.0], [45.9, 197.0], [46.0, 197.0], [46.1, 197.0], [46.2, 197.0], [46.3, 197.0], [46.4, 197.0], [46.5, 197.0], [46.6, 197.0], [46.7, 197.0], [46.8, 197.0], [46.9, 197.0], [47.0, 197.0], [47.1, 197.0], [47.2, 197.0], [47.3, 197.0], [47.4, 197.0], [47.5, 197.0], [47.6, 197.0], [47.7, 197.0], [47.8, 197.0], [47.9, 198.0], [48.0, 198.0], [48.1, 198.0], [48.2, 198.0], [48.3, 198.0], [48.4, 198.0], [48.5, 198.0], [48.6, 198.0], [48.7, 198.0], [48.8, 198.0], [48.9, 198.0], [49.0, 198.0], [49.1, 198.0], [49.2, 198.0], [49.3, 198.0], [49.4, 198.0], [49.5, 198.0], [49.6, 198.0], [49.7, 198.0], [49.8, 198.0], [49.9, 198.0], [50.0, 198.0], [50.1, 198.0], [50.2, 198.0], [50.3, 198.0], [50.4, 198.0], [50.5, 198.0], [50.6, 198.0], [50.7, 198.0], [50.8, 198.0], [50.9, 198.0], [51.0, 198.0], [51.1, 198.0], [51.2, 198.0], [51.3, 198.0], [51.4, 198.0], [51.5, 198.0], [51.6, 198.0], [51.7, 198.0], [51.8, 198.0], [51.9, 198.0], [52.0, 198.0], [52.1, 198.0], [52.2, 198.0], [52.3, 198.0], [52.4, 198.0], [52.5, 198.0], [52.6, 198.0], [52.7, 198.0], [52.8, 198.0], [52.9, 198.0], [53.0, 198.0], [53.1, 198.0], [53.2, 198.0], [53.3, 198.0], [53.4, 199.0], [53.5, 199.0], [53.6, 199.0], [53.7, 199.0], [53.8, 199.0], [53.9, 199.0], [54.0, 199.0], [54.1, 199.0], [54.2, 199.0], [54.3, 199.0], [54.4, 199.0], [54.5, 199.0], [54.6, 199.0], [54.7, 199.0], [54.8, 199.0], [54.9, 199.0], [55.0, 199.0], [55.1, 199.0], [55.2, 199.0], [55.3, 199.0], [55.4, 199.0], [55.5, 199.0], [55.6, 199.0], [55.7, 199.0], [55.8, 199.0], [55.9, 199.0], [56.0, 199.0], [56.1, 199.0], [56.2, 199.0], [56.3, 199.0], [56.4, 199.0], [56.5, 199.0], [56.6, 199.0], [56.7, 199.0], [56.8, 199.0], [56.9, 199.0], [57.0, 199.0], [57.1, 199.0], [57.2, 199.0], [57.3, 199.0], [57.4, 199.0], [57.5, 199.0], [57.6, 199.0], [57.7, 200.0], [57.8, 200.0], [57.9, 200.0], [58.0, 200.0], [58.1, 200.0], [58.2, 200.0], [58.3, 200.0], [58.4, 200.0], [58.5, 200.0], [58.6, 200.0], [58.7, 200.0], [58.8, 200.0], [58.9, 200.0], [59.0, 200.0], [59.1, 200.0], [59.2, 200.0], [59.3, 200.0], [59.4, 200.0], [59.5, 200.0], [59.6, 200.0], [59.7, 200.0], [59.8, 200.0], [59.9, 200.0], [60.0, 200.0], [60.1, 200.0], [60.2, 200.0], [60.3, 200.0], [60.4, 200.0], [60.5, 200.0], [60.6, 201.0], [60.7, 201.0], [60.8, 201.0], [60.9, 201.0], [61.0, 201.0], [61.1, 201.0], [61.2, 201.0], [61.3, 201.0], [61.4, 201.0], [61.5, 201.0], [61.6, 201.0], [61.7, 201.0], [61.8, 201.0], [61.9, 201.0], [62.0, 201.0], [62.1, 201.0], [62.2, 201.0], [62.3, 202.0], [62.4, 202.0], [62.5, 202.0], [62.6, 202.0], [62.7, 202.0], [62.8, 202.0], [62.9, 202.0], [63.0, 202.0], [63.1, 202.0], [63.2, 202.0], [63.3, 203.0], [63.4, 203.0], [63.5, 203.0], [63.6, 203.0], [63.7, 203.0], [63.8, 203.0], [63.9, 203.0], [64.0, 203.0], [64.1, 203.0], [64.2, 203.0], [64.3, 203.0], [64.4, 204.0], [64.5, 204.0], [64.6, 204.0], [64.7, 204.0], [64.8, 204.0], [64.9, 204.0], [65.0, 204.0], [65.1, 204.0], [65.2, 205.0], [65.3, 205.0], [65.4, 205.0], [65.5, 205.0], [65.6, 205.0], [65.7, 205.0], [65.8, 205.0], [65.9, 205.0], [66.0, 206.0], [66.1, 206.0], [66.2, 206.0], [66.3, 206.0], [66.4, 207.0], [66.5, 207.0], [66.6, 207.0], [66.7, 208.0], [66.8, 208.0], [66.9, 209.0], [67.0, 209.0], [67.1, 210.0], [67.2, 211.0], [67.3, 212.0], [67.4, 213.0], [67.5, 214.0], [67.6, 216.0], [67.7, 218.0], [67.8, 220.0], [67.9, 223.0], [68.0, 227.0], [68.1, 232.0], [68.2, 236.0], [68.3, 241.0], [68.4, 247.0], [68.5, 254.0], [68.6, 261.0], [68.7, 271.0], [68.8, 280.0], [68.9, 284.0], [69.0, 284.0], [69.1, 285.0], [69.2, 285.0], [69.3, 285.0], [69.4, 285.0], [69.5, 285.0], [69.6, 286.0], [69.7, 286.0], [69.8, 286.0], [69.9, 286.0], [70.0, 286.0], [70.1, 286.0], [70.2, 286.0], [70.3, 286.0], [70.4, 286.0], [70.5, 287.0], [70.6, 287.0], [70.7, 287.0], [70.8, 287.0], [70.9, 287.0], [71.0, 287.0], [71.1, 287.0], [71.2, 287.0], [71.3, 287.0], [71.4, 287.0], [71.5, 287.0], [71.6, 287.0], [71.7, 288.0], [71.8, 288.0], [71.9, 288.0], [72.0, 288.0], [72.1, 288.0], [72.2, 288.0], [72.3, 288.0], [72.4, 288.0], [72.5, 288.0], [72.6, 288.0], [72.7, 288.0], [72.8, 288.0], [72.9, 288.0], [73.0, 289.0], [73.1, 289.0], [73.2, 289.0], [73.3, 289.0], [73.4, 289.0], [73.5, 289.0], [73.6, 289.0], [73.7, 289.0], [73.8, 289.0], [73.9, 289.0], [74.0, 289.0], [74.1, 289.0], [74.2, 289.0], [74.3, 289.0], [74.4, 289.0], [74.5, 290.0], [74.6, 290.0], [74.7, 290.0], [74.8, 290.0], [74.9, 290.0], [75.0, 290.0], [75.1, 290.0], [75.2, 290.0], [75.3, 290.0], [75.4, 290.0], [75.5, 290.0], [75.6, 290.0], [75.7, 290.0], [75.8, 290.0], [75.9, 290.0], [76.0, 291.0], [76.1, 291.0], [76.2, 291.0], [76.3, 291.0], [76.4, 291.0], [76.5, 291.0], [76.6, 291.0], [76.7, 291.0], [76.8, 291.0], [76.9, 291.0], [77.0, 291.0], [77.1, 291.0], [77.2, 291.0], [77.3, 291.0], [77.4, 292.0], [77.5, 292.0], [77.6, 292.0], [77.7, 292.0], [77.8, 292.0], [77.9, 292.0], [78.0, 292.0], [78.1, 292.0], [78.2, 292.0], [78.3, 292.0], [78.4, 292.0], [78.5, 293.0], [78.6, 293.0], [78.7, 293.0], [78.8, 293.0], [78.9, 293.0], [79.0, 293.0], [79.1, 293.0], [79.2, 293.0], [79.3, 293.0], [79.4, 293.0], [79.5, 294.0], [79.6, 294.0], [79.7, 294.0], [79.8, 294.0], [79.9, 294.0], [80.0, 294.0], [80.1, 294.0], [80.2, 294.0], [80.3, 294.0], [80.4, 294.0], [80.5, 294.0], [80.6, 295.0], [80.7, 295.0], [80.8, 295.0], [80.9, 295.0], [81.0, 295.0], [81.1, 295.0], [81.2, 295.0], [81.3, 295.0], [81.4, 295.0], [81.5, 295.0], [81.6, 295.0], [81.7, 295.0], [81.8, 295.0], [81.9, 295.0], [82.0, 295.0], [82.1, 295.0], [82.2, 296.0], [82.3, 296.0], [82.4, 296.0], [82.5, 296.0], [82.6, 296.0], [82.7, 296.0], [82.8, 296.0], [82.9, 296.0], [83.0, 296.0], [83.1, 296.0], [83.2, 296.0], [83.3, 296.0], [83.4, 296.0], [83.5, 296.0], [83.6, 296.0], [83.7, 296.0], [83.8, 296.0], [83.9, 297.0], [84.0, 297.0], [84.1, 297.0], [84.2, 297.0], [84.3, 297.0], [84.4, 297.0], [84.5, 297.0], [84.6, 297.0], [84.7, 297.0], [84.8, 297.0], [84.9, 297.0], [85.0, 297.0], [85.1, 297.0], [85.2, 297.0], [85.3, 297.0], [85.4, 297.0], [85.5, 297.0], [85.6, 298.0], [85.7, 298.0], [85.8, 298.0], [85.9, 298.0], [86.0, 298.0], [86.1, 298.0], [86.2, 298.0], [86.3, 298.0], [86.4, 298.0], [86.5, 298.0], [86.6, 298.0], [86.7, 298.0], [86.8, 298.0], [86.9, 298.0], [87.0, 298.0], [87.1, 298.0], [87.2, 298.0], [87.3, 298.0], [87.4, 298.0], [87.5, 298.0], [87.6, 298.0], [87.7, 299.0], [87.8, 299.0], [87.9, 299.0], [88.0, 299.0], [88.1, 299.0], [88.2, 299.0], [88.3, 299.0], [88.4, 299.0], [88.5, 299.0], [88.6, 299.0], [88.7, 299.0], [88.8, 299.0], [88.9, 299.0], [89.0, 299.0], [89.1, 299.0], [89.2, 299.0], [89.3, 299.0], [89.4, 299.0], [89.5, 299.0], [89.6, 299.0], [89.7, 300.0], [89.8, 300.0], [89.9, 300.0], [90.0, 300.0], [90.1, 300.0], [90.2, 300.0], [90.3, 300.0], [90.4, 300.0], [90.5, 300.0], [90.6, 300.0], [90.7, 300.0], [90.8, 300.0], [90.9, 300.0], [91.0, 300.0], [91.1, 300.0], [91.2, 300.0], [91.3, 300.0], [91.4, 301.0], [91.5, 301.0], [91.6, 301.0], [91.7, 301.0], [91.8, 301.0], [91.9, 301.0], [92.0, 301.0], [92.1, 301.0], [92.2, 301.0], [92.3, 301.0], [92.4, 301.0], [92.5, 301.0], [92.6, 301.0], [92.7, 301.0], [92.8, 301.0], [92.9, 302.0], [93.0, 302.0], [93.1, 302.0], [93.2, 302.0], [93.3, 302.0], [93.4, 302.0], [93.5, 302.0], [93.6, 302.0], [93.7, 302.0], [93.8, 302.0], [93.9, 302.0], [94.0, 303.0], [94.1, 303.0], [94.2, 303.0], [94.3, 303.0], [94.4, 303.0], [94.5, 303.0], [94.6, 303.0], [94.7, 303.0], [94.8, 303.0], [94.9, 303.0], [95.0, 304.0], [95.1, 304.0], [95.2, 304.0], [95.3, 304.0], [95.4, 304.0], [95.5, 304.0], [95.6, 304.0], [95.7, 305.0], [95.8, 305.0], [95.9, 305.0], [96.0, 305.0], [96.1, 305.0], [96.2, 305.0], [96.3, 306.0], [96.4, 306.0], [96.5, 306.0], [96.6, 306.0], [96.7, 307.0], [96.8, 307.0], [96.9, 307.0], [97.0, 308.0], [97.1, 308.0], [97.2, 308.0], [97.3, 309.0], [97.4, 309.0], [97.5, 310.0], [97.6, 310.0], [97.7, 311.0], [97.8, 311.0], [97.9, 312.0], [98.0, 313.0], [98.1, 314.0], [98.2, 315.0], [98.3, 316.0], [98.4, 318.0], [98.5, 321.0], [98.6, 324.0], [98.7, 326.0], [98.8, 328.0], [98.9, 330.0], [99.0, 333.0], [99.1, 336.0], [99.2, 341.0], [99.3, 348.0], [99.4, 362.0], [99.5, 381.0], [99.6, 402.0], [99.7, 411.0], [99.8, 431.0], [99.9, 442.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 45834.0, "series": [{"data": [[2300.0, 1.0], [600.0, 3.0], [700.0, 5.0], [800.0, 4.0], [200.0, 25416.0], [3400.0, 1.0], [300.0, 7901.0], [1200.0, 2.0], [1300.0, 2.0], [1400.0, 5.0], [1500.0, 1.0], [100.0, 45834.0], [400.0, 301.0], [500.0, 6.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 79452.0, "series": [{"data": [[0.0, 79452.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 27.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 13.499999999999995, "minX": 1.78667454E12, "maxY": 100.0, "series": [{"data": [[1.78667466E12, 91.90740740740777], [1.78667496E12, 100.0], [1.78667484E12, 100.0], [1.78667502E12, 99.30483848215547], [1.78667454E12, 13.499999999999995], [1.78667472E12, 100.0], [1.7866749E12, 100.0], [1.7866746E12, 49.316085038106685], [1.78667478E12, 100.0]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78667502E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 221.527027027027, "minX": 1.0, "maxY": 926.2, "series": [{"data": [[2.0, 303.0], [3.0, 926.2], [4.0, 424.22222222222223], [5.0, 318.14285714285717], [6.0, 273.5], [7.0, 282.49999999999994], [8.0, 238.23529411764707], [9.0, 235.45000000000002], [10.0, 241.91666666666666], [11.0, 238.96000000000004], [12.0, 239.2222222222222], [13.0, 241.92592592592592], [14.0, 240.3030303030303], [15.0, 247.29411764705878], [16.0, 231.91666666666666], [17.0, 234.54999999999995], [18.0, 232.3783783783784], [19.0, 258.57142857142856], [20.0, 237.36956521739128], [21.0, 232.64583333333337], [22.0, 235.82978723404253], [23.0, 232.7254901960784], [24.0, 237.84905660377362], [25.0, 230.593220338983], [26.0, 240.93442622950826], [27.0, 234.76271186440678], [28.0, 230.4444444444445], [29.0, 238.42424242424246], [30.0, 233.53623188405797], [31.0, 233.69117647058826], [32.0, 221.527027027027], [33.0, 223.25974025974028], [34.0, 228.1973684210526], [35.0, 231.41250000000002], [36.0, 238.94999999999993], [37.0, 228.25882352941176], [38.0, 243.09195402298855], [39.0, 227.89411764705883], [40.0, 236.58426966292137], [41.0, 228.11578947368423], [42.0, 236.21875000000003], [43.0, 230.62244897959178], [44.0, 223.5], [45.0, 225.66666666666657], [46.0, 222.6421052631579], [47.0, 226.3], [48.0, 236.94736842105266], [49.0, 237.27102803738313], [50.0, 226.9009009009009], [51.0, 223.00000000000006], [52.0, 233.2268907563025], [53.0, 229.94262295081958], [54.0, 227.42741935483872], [55.0, 225.6583333333334], [56.0, 240.91999999999996], [57.0, 273.6829268292682], [58.0, 304.36585365853665], [59.0, 229.19047619047615], [60.0, 228.08148148148152], [61.0, 224.8309859154929], [62.0, 227.36619718309865], [63.0, 228.8661971830985], [64.0, 226.40972222222223], [65.0, 226.88000000000005], [66.0, 227.02], [67.0, 227.86842105263145], [68.0, 228.621794871795], [69.0, 229.19078947368422], [70.0, 227.56249999999991], [71.0, 230.2865853658538], [72.0, 227.55757575757573], [73.0, 228.65000000000006], [74.0, 227.30057803468208], [75.0, 227.55747126436785], [76.0, 236.04093567251456], [77.0, 229.18674698795175], [78.0, 233.12643678160924], [79.0, 230.60112359550564], [80.0, 237.4388888888889], [81.0, 231.64736842105265], [82.0, 228.8432432432432], [83.0, 226.64893617021272], [84.0, 227.4974093264248], [85.0, 228.19148936170214], [86.0, 236.01522842639602], [87.0, 232.92820512820506], [88.0, 226.53201970443348], [89.0, 225.48768472906394], [90.0, 224.7414634146342], [91.0, 224.54761904761907], [92.0, 226.52132701421797], [93.0, 223.81220657276998], [94.0, 229.2976744186046], [95.0, 234.45909090909097], [96.0, 224.92592592592592], [97.0, 225.48181818181823], [98.0, 228.69130434782605], [99.0, 225.26666666666682], [100.0, 226.98479722307525], [1.0, 289.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[95.27857879771456, 227.64541657230467]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 834.1, "minX": 1.78667454E12, "maxY": 1609050.3, "series": [{"data": [[1.78667466E12, 1453322.5833333333], [1.78667496E12, 1609050.3], [1.78667484E12, 1604576.8166666667], [1.78667502E12, 1003565.6666666666], [1.78667454E12, 56970.21666666667], [1.78667472E12, 1607916.9333333333], [1.7866749E12, 1606742.45], [1.7866746E12, 707062.0], [1.78667478E12, 1608196.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78667466E12, 21392.2], [1.78667496E12, 23691.8], [1.78667484E12, 23625.1], [1.78667502E12, 14780.45], [1.78667454E12, 834.1], [1.78667472E12, 23669.0], [1.7866749E12, 23654.35], [1.7866746E12, 10396.1], [1.78667478E12, 23677.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78667502E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 224.79588094230502, "minX": 1.78667454E12, "maxY": 257.38249999999994, "series": [{"data": [[1.78667466E12, 228.7821637426896], [1.78667496E12, 226.4104549854793], [1.78667484E12, 227.59950578060176], [1.78667502E12, 224.79588094230502], [1.78667454E12, 257.38249999999994], [1.78667472E12, 227.2107117688515], [1.7866749E12, 227.62723666813554], [1.7866746E12, 232.94364219815526], [1.78667478E12, 226.75774920746807]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78667502E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 224.29101424742595, "minX": 1.78667454E12, "maxY": 255.7900000000001, "series": [{"data": [[1.78667466E12, 228.23421052631596], [1.78667496E12, 225.87476898706257], [1.78667484E12, 227.0697202365184], [1.78667502E12, 224.29101424742595], [1.78667454E12, 255.7900000000001], [1.78667472E12, 226.69573643410996], [1.7866749E12, 227.09449096518267], [1.7866746E12, 232.194344163658], [1.78667478E12, 226.21926734765825]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78667502E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.0862448297104679, "minX": 1.78667454E12, "maxY": 11.965, "series": [{"data": [[1.78667466E12, 1.2182261208577023], [1.78667496E12, 1.0862448297104679], [1.78667484E12, 1.270408613538087], [1.78667502E12, 1.096205388630268], [1.78667454E12, 11.965], [1.78667472E12, 1.7305320648343958], [1.7866749E12, 1.1382106654914008], [1.7866746E12, 1.8551945447252336], [1.78667478E12, 1.400140894681225]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78667502E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 183.0, "minX": 1.78667454E12, "maxY": 3437.0, "series": [{"data": [[1.78667466E12, 706.0], [1.78667496E12, 589.0], [1.78667484E12, 1431.0], [1.78667502E12, 442.0], [1.78667454E12, 2367.0], [1.78667472E12, 3437.0], [1.7866749E12, 476.0], [1.7866746E12, 843.0], [1.78667478E12, 1425.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78667466E12, 183.0], [1.78667496E12, 183.0], [1.78667484E12, 183.0], [1.78667502E12, 183.0], [1.78667454E12, 184.0], [1.78667472E12, 183.0], [1.7866749E12, 183.0], [1.7866746E12, 183.0], [1.78667478E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78667466E12, 301.0], [1.78667496E12, 299.0], [1.78667484E12, 300.0], [1.78667502E12, 298.0], [1.78667454E12, 305.90000000000003], [1.78667472E12, 299.0], [1.7866749E12, 300.0], [1.7866746E12, 301.0], [1.78667478E12, 299.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78667466E12, 338.0], [1.78667496E12, 321.3600000000006], [1.78667484E12, 339.6800000000003], [1.78667502E12, 314.10000000000036], [1.78667454E12, 854.5100000000004], [1.78667472E12, 326.46999999999935], [1.7866749E12, 325.0], [1.7866746E12, 410.2600000000002], [1.78667478E12, 335.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78667466E12, 198.0], [1.78667496E12, 198.0], [1.78667484E12, 198.0], [1.78667502E12, 197.0], [1.78667454E12, 200.5], [1.78667472E12, 197.0], [1.7866749E12, 199.0], [1.7866746E12, 197.0], [1.78667478E12, 198.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78667466E12, 305.9499999999989], [1.78667496E12, 303.0], [1.78667484E12, 304.0], [1.78667502E12, 302.0], [1.78667454E12, 343.0], [1.78667472E12, 303.0], [1.7866749E12, 303.0], [1.7866746E12, 311.0], [1.78667478E12, 303.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78667502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 195.0, "minX": 4.0, "maxY": 722.5, "series": [{"data": [[4.0, 722.5], [6.0, 324.0], [7.0, 205.0], [9.0, 199.0], [12.0, 230.5], [16.0, 196.0], [17.0, 199.0], [20.0, 236.5], [22.0, 202.5], [24.0, 196.0], [25.0, 203.0], [27.0, 199.0], [29.0, 195.0], [32.0, 200.5], [35.0, 204.0], [37.0, 197.0], [38.0, 199.5], [40.0, 197.0], [43.0, 197.0], [44.0, 199.0], [45.0, 204.0], [51.0, 199.0], [50.0, 196.0], [53.0, 198.0], [54.0, 198.0], [57.0, 197.0], [59.0, 195.0], [60.0, 197.0], [62.0, 195.0], [64.0, 196.5], [66.0, 198.5], [67.0, 202.0], [69.0, 200.0], [70.0, 197.0], [73.0, 196.0], [76.0, 199.0], [83.0, 196.0], [81.0, 201.0], [82.0, 197.0], [86.0, 196.5], [85.0, 196.0], [87.0, 197.0], [90.0, 287.5], [95.0, 198.0], [98.0, 195.5], [99.0, 195.0], [97.0, 197.0], [101.0, 199.0], [103.0, 210.0], [105.0, 198.0], [108.0, 197.0], [116.0, 197.0], [118.0, 197.0], [120.0, 197.0], [121.0, 197.0], [122.0, 197.0], [124.0, 196.0], [126.0, 197.0], [127.0, 197.0], [130.0, 196.0], [128.0, 199.0], [132.0, 201.0], [137.0, 199.0], [139.0, 198.0], [138.0, 197.0], [136.0, 201.5], [147.0, 199.0], [146.0, 198.0], [152.0, 197.0], [155.0, 198.0], [158.0, 196.0], [153.0, 198.0], [160.0, 197.0], [162.0, 197.0], [167.0, 198.0], [163.0, 197.0], [166.0, 196.0], [169.0, 196.0], [171.0, 197.0], [175.0, 198.0], [177.0, 197.0], [178.0, 198.0], [181.0, 198.0], [183.0, 202.0], [184.0, 199.0], [191.0, 198.0], [186.0, 199.0], [185.0, 198.0], [190.0, 198.0], [188.0, 198.0], [187.0, 198.0], [189.0, 198.0], [192.0, 198.0], [193.0, 197.0], [194.0, 197.0], [195.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 195.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 193.0, "minX": 4.0, "maxY": 721.5, "series": [{"data": [[4.0, 721.5], [6.0, 319.5], [7.0, 199.0], [9.0, 198.0], [12.0, 229.0], [16.0, 193.0], [17.0, 196.0], [20.0, 233.5], [22.0, 199.0], [24.0, 196.0], [25.0, 202.0], [27.0, 198.0], [29.0, 194.0], [32.0, 199.0], [35.0, 202.0], [37.0, 195.0], [38.0, 197.0], [40.0, 196.0], [43.0, 196.0], [44.0, 198.5], [45.0, 202.0], [51.0, 198.0], [50.0, 195.0], [53.0, 196.0], [54.0, 197.5], [57.0, 196.5], [59.0, 193.0], [60.0, 196.0], [62.0, 193.5], [64.0, 196.5], [66.0, 197.0], [67.0, 201.0], [69.0, 198.5], [70.0, 196.0], [73.0, 196.0], [76.0, 199.0], [83.0, 196.0], [81.0, 201.0], [82.0, 196.0], [86.0, 195.5], [85.0, 196.0], [87.0, 196.0], [90.0, 287.0], [95.0, 197.0], [98.0, 195.0], [99.0, 194.0], [97.0, 196.0], [101.0, 199.0], [103.0, 209.0], [105.0, 198.0], [108.0, 196.0], [116.0, 196.0], [118.0, 197.0], [120.0, 195.0], [121.0, 196.0], [122.0, 196.0], [124.0, 195.0], [126.0, 196.0], [127.0, 195.0], [130.0, 196.0], [128.0, 199.0], [132.0, 200.0], [137.0, 197.0], [139.0, 197.0], [138.0, 196.5], [136.0, 199.5], [147.0, 198.0], [146.0, 198.0], [152.0, 197.0], [155.0, 197.0], [158.0, 196.0], [153.0, 197.0], [160.0, 196.0], [162.0, 196.0], [167.0, 198.0], [163.0, 197.0], [166.0, 196.0], [169.0, 196.0], [171.0, 196.0], [175.0, 197.0], [177.0, 196.0], [178.0, 197.0], [181.0, 197.0], [183.0, 201.0], [184.0, 198.0], [191.0, 197.0], [186.0, 198.0], [185.0, 197.0], [190.0, 197.0], [188.0, 197.0], [187.0, 197.0], [189.0, 197.0], [192.0, 197.0], [193.0, 197.0], [194.0, 196.0], [195.0, 197.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 195.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.783333333333333, "minX": 1.78667454E12, "maxY": 189.46666666666667, "series": [{"data": [[1.78667466E12, 171.25], [1.78667496E12, 189.46666666666667], [1.78667484E12, 188.95], [1.78667502E12, 117.35], [1.78667454E12, 6.783333333333333], [1.78667472E12, 189.13333333333333], [1.7866749E12, 188.98333333333332], [1.7866746E12, 83.5], [1.78667478E12, 189.28333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78667502E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.78667454E12, "maxY": 189.38333333333333, "series": [{"data": [[1.78667466E12, 171.0], [1.78667496E12, 189.38333333333333], [1.78667484E12, 188.85], [1.78667502E12, 118.15], [1.78667454E12, 6.666666666666667], [1.78667472E12, 189.2], [1.7866749E12, 189.08333333333334], [1.7866746E12, 83.1], [1.78667478E12, 189.26666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78667502E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.78667454E12, "maxY": 189.38333333333333, "series": [{"data": [[1.78667466E12, 171.0], [1.78667496E12, 189.38333333333333], [1.78667484E12, 188.85], [1.78667502E12, 118.15], [1.78667454E12, 6.666666666666667], [1.78667472E12, 189.2], [1.7866749E12, 189.08333333333334], [1.7866746E12, 83.1], [1.78667478E12, 189.26666666666668]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78667502E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.666666666666667, "minX": 1.78667454E12, "maxY": 189.38333333333333, "series": [{"data": [[1.78667466E12, 171.0], [1.78667496E12, 189.38333333333333], [1.78667484E12, 188.85], [1.78667502E12, 118.15], [1.78667454E12, 6.666666666666667], [1.78667472E12, 189.2], [1.7866749E12, 189.08333333333334], [1.7866746E12, 83.1], [1.78667478E12, 189.26666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78667502E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

