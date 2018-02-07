/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        setDateLabel();

        $('#check7').click(function(){
            console.log('clicked');
            $('#other1').toggle();
        });

        $('#check14').click(function(){
            console.log('clicked');
            $('#other2').toggle();
        });

        $('#check15').click(function(){
            console.log('clicked');
            $('#other3').toggle();
        });

        $('#sendButton').click(function(){
            var date = $('#dateLabel').text();
            var room = $('#roomInput :selected').val();
            var teacher = $('#teacherInput').val();
            var furnitureBroken = $('#check1').prop('checked');
            var blackboardBroken = $('#check2').prop('checked');
            var OHPBroken = $('#check3').prop('checked');
            var BeamerBroken = $('#check4').prop('checked');
            var windowBroken = $('#check5').prop('checked');
            var roomDirty = $('#check6').prop('checked');
            var other1 = $('#check7').prop('checked');
            var other1Text = $('#other1').val();

            var computerBroken = $('#check8').prop('checked');
            var screenBroken = $('#check9').prop('checked');
            var keyboardBroken = $('#check10').prop('checked');
            var mouseBroken = $('#check11').prop('checked');
            var printerBroken = $('#check12').prop('checked');
            var deviceMissing = $('#check13').prop('checked');
            var other2 = $('#check14').prop('checked');
            var other2Text = $('#other2').val();

            var deviceNumberChecked = $('#check15').prop('checked');
            var deviceNumber = $('#other3').val();

            var extraMessage = $('#extra').val();

            console.log(date);
            console.log(room);
            console.log(teacher);
            console.log(extraMessage);
        })
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');


        console.log('Received Event: ' + id);
    }
};

app.initialize();

function setDateLabel() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    $("#dateLabel").text(day + ". " + month + ". " + year);
}
