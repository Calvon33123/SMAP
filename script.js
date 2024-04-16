document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get LRN and Code entered by the user
    var lrn = document.getElementById("loginLRN").value;
    var code = document.getElementById("loginCode").value;
    
    // Pre-determined login details
    var lrn1 = "111";
    var code1 = "111";
    var lrn2 = "222";
    var code2 = "222";
    var lrn3 = "333";
    var code3 = "333";
    var lrn4 = "444";
    var code4 = "444";
    var lrn5 = "555";
    var code5 = "555";
    var lrn6 = "666";
    var code6 = "666";
    var lrn7 = "777";
    var code7 = "777";
    var lrn8 = "888";
    var code8 = "888";
    var lrn9 = "999";
    var code9 = "999";
    var lrn10 = "110";
    var code10 = "110";

    
    // Compare entered LRN and Code with predetermined login details
    if ((lrn === lrn1 && code === code1) || (lrn === lrn2 && code === code2) || (lrn === lrn3 && code === code3) || (lrn === lrn4 && code === code4) || (lrn === lrn5 && code === code5) || (lrn === lrn6 && code === code6) || (lrn === lrn7 && code === code7) || (lrn === lrn8 && code === code8) || (lrn === lrn9 && code === code9) || (lrn === lrn10 && code === code10))  {
        alert("Login successful!");
        // Display spreadsheet box
        document.getElementById("spreadsheetBox").classList.remove("hidden");
        generateSpreadsheet(lrn);

        // Show name section and update profile image and name
        document.getElementById("nameSection").classList.remove("hidden");
        if (lrn === lrn1) {
            document.getElementById("nameParagraph").textContent = "Kamisato Ayato";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Inazuma";
            document.getElementById("statusParagraph").textContent = "Balance -  Paid";
            document.getElementById("profileImage1").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn2) {
            document.getElementById("nameParagraph").textContent = "Albedo";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Mondstat";
            document.getElementById("statusParagraph").textContent = "Balance -  3,000.00";
            document.getElementById("profileImage2").classList.remove("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn3) {
            document.getElementById("nameParagraph").textContent = "Itto";
            document.getElementById("gradeParagraph").textContent = "Grade 7 - Inazuma";
            document.getElementById("statusParagraph").textContent = "Balance -  5,000.00";
            document.getElementById("profileImage3").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn4) {
            document.getElementById("nameParagraph").textContent = "Kuki";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Inazuma";
            document.getElementById("statusParagraph").textContent = "Balance -  Paid";
            document.getElementById("profileImage4").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn5) {
            document.getElementById("nameParagraph").textContent = "Kokomi";
            document.getElementById("gradeParagraph").textContent = "Grade 9 - Inazuma";
            document.getElementById("statusParagraph").textContent = "Balance -  1,500.00";
            document.getElementById("profileImage5").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        }  else if (lrn === lrn6) {
            document.getElementById("nameParagraph").textContent = "Furina";
            document.getElementById("gradeParagraph").textContent = "Grade 9 - Fontain";
            document.getElementById("statusParagraph").textContent = "Balance -  500.00";
            document.getElementById("profileImage6").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn7) {
            document.getElementById("nameParagraph").textContent = "Cyno";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Sumero";
            document.getElementById("statusParagraph").textContent = "Balance -  10,000.00";
            document.getElementById("profileImage7").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn8) {
            document.getElementById("nameParagraph").textContent = "Nilou";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Sumero";
            document.getElementById("statusParagraph").textContent = "Balance -  2,500.00";
           document.getElementById("profileImage8").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn9) {
            document.getElementById("nameParagraph").textContent = "Gaming";
            document.getElementById("gradeParagraph").textContent = "Grade 8 - Liyue";
            document.getElementById("statusParagraph").textContent = "Balance -  Paid";
            document.getElementById("profileImage9").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
            document.getElementById("profileImage10").classList.add("hiddenn");
        } else if (lrn === lrn10) {
            document.getElementById("nameParagraph").textContent = "Yanfei";
            document.getElementById("gradeParagraph").textContent = "Grade 10 - Liyue";
            document.getElementById("statusParagraph").textContent = "Balance -  Paid";
            document.getElementById("profileImage10").classList.remove("hiddenn");
            document.getElementById("profileImage2").classList.add("hiddenn");
            document.getElementById("profileImage3").classList.add("hiddenn");
            document.getElementById("profileImage4").classList.add("hiddenn");
            document.getElementById("profileImage5").classList.add("hiddenn");
            document.getElementById("profileImage6").classList.add("hiddenn");
            document.getElementById("profileImage7").classList.add("hiddenn");
            document.getElementById("profileImage8").classList.add("hiddenn");
            document.getElementById("profileImage9").classList.add("hiddenn");
            document.getElementById("profileImage1").classList.add("hiddenn");
        }

    } else {
        alert("Invalid LRN or Code");
        // Reload the page
        window.location.reload();
    }
    
    // Reset LRN and Code fields
    document.getElementById("loginLRN").value = "";
    document.getElementById("loginCode").value = "";
});

