//All characters
var charactersList = [
    //First category of characters.
    "Category", "◆ セレスティアル (completion: 1/9r)",

    "Natsuki", "ナツキ (Natsuki)",
    "Cheddar", "星子 チェダー (Cheddar Hoshiko)",
    "Tethys", "テティス (Tethys)",
    "Togetsuhime", "ルーナ  (Luna) / 兎月姫 (Princess Togetsu)",
    "Mercury", "水星 (Mercury)",
    "Venus", "金星 (Venus)",
    "Earth", "母なる地球 (Mother Earth)",
    "Mars", "火星 (Mars)",
    "Jupiter", "木星 (Jupiter)",

    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", //There should be a template for this
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",

    //Second category of characters.
    "Category", "◆ 鳳天国人",

    "Hatohane", "ハトハネ (Hatohane)",
    "Tsubasa", "ツバサ (Tsubasa)",
    "Galeby", "ゲィルビィ (Galeby)",
    "Galatea", "ガラテア (Galatea)",
    "Carbonara", "カルボナラ・ガンバ (Carbonara Gamba)",
    "Fritz", "フリッツ・ロケッ刑事 (Fritz Locke)",
    "404", "404", //<- Trinity.htm (Not archived or documented by pyohato?)
    "Friga", "フリガ (Friga)",
    "Morrigan", "モリガン・モネドゥラ (Morrigan Monedula)",
    "Jiiro", "ジーロ (Jiiro)",
    "404", "404", //<- Paragon.htm (Not archived or documented by pyohato?)
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",

    //Third category of characters.
    "Category", "◆ 地球人 (completion: not started)",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",

    //Fourth category of characters.
    "Category", "◆ 生き物 (completion: not started)",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404",
    "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404", "404"
];

//General posts.
var dataGeneral = [
    "posts/status.txt", "NONE",
    "posts/general.txt", "posts/general.gif"
];

//Character Fields
var CharacterFields = [
    "種族", "text",
    "一人称", "text",
    "好きな食べ物", "text",
    "好きな色", "text",
    "創造", "text",
    "旗", "image"
];

//Read String From File At Path
function readStringFromFileAtPath(name, pathOfFileToReadFrom, imageFile, isChar) {
    var html_output = "<tr><td style=\"text-align: right;\" valign=\"top\"><p><span style=\"color: rgb(28, 102, 176); font-family: メイリオ;\">REPLACE_DATE</span><img src=\"assets/s1.png\" hspace=\"5\" align=\"top\"><br><img src=\"assets/" + (isChar ? "dot4" : "dot2") + ".png\" align=\"middle\"></p>";
    var text_header = "<p id=\"textSection\" style=\"text-align: center; color: #000000; font-family: メイリオ;\">";

    //Characters list
    if(name == "characters/list") {
        document.getElementById("pagedata").width = 878;
        html_output = html_output.replace("REPLACE_DATE", "キャラクター");
        html_output += text_header + "Note: This is work in progress.. Importing most of the original characters will take time.";
        var currentCount = 0;
        var currentCategory = 0;
        for (var i = 0; i < charactersList.length; i+=2) {
            var CategoryFolder = charactersList[i] == "404" ? "" : ("Category" + currentCategory + "/");
            if(charactersList[i] == "Category") {
                currentCount = 0; currentCategory++;
                html_output += "<p style=\"text-align: left;\"><span style=\"color: rgb(28, 102, 176); font-size: medium;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + charactersList[i+1] + "</span></p><p style=\"text-align: center;\" colspan=\"2\">"
            } else {
                //TO-DO: Add hover text.
                html_output += "<a href=\"#\" onclick=\"fetchCharacter('" + CategoryFolder + charactersList[i] + "', '" + charactersList[i+1] + "'); return false;\"><img src=\"characters/" + CategoryFolder + charactersList[i] + "/icon.png\"></a>";
                
                //Make linebreak for next character set (So exactly 9 can be put on one line)
                currentCount++;
                if(currentCount >= 9) {
                    currentCount = 0; html_output += "<br>";
                }
            }
        }
        html_output += "</p>";
    } else {
        //Request Data
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
        request.send(null);
        if(request.status != 200) {
            html_output += "<img src=\"assets/ht2.png\" class=\"cobj\"><br>" + text_header + request.status + " error - Data could not be fetch.";
        }
        else {
            if(isChar) {
                //Characters page
                html_output += "<table width=\"689\" height=\"874\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\">";
                html_output += "<tbody><tr><td valign=\"top\" align=\"center\"><img src=\"" + imageFile + "\" class=\"cobj\"></td></tr></tbody>"
                html_output += "</table>";

                //Data of the character
                html_output += "<table style=\"background: rgb(28, 102, 176) none repeat scroll 0% 0%; border-radius: 10px;\" width=\"255\" height=\"234\" cellspacing=\"5\" cellpadding=\"5\" align=\"center\">";
                html_output += "<tbody><tr><td valign=\"top\" align=\"center\">"

                //Generate character info (right panel).
                var CharacterProfileData = request.responseText.split("\n");
                for (var i = 0; i < (CharacterFields.length / 2); i++) {
                    html_output += "<table width=\"270\" height=\"24\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"><tbody><tr>";
                    html_output += "<td width=\"12\"><img src=\"assets/lleft.png\"></td>";
                    html_output += "<td style=\"text-align: left;\" width=\"110\" valign=\"middle\" bgcolor=\"#16c0f8\"><b><span style=\"color: rgb(255, 255, 255); font-size: medium; font-family: メイリオ;\">"+CharacterFields[i*2]+"</span></b></td>"
                    if(CharacterFields[1+i*2] != "image") {
                        html_output += "<td style=\"text-align: right;\" valign=\"middle\" bgcolor=\"#ffffff\"><b><span style=\"color: rgb(28, 102, 176); font-size: medium; font-family: メイリオ;\">"+CharacterProfileData[i]+"</span></b></td>"
                    } else {
                        html_output += "<td style=\"text-align: right;\" valign=\"middle\" bgcolor=\"#ffffff\"><img src=\"assets/icon/"+CharacterProfileData[i]+".png\"></td>"
                    }
                    html_output += "<td width=\"11\"><img src=\"assets/rright.png\"></td>";
                    html_output += "</tr></tbody></table>"
                    if(i != ((CharacterFields.length / 2) - 1)) {
                        html_output += "<div style=\"line-height:13px;\"><br></div>";
                    }
                }
                html_output += "</td></tr></tbody></table>";

                //Bio
                html_output += "<table width=\"261\" height=\"0\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" align=\"center\"><tbody><tr>";
                html_output += "<p style=\"text-align: justify;\"><span style=\"color: rgb(28, 102, 176); font-size: larger; font-family: メイリオ;\">"
                html_output += CharacterProfileData[6];
                html_output += "</span></p></td></tr>";
                if (CharacterProfileData.length > 7) {
                    html_output += "<p style=\"text-align: center;\"><span style=\"color: rgb(28, 102, 176); font-size: medium; font-family: メイリオ;\">"
                    html_output += CharacterProfileData[7];
                    html_output += "</span></p>";
                }
                html_output += "</tbody></table>";
            }
            else {
                //Blog/Image/Special file
                if(imageFile != "NONE") {
                    var request2 = new XMLHttpRequest();
                    request2.open("GET", imageFile, false);
                    request2.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
                    request2.send(null);
                    if(request2.status != 404) {
                        html_output += "<img src=\"" + imageFile + "\" class=\"cobj\">"
                    }
                }
                html_output += text_header + request.responseText.replace(/\n/g, "<br/>");
            }
        }

        //Modified dates or document name
        if(isChar) {
            document.getElementById("pagedata").width = 1020;
            html_output = html_output.replace("REPLACE_DATE", name);
        }
        else {
            document.getElementById("pagedata").width = 878;
            var dt = request.getResponseHeader("Last-Modified");
            if(dt != null) {
                dt = dt.replace("/", " ");
                dt = dt.replace("/", " ");
                dt = dt.replace("-", " ");
                dt = dt.replace("-", " ");
                var d = new Date(Date.parse(dt));
                html_output = html_output.replace("REPLACE_DATE", "<img src=\"assets/start134535.png\" width=\"23\" hspace=\"5\" height=\"17\">" + (1900+d.getYear()) + "年" + String(1+d.getMonth()).padStart(2, 0) + "月" + String(d.getDate()).padStart(2, 0) + "日");
            }
            else {
                html_output = html_output.replace("REPLACE_DATE", "fetch date fail");
            }
        }
    }
    html_output += "</p></td></tr>";
    return html_output;
}

//When you click on a button
async function fetchPost(name) {
    document.getElementById("pagedata").innerHTML = "";
    document.getElementById("pagedata").innerHTML = readStringFromFileAtPath(name, name+".txt", name+".png", false);
}

//Characters
async function fetchCharacter(name, internalName) {
    document.getElementById("pagedata").innerHTML = "";
    document.getElementById("pagedata").innerHTML = readStringFromFileAtPath(internalName, "characters/"+name+"/info.txt", "characters/"+name+"/image.png", true);
}

//Page load function
async function justLoaded() {
    document.getElementById("pagedata").innerHTML = "";
    for (var i = 0; i < dataGeneral.length; i+=2) {
        document.getElementById("pagedata").innerHTML += readStringFromFileAtPath("none", dataGeneral[i], dataGeneral[i+1], false);
    }
}
justLoaded();