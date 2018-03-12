var ds;
var totalEntries;
var loaded = false;
if (bracket == null) {
  bracket = [[{"myid":"0","seed":"1","name":"Virginia"}],[{"myid":"1","seed":"16","name":"UMBC"}],[{"myid":"2","seed":"8","name":"Creighton"}],[{"myid":"3","seed":"9","name":"Kansas St"}],[{"myid":"4","seed":"5","name":"Kentucky"}],[{"myid":"5","seed":"12","name":"Davidson"}],[{"myid":"6","seed":"4","name":"Arizona"}],[{"myid":"7","seed":"13","name":"Buffalo"}],[{"myid":"8","seed":"6","name":"Miama (Fl)"}],[{"myid":"9","seed":"11","name":"Loyola-Chi"}],[{"myid":"10","seed":"3","name":"Tennessee"}],[{"myid":"11","seed":"14","name":"Wright St."}],[{"myid":"12","seed":"7","name":"Nevada"}],[{"myid":"13","seed":"10","name":"Texas"}],[{"myid":"14","seed":"2","name":"Cincinnati"}],[{"myid":"15","seed":"15","name":"Georgia St."}],[{"myid":"16","seed":"1","name":"Xavier"}],[{"myid":"17","seed":"16","name":"NCCU/TxSO"}],[{"myid":"18","seed":"8","name":"Missouri"}],[{"myid":"19","seed":"9","name":"Florida St."}],[{"myid":"20","seed":"5","name":"Ohio St."}],[{"myid":"21","seed":"12","name":"S. Dak. St."}],[{"myid":"22","seed":"4","name":"Gonzaga"}],[{"myid":"23","seed":"13","name":"UNC-Green."}],[{"myid":"24","seed":"6","name":"Houston"}],[{"myid":"25","seed":"11","name":"San Diego St"}],[{"myid":"26","seed":"3","name":"Michigan"}],[{"myid":"27","seed":"14","name":"Montana"}],[{"myid":"28","seed":"7","name":"Texas A&M"}],[{"myid":"29","seed":"10","name":"Providence"}],[{"myid":"30","seed":"2","name":"N. Carolina"}],[{"myid":"31","seed":"15","name":"Lipscomb"}],[{"myid":"32","seed":"1","name":"Villanova"}],[{"myid":"33","seed":"16","name":"LIU/RAD"}],[{"myid":"34","seed":"8","name":"Va. Tech"}],[{"myid":"35","seed":"9","name":"Alabama"}],[{"myid":"36","seed":"5","name":"W. Virginia"}],[{"myid":"37","seed":"12","name":"Murray St."}],[{"myid":"38","seed":"4","name":"Wichita St"}],[{"myid":"39","seed":"13","name":"Marshall"}],[{"myid":"40","seed":"6","name":"Florida"}],[{"myid":"41","seed":"11","name":"STBON/UCLA"}],[{"myid":"42","seed":"3","name":"Texas Tech"}],[{"myid":"43","seed":"14","name":"SF Austin"}],[{"myid":"44","seed":"7","name":"Arkansas"}],[{"myid":"45","seed":"10","name":"Butler"}],[{"myid":"46","seed":"2","name":"Purdue"}],[{"myid":"47","seed":"15","name":"CSFullerton"}],[{"myid":"48","seed":"1","name":"Kansas"}],[{"myid":"49","seed":"16","name":"Penn"}],[{"myid":"50","seed":"8","name":"Seton Hakk"}],[{"myid":"51","seed":"9","name":"NC State"}],[{"myid":"52","seed":"5","name":"Clemson"}],[{"myid":"53","seed":"12","name":"New Mex. St"}],[{"myid":"54","seed":"4","name":"Auburn"}],[{"myid":"55","seed":"13","name":"Charleston"}],[{"myid":"56","seed":"6","name":"TCU"}],[{"myid":"57","seed":"11","name":"ASU/SYR"}],[{"myid":"58","seed":"3","name":"Michigan St"}],[{"myid":"59","seed":"14","name":"Bucknell"}],[{"myid":"60","seed":"7","name":"Rhode Island"}],[{"myid":"61","seed":"10","name":"Oklahoma"}],[{"myid":"62","seed":"2","name":"Duke"}],[{"myid":"63","seed":"15","name":"Ioana"}],[{"myid":"64","seed":"16","name":"Arizona St."}],[{"myid":"65","seed":"16","name":"Syracuse"}],[{"myid":"66","seed":"11","name":"N.C. Central"}],[{"myid":"67","seed":"11","name":"Texas So."}],[{"myid":"68","seed":"11","name":"LIU-Brooklyn"}],[{"myid":"69","seed":"11","name":"Radford"}],[{"myid":"70","seed":"16","name":"St. Bona"}],[{"myid":"71","seed":"16","name":"UCLA"}],[{"myid":"72","seed":"16","name":" "}],[{"myid":"73","seed":"11","name":" "}],[{"myid":"74","seed":"11","name":" "}],[{"myid":"75","seed":"16","name":" "}],[{"myid":"76","seed":"0","name":"MIDWEST"}],[{"myid":"77","seed":"0","name":"WEST"}],[{"myid":"78","seed":"0","name":"EAST"}],[{"myid":"79","seed":"0","name":"SOUTH"}],[{"myid":"80","seed":"0","name":"Midwest Seed"}],[{"myid":"81","seed":"0","name":"East Seed"}],[{"myid":"82","seed":"0","name":"West Seed"}],[{"myid":"83","seed":"0","name":"South Seed"}],[{"myid":"84","seed":"","name":""}],[{"myid":"85","seed":"","name":""}],[{"myid":"86","seed":"","name":""}],[{"myid":"87","seed":"","name":""}],[{"myid":"88","seed":"","name":""}],[{"myid":"89","seed":"","name":""}],[{"myid":"90","seed":"","name":""}],[{"myid":"91","seed":"","name":""}],[{"myid":"92","seed":"","name":""}],[{"myid":"93","seed":"","name":""}],[{"myid":"94","seed":"","name":""}],[{"myid":"95","seed":"","name":""}],[{"myid":"96","seed":"","name":""}],[{"myid":"97","seed":"","name":""}],[{"myid":"98","seed":"","name":""}],[{"myid":"99","seed":"","name":""}],[{"myid":"100","seed":"","name":""}],[{"myid":"101","seed":"","name":""}],[{"myid":"102","seed":"","name":""}],[{"myid":"103","seed":"","name":""}],[{"myid":"104","seed":"","name":""}],[{"myid":"105","seed":"","name":""}],[{"myid":"106","seed":"","name":""}],[{"myid":"107","seed":"","name":""}],[{"myid":"108","seed":"","name":""}],[{"myid":"109","seed":"","name":""}],[{"myid":"110","seed":"","name":""}],[{"myid":"111","seed":"","name":""}],[{"myid":"112","seed":"","name":""}],[{"myid":"113","seed":"","name":""}],[{"myid":"114","seed":"","name":""}],[{"myid":"115","seed":"","name":""}],[{"myid":"116","seed":"","name":""}],[{"myid":"117","seed":"","name":""}],[{"myid":"118","seed":"","name":""}],[{"myid":"119","seed":"","name":""}],[{"myid":"120","seed":"","name":""}],[{"myid":"121","seed":"","name":""}],[{"myid":"122","seed":"","name":""}],[{"myid":"123","seed":"","name":""}],[{"myid":"124","seed":"","name":""}],[{"myid":"125","seed":"","name":""}],[{"myid":"126","seed":"","name":""}],[{"myid":"127","seed":"","name":""}],[{"myid":"128","seed":"","name":""}],[{"myid":"129","seed":"","name":""}],[{"myid":"130","seed":"","name":""}],[{"myid":"131","seed":"","name":""}],[{"myid":"132","seed":"","name":""}],[{"myid":"133","seed":"","name":""}],[{"myid":"134","seed":"","name":""}],[{"myid":"135","seed":"","name":""}],[{"myid":"136","seed":"","name":""}],[{"myid":"137","seed":"","name":""}],[{"myid":"138","seed":"","name":""}],[{"myid":"139","seed":"","name":""}],[{"myid":"140","seed":"","name":""}],[{"myid":"141","seed":"","name":""}],[{"myid":"142","seed":"","name":""}],[{"myid":"143","seed":"","name":""}],[{"myid":"144","seed":"","name":""}],[{"myid":"145","seed":"","name":""}],[{"myid":"146","seed":"","name":""}]];
  }
var allData = bracket;
var sheetCount = 1;
var TRUEallData = [];
// var bracket = "{{ bracket }}";
// console.log(bracket);
$(document).ready(function(){

  //   // allData = req.session.bracket;
  // $.post("/bracket", { bracket: undefined }, function(data,status) {
  // });
  console.log('is there anybody out there?');
  // console.log(bracket);
  //POPULATE DATA FROM GOOGLE SPREADSHEET
  function loadData(which) {
    // console.log(user.email);
    console.log('oi');

      //LOAD DATA WITH MISO
      ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "1zaxB_wH60g9nQg5tqBEUhA2SSakSwt7bzBzpapPs7pM",
          worksheet : which
      });

      ds.fetch({
        success : function() {
          //console.log(ds.column("thetalk").data);
          parseData();
        },
        error : function() {
          console.error("ds.fetch failed", ds);
        }
      });
    }

    function parseData() {

      var $len = ds.column("id").data.length;
      totalEntries = $len;

      //LOOP THRU GOOGLE DATA AND PUT INTO OBJECT
      for (var j=0; j<$len; j++) {
        var counter = ds.column("id").data[j];
        TRUEallData[counter] = [ {
                    myid: ds.column("id").data[j],
                    seed: ds.column("seed").data[j],
                    name: ds.column("name").data[j]
                    }];
        // allData[counter] = [ {
        //             myid: ds.column("id").data[j],
        //             seed: ds.column("seed").data[j],
        //             name: ds.column("name").data[j]
        //             }];


      }
      //console.log(allData);

      if (sheetCount < 5) {
        sheetCount ++;
        loadData(sheetCount);
      } else {
        showData();
      }
    }

    // function encodeData() {
    //
    // }

    function showData() {
      console.log(allData);
    //console.log(allData.length, ds.column("id").data.length);
      for (var k=0; k < allData.length; k++) {
        //console.log(k, allData[k][0].seed, allData[k][0].myid, allData[k][0].name);
        if (k <= 31) {
           $("#c1" + "s" + (k + 1)).text("(" + TRUEallData[k][0].seed + ") " + TRUEallData[k][0].name);
           continue;
           //First Column
        }
        if (k >= 32 && k <= 63) {
           $("#c11" + "s" + (k - 31)).text("(" + TRUEallData[k][0].seed + ") " + TRUEallData[k][0].name);
           continue;
           //Last column
        }
        if (k >= 63 && k <= 75) {
          // if (allData[k][0].name )
          //First Four
          $("#c12" + "s" + (k - 63)).text("(" + TRUEallData[k][0].seed + ") " + TRUEallData[k][0].name);
           continue;
        }
        if (k == 76) {
          $("#r1").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 77) {
          $("#r2").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 78) {
          $("#r3").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 79) {
          $("#r4").text(TRUEallData[k][0].name);
           continue;
        }

        if (k == 80) {
          $("#fflabel1").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 81) {
          $("#fflabel2").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 82) {
          $("#fflabel3").text(TRUEallData[k][0].name);
           continue;
        }
        if (k == 83) {
          $("#fflabel4").text(TRUEallData[k][0].name);
           continue;
        }

        // WINNER BRACKET LOGIC
        // (this is optional: if you just want to publish the first round you can just publish the first round.)
        // Note: the if ( allData[k][0].seed === null ) { continue; } code is what makes sure we don't publish
        // any slot's data before we have data in the spreadsheet for that round and slot.

        // *******************************
        // ROUND OF 32
        // *******************************
        if (k > 83 && k < 92 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c2" + "s" + (k - 83)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 101 && k < 110 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c2" + "s" + (k - 93)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 116 && k < 125 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c10" + "s" + (k - 116)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 131 && k < 140 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c10" + "s" + (k - 123)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ****************
        // SWEET 16
        // ****************
        if (k > 91 && k < 96 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c3" + "s" + (k - 91)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 109 && k < 114 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c3" + "s" + (k - 105)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 124 && k < 129 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c9" + "s" + (k - 124)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 139 && k < 144 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c9" + "s" + (k - 135)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ********
        // ELITE 8
        // ********
        if (k == 96 || k == 97 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c4" + "s" + (k - 95)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 114 || k == 115 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c4" + "s" + (k - 111)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 129 || k == 130 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c8" + "s" + (k - 128)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 144 || k == 145 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c8" + "s" + (k - 141)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ****
        // FINAL FOUR
        // ****
        if (k == 98 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c5s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 116 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c5s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 131 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c7s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 146 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c7s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // **
        // CHAMPIONSHIP
        // **
        if (k == 99 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            // if ( allData[k][0].name === TRUEallData[k][0].name) {
            //  }
            $("#c6s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 100 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c6s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // **
        // CHAMPION
        // **
        if (k == 101 ) {
            if ( allData[k][0].seed === "" ) { continue; }
            $("#c6s0").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
      }
      $('#save-bracket').css("background-color", "#000");
      $('#save-bracket').text('Save Bracket');
      loaded = true;
    }

    //END DATA LOADING
  //   allData[counter] = [ {
  //               myid: ds.column("id").data[j],
  //               seed: ds.column("seed").data[j],
  //               name: ds.column("name").data[j]
  //               }];
  // }
  //

//COMMENT STARTING HERE ONCE GAMES START


	  $(".slot").click(function() {

      if (parseInt($(this).attr('data-col')) <= 5) {

        var tmpTxtA = $("#c" + (parseInt($(this).attr('data-col')) + 1 ) + "s" + $(this).attr('data-game')).text();
        var tmpColA = $(this).attr('data-col');

        $("#c" + (parseInt($(this).attr('data-col')) + 1 ) + "s" + $(this).attr('data-game')).text($(this).text());

        $('.slot').each(function() {
            var text = $(this).text();
            if (text == tmpTxtA) {
              if ($(this).attr('data-col') > tmpColA && $(this).attr('data-col') <=6 ) {
                $(this).text('');
                $(this).id
              }
            }
        });


      } else if (parseInt($(this).attr('data-col')) >= 7 && parseInt($(this).attr('data-col')) < 12) {

          var tmpTxtB = $("#c" + (parseInt($(this).attr('data-col')) - 1 ) + "s" + $(this).attr('data-game')).text();
          var tmpColB = $(this).attr('data-col');

          $("#c" + (parseInt($(this).attr('data-col')) - 1 ) + "s" + $(this).attr('data-game')).text($(this).text());

          $('.slot').each(function() {
              var text = $(this).text();
              if (text == tmpTxtB) {
                if (parseInt($(this).attr('data-col')) < tmpColB) {
                    $(this).text('');
                }
              }
          });

      }

      if (parseInt($(this).attr('data-col')) == 6) {
        $("#c6s0").text($(this).text());
      }

      if (parseInt($(this).attr('data-col')) > 11) {
        var tmpTxtC = $("#c" + (parseInt($(this).attr('data-col'))) + "s" + $(this).attr('data-game')).text();

        $("#c" + (parseInt($(this).attr('data-col'))) + "s" + $(this).attr('data-game')).text($(this).text());
        $("#ff" + $(this).attr('data-game')).text($(this).text());

        $('.slot').each(function() {
            var text = $(this).text();
            if (text == tmpTxtC) {
              if ($(this).attr('data-col') < 11) {
                $(this).text('');
              }
            }
        });
      }
    });

//STOP COMMENT HERE WHEN GAMES STARTING

    $("#save-bracket").click(function() {
      // window.print();
      // $('#save-bracket').text('Saved!');
      if (loaded) {
        $('#save-bracket').css("background-color", "#666");
        $('#save-bracket').text('Saving...');
        loaded = false;
        console.log(this);
        $('.slot').each(function() {
          var text = $(this).text();
          text = text.substring(1);
          var seed = parseInt(text);
          if(!seed){
            seed = "";
          }
          var name = text.split(" ").slice(1).join(" ");
          allData[parseInt($(this).attr('b_id'))] = [ {
                      myid: parseInt($(this).attr("b_id")),
                      seed: String(seed),
                      name: name
                      }];
        });
        // console.log(allData);
        $.post("/bracket", { bracket: allData }, function(data,status) {
          $('#save-bracket').text('Saved!');
          $('#save-bracket').css("background-color", "#666");
          setTimeout(function(){
            $('#save-bracket').css("background-color", "#000");
            $('#save-bracket').text('Save Bracket');
            loaded = true;
          }, 5000);
        });
      }
    });
    loadData(sheetCount);

}); // end document.ready block