function generateSpreadsheet(lrn) {
    var spreadsheetTable = document.getElementById("spreadsheetTable");

    // Clear existing table contents
    spreadsheetTable.innerHTML = '';

    // Define the content for each cell in the spreadsheet based on LRN
    var spreadsheetContent;
    if (lrn === "111") { // For LRN 111
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 80, 85, 90, 85], 
            ["English",  75, 80, 85, 90],
            ["Mathematics",  85, 90, 85, 80],
            ["Science",  90, 85, 80, 75],
            ["Araling Panlipunan",  80, 75, 90, 85],
            ["Edukasyon sa Pagpakatao",  85, 80, 75, 90],
            ["Music",  75, 90, 85, 80],
            ["Arts",  80, 75, 90, 85],
            ["PE",  85, 80, 75, 90],
            ["Health",  90, 85, 80, 75],
            ["Edukasyong Pantahanan at Pangkabuhayan",  75, 90, 85, 80],
            ["Technology and Livelyhood Education",  80, 75, 90, 85],
            ["Total", "", "", "", "", ""], // Total row
        ];
    } else if (lrn === "222") { // For LRN 222
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 90, 95, 90], 
            ["English",  80, 85, 90, 95],
            ["Mathematics",  90, 95, 90, 85],
            ["Science",  95, 90, 85, 80],
            ["Araling Panlipunan",  85, 80, 95, 90],
            ["Edukasyon sa Pagpakatao",  90, 85, 80, 95],
            ["Music",  80, 95, 90, 85],
            ["Arts",  85, 80, 95, 90],
            ["PE",  90, 85, 80, 95],
            ["Health",  95, 90, 85, 80],
            ["Edukasyong Pantahanan at Pangkabuhayan",  80, 95, 90, 85],
            ["Technology and Livelyhood Education",  85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
    } else if (lrn === "333") { // For LRN 333
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 80, 90, 85],
["English", 80, 85, 90, 90],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 85, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "444") { // For LRN 444
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
           ["Filipino", 80, 85, 90, 85],
["English", 75, 85, 90, 95],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 80, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "555") { // For LRN 555
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 80, 90, 85],
["English", 80, 85, 90, 90],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 85, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "666") { // For LRN 666
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 85, 90, 85],
["English", 75, 80, 90, 95],
["Mathematics", 90, 80, 85, 85],
["Science", 95, 80, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "777") { // For LRN 777
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 80, 90, 85],
["English", 80, 85, 90, 95],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 80, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "888") { // For LRN 888
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 90, 85, 85, 90],
["English", 75, 80, 95, 95],
["Mathematics", 95, 80, 85, 85],
["Science", 90, 85, 80, 95],
["Araling Panlipunan", 85, 90, 90, 80],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 85, 80, 95, 90],
["Arts", 80, 95, 90, 85],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "999") { // For LRN 999
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 85, 90, 85, 90],
["English", 80, 85, 90, 95],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 80, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
         } else if (lrn === "110") { // For LRN 101
        spreadsheetContent = [
            ["Subjects", "First Grading", "Second Grading", "Third Grading", "Fourth Grading", "Final Grade" ],
            ["Filipino", 80, 85, 95, 85],
["English", 75, 85, 90, 95],
["Mathematics", 90, 75, 85, 85],
["Science", 95, 80, 85, 80],
["Araling Panlipunan", 85, 80, 90, 90],
["Edukasyon sa Pagpakatao", 90, 85, 80, 95],
["Music", 80, 90, 85, 85],
["Arts", 85, 80, 95, 90],
["PE", 90, 85, 80, 95],
["Health", 95, 90, 85, 80],
["Edukasyong Pantahanan at Pangkabuhayan", 80, 95, 90, 85],
["Technology and Livelyhood Education", 85, 80, 95, 90],
            ["Total", "", "", "", "", ""], // Total row
        ];
    }

    // Calculate horizontal averages for each subject
    for (var i = 1; i < spreadsheetContent.length - 1; i++) {
        var total = 0;
        for (var j = 1; j < 5; j++) {
            total += spreadsheetContent[i][j];
        }
        var average = (total / 4).toFixed(1);
        spreadsheetContent[i][5] = average;
    }

    // Calculate vertical averages for each grading column
    for (var j = 1; j < 5; j++) {
        var total = 0;
        for (var i = 1; i < spreadsheetContent.length - 1; i++) {
            total += spreadsheetContent[i][j];
        }
        var average = (total / 12).toFixed(1);
        spreadsheetContent[13][j] = average;
    }

    // Calculate overall average for the "Final Grade" column
    var total = 0;
    for (var i = 1; i < spreadsheetContent.length - 1; i++) {
        total += parseFloat(spreadsheetContent[i][5]);
    }
    var average = (total / 12).toFixed(1);
    spreadsheetContent[13][5] = average;

    // Add rows and cells based on the content array
    for (var i = 0; i < spreadsheetContent.length; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < spreadsheetContent[i].length; j++) {
            var cell = document.createElement("td");
            cell.textContent = spreadsheetContent[i][j];
            row.appendChild(cell);
        }

        spreadsheetTable.appendChild(row);
    }

    // Scroll to the bottom of the page with smooth scrolling
    spreadsheetTable.scrollIntoView({ behavior: 'smooth', block: 'end' });
}


/// Create a script element
var script = document.createElement('script');

// Set the src attribute to the Font Awesome JavaScript URL
script.src = 'https://kit.fontawesome.com/a076d05399.js';

// Set the crossorigin attribute    
script.setAttribute('crossorigin', 'anonymous');

// Append the script element to the document body
document.body.appendChild(script);

window.onload = function() {
      window.location.href = "#home";
    };