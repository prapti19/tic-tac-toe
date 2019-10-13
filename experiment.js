
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
/* Room Objects */
var globalcount=-1;
var cube, plane;
var startTime   = Date.now();
var targetRotation = 0;
var targetRotationOnMouseDown = 0;
var geometry;
var material;

var score=0;
var textbox;
var group1 = new THREE.Group();
var group2 = new THREE.Group();
var group3=new THREE.Group();
var current;
var geometry;
var material;
var loader;
var texture;
var temp;
var p1= new THREE.Group();
var p2= new THREE.Group();
var p3=new THREE.Group();
var p4=new THREE.Group();
var p5=new THREE.Group();
var p5=new THREE.Group();
var p6=new THREE.Group();
var p7=new THREE.Group();
var p8=new THREE.Group();
var p9=new THREE.Group();
var p10=new THREE.Group();
var geometry;
var myBack;
var pdrag=new Array();
var cylinder;
var material;
var orange = new Array();
var present_number;
var textMesh1;
var textMesh2;
var textMesh3;
var textMesh4;
var textMesh5;
var showOptions;
var learnMesh;
var learnMesh_main;
var text_let;
var text_no;
var tick;
var wrong1;
var ik=1;
var timeused=0;
var numcount=1;
var stop=false;
var Animation_start=false;
//////////////
/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Couting 0-9 help</h2>";
    helpContent = helpContent + "<p>There are two phases in the given activity - </p>";
    helpContent = helpContent + "<p>1. Learn</p>";
    helpContent = helpContent + "<p>2. Fill in the blanks</p>";
    helpContent = helpContent + "<h3>Learn</h3>";
    helpContent = helpContent + "<p>Student will learn to count the objects from 0 to 9.</p>";
    helpContent = helpContent + "<h3>Fill in the blanks</h3>"
    helpContent = helpContent + "<p>In this phase there is field and 5 options</p>";
    helpContent = helpContent + "<p>The student should count the number of apples and drag the his (choice) option to the field</p>";
    helpContent = helpContent + "<p>If answer is correct thenscore will increase by 1 , and tick mark will appear.</p>";
    helpContent = helpContent + "<p>if answer choosen is wrong a wrong mark appears, there is negative marking.</p>";
    helpContent = helpContent + "<p>Student can go to next question by clicking next button in controls area.</p>";
    helpContent = helpContent + "<p>If student chooses to submit the quiz, student can click on submit button in controls area.</p>";
    helpContent = helpContent + "<p>Student's final score will appear on screen.</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p>1.Learn </p>";
    helpContent = helpContent + "<p>2.Fill in the blanks </p>";
    helpContent = helpContent + "<p>3.Next - This button goes to next question.</p>";
    helpContent = helpContent + "<p>3.Submit - This button submits the Fill in the blanks phase.</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Couting 0-9 experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment helps to learn counting from 0 to 9 by learning and then solving a quiz</p>";
    PIEupdateInfo(infoContent);

}


/***************************/
function initialiseControlVariables()
{

}
function removeelement(b)
{
    {var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}
}
function dragElement(a){PIEdragElements.push(a)}
function setDragStart(a,b){a.dragStart=b}
function setDrag(a,b){a.drag=b}
function setDragEnd(a,b){a.dragEnd=b}
current=true;
var can_go_next=false;
var can_learn=true;

function initialiseControls()
{
    PIEaddDisplayCommand("learn",function name(){
        if(can_learn){
            resetExperiment();
            a30();
    a29();
    a28();
    a21();
    a22();
    a23();
    a24();
    a25();
    a26();
    a27();
        learnMesh_main.visible=false;
        learnMesh_main1.visible=false;
        learnMesh_main2.visible=false;
        stop=true;
        p1.visible=false;
        p2.visible=false;
            p3.visible=false;
            p4.visible=false;
            p5.visible=false;
            p6.visible=false;
            p7.visible=false;
            p8.visible=false;
            p9.visible=false;
            p10.visible=false;
            // orange[i].visibile=false;
            // cube.visible=false;
        }
    });
    PIEaddDisplayCommand("Fill in the blanks",function name(){
        if(current)
        {
            stop=false;

        p1.visible=false;
        p2.visible=false;
            p3.visible=false;
            p4.visible=false;
            p5.visible=false;
            p6.visible=false;
            p7.visible=false;
            p8.visible=false;
            p9.visible=false;
            p10.visible=false;
        learnMesh_main.visible=false;
        learnMesh_main1.visible=false;
        learnMesh_main2.visible=false;
        resetExperiment();
        score=0;
        upd();
        can_go_next=true;
        current=true;
        can_learn=true;
        }

   });
   PIEaddDisplayCommand("Next",function nextfun(){
    if(current && can_go_next)
        {
        learnMesh_main.visible=false;
        learnMesh_main1.visible=false;
        learnMesh_main2.visible=false;
        resetExperiment();
        upd();
        current=true;
        can_learn=true;
        }
   });
    PIEaddDisplayCommand("submit",function submitfun(){
        current=false;
        console.log(score);
        resetExperiment();
        can_go_next=false;
        tick.visible=false;
        wrong1.visible=false;
        showscore();
        current=true;
        can_learn=true;

   });
}
var sc;
var score_text;
var score_text1;
var learn_end=true;
function showscore()
{
     var materialFront = new THREE.MeshBasicMaterial( { color: 0xFF00FF } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "Score "+score,
        {
            size: 10, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        sc = new THREE.Mesh(textGeom, textMaterial );
        sc.position.set(-10,30,2);
        sc.name=0;
        PIEaddElement(sc);

    });

    if(score<5){
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "Try to score atleast 5 marks",
        {
            size: 3, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        score_text = new THREE.Mesh(textGeom, textMaterial );
        score_text.position.set(-10,4,2);

        PIEaddElement(score_text);

    });

    }else{
        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "Congrats! You have learned counting",
        {
            size: 5, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        score_text1 = new THREE.Mesh(textGeom, textMaterial );
        score_text1.position.set(-30,5,2);

        PIEaddElement(score_text1);

    });
    }

}

function valuation()
{
     geometry = new THREE.BoxGeometry(7,10,0)
   tick = createMesh(geometry,"tick.png");
    tick.position.set(27,0,2)
    tick.visible=false;

    PIEaddElement(tick);
    geometry = new THREE.BoxGeometry(7,10,0)
   wrong1 = createMesh(geometry,"wrong.png");
    wrong1.position.set(27,0,2)
    wrong1.visible=false;
    PIEaddElement(wrong1);
}
function makevisiblefalse()
{
    removeelement(tick);
    removeelement(wrong1);

}
/*************************************/
function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 50;
    mySceneBRX = 52;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}
function initialiseOtherVariables()
{
    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}


function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);

       PIErender();
       return mesh;
}
function random()
{
    return Math.floor((Math.random() * 8) + 1);
}
var arr = [];
function uniquerandom()
{

while(arr.length < 5){
    var randomnumber = Math.floor(Math.random()*8) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
}
// //***********************************Drag elements***********************//////////////////////////////
// var OneX,OneY,OneZ,match=0;
// var drag=[[5,15,2],[15,15,2],[-5,15,2],[25,15,2],[35,15,2]];
//
// function myMainDrag(element, newpos)
// {
//     OneX = newpos.x;
//     OneY = newpos.y;
//     OneZ = newpos.z;
//    if(newpos.x< 20 && newpos.x>5 && newpos.y<0 && newpos.y>-2)
//     {
//         OneX = 16;
//         OneY = 0;
//         OneZ = 2;
//         if(pdrag[element.name]==present_number)
//         {
//                 tick.visible=true;
//                 score+=1;
//         }
//         else
//         {
//             wrong1.visible=true;
//         }
//       setDrag(element,true);
//       //setDragEnd(element,myMainEnd);
//     //  setDragStart(element,false);
//
//     }
//
//     element.position.set(OneX, OneY, OneZ);
// }
//
// function myMainEnd(element, newpos){
//
//   // element.position.set(16,0,2);
// }
//
// function myTwoEnd(element, newpos)
// {
// //element.position.set(16,0,2);
// }
// /////***************************************************************************//////////////////
function multiplechoice()
{
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x00FFFF } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {

        var textGeom = new THREE.TextGeometry(arr[0],
        {
            size: 3, height: 1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(5,15,2);
        textMesh1.name=0;
        PIEaddElement(textMesh1);
        // dragElement(textMesh1);
        // setDrag(textMesh1,myMainDrag);
        // setDragEnd(textMesh1,myTwoEnd);
        // PIEdragElement(textMesh1);
        //   PIEsetDrag(textMesh1, myBallDrag1);
          PIEdragElement(textmesh1);
          PIEsetDrag(textmesh1,optionDrag);
          PIEsetDragEnd(textmesh1,onOptionClick);
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {

        var textGeom = new THREE.TextGeometry(arr[1],{
            size: 3, height: 1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh2 = new THREE.Mesh(textGeom, textMaterial );
        textMesh2.position.set(15,15,2);
        textMesh2.name=1;
     PIEaddElement(textMesh2);
     PIEdragElement(textmesh2);
     PIEsetDrag(textmesh2,optionDrag);
     PIEsetDragEnd(textmesh2,onOptionClick);
        // dragElement(textMesh2);
        // setDrag(textMesh2,myMainDrag);
        // setDragEnd(textMesh2,myTwoEnd);

    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {

        var textGeom = new THREE.TextGeometry(arr[2],{
            size: 3, height: 1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh3 = new THREE.Mesh(textGeom, textMaterial );
    textMesh3.position.set(-5,15,2);
         textMesh3.name=2;
     PIEaddElement(textMesh3);
     PIEdragElement(textmesh3);
     PIEsetDrag(textmesh3,optionDrag);
     PIEsetDragEnd(textmesh3,onOptionClick);
        // dragElement(textMesh3);
        // setDrag(textMesh3,myMainDrag);
        // setDragEnd(textMesh3,myTwoEnd);


    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        choice3= (Math.floor(Math.random()*10)+0)+8;
        var textGeom = new THREE.TextGeometry(arr[3],{
            size: 3, height: 1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh4 = new THREE.Mesh(textGeom, textMaterial );
    textMesh4.position.set(25,15,2);
         textMesh4.name=3;
     PIEaddElement(textMesh4);
     PIEdragElement(textmesh4);
     PIEsetDrag(textmesh4,optionDrag);
     PIEsetDragEnd(textmesh4,onOptionClick);
        // dragElement(textMesh4);
        // setDrag(textMesh4,myMainDrag);
        // setDragEnd(textMesh4,myTwoEnd);


    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {

        var textGeom = new THREE.TextGeometry(arr[4],{
            size: 3, height: 1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh5 = new THREE.Mesh(textGeom, textMaterial );
    textMesh5.position.set(35,15,2);
         textMesh5.name=4;
     PIEaddElement(textMesh5);
     PIEdragElement(textmesh5);
     PIEsetDrag(textmesh5,optionDrag);
     PIEsetDragEnd(textmesh5,onOptionClick);
        // dragElement(textMesh5);
        // setDrag(textMesh5,myMainDrag);
        // setDragEnd(textMesh5,myTwoEnd);


    });

    PIEaddElement(group2);



}
var text_in_fill;
function main(){

     valuation();

     var materialFront = new THREE.MeshBasicMaterial( { color: 0x00FFFF } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "Select the number, and drag it properly into the answer box",
        {
            size: 2, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
       text_in_fill  = new THREE.Mesh(textGeom, textMaterial );
        text_in_fill.position.set(-20,5,2);
        text_in_fill.name=0;
        PIEaddElement(text_in_fill);
        });

    var x=10;
    var y=0;
    var k=-1;
        present_number=arr[Math.floor(Math.random()*5)];
        pdrag.push(arr[0]);
        pdrag.push(arr[1]);
        pdrag.push(arr[2]);
        pdrag.push(arr[3]);
        pdrag.push(arr[4]);
        for(i=0;i<present_number;i++)
        {
            k=k+1;
            geometry = new THREE.BoxGeometry(5,5,0.1)
            orange[i] = createMesh(geometry,"12.png");
            orange[i].position.set(-15+(k*x),35+y,2);
            if((i+1)%9==0)
            {
                y=y-6;
                k=-1;
            }

        PIEaddElement(orange[i]);
        orange[i].visibile=true;
        group1.add(orange[i]);


    }
    PIEaddElement(group1);
geometry = new THREE.BoxGeometry( 6, 5, 0.1 );
 material = new THREE.MeshBasicMaterial( {color: 0xF0F8FF} );
 cube = new THREE.Mesh( geometry, material );
    cube.position.set(16,0,2);
    cube.visible=true;
    PIEaddElement(cube);

    multiplechoice();


}
var title= new THREE.Group();
function learntitle()
{
      var materialFront = new THREE.MeshBasicMaterial( { color: 0x7FFF00 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry("Couting 0-9",
        {
            size: 15, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        learnMesh_main = new THREE.Mesh(textGeom, textMaterial );
        learnMesh_main.position.set(-40,10,2);
        learnMesh_main.name=0;
        PIEaddElement(learnMesh_main);
        textMaterial.callback=function() {

        }



        });
}
function learntitlechange()
{
    if(stop){
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x00FFFF } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();
    learn_end=true;
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "Next lets practice, choose option from control panel",
        {
            size: 3, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        learnMesh_main = new THREE.Mesh(textGeom, textMaterial );
        learnMesh_main.position.set(-30,5,2);
        learnMesh_main.name=0;
        PIEaddElement(learnMesh_main);




        });
    }

}
///////////////////************* Main function**************?///////////////////////////////
function loadExperimentElements()
{
    current=true;
    PIEsetExperimentTitle("Counting 0-9");
    PIEsetDeveloperName("Purva Mhasakar");
    //PIEhideControlElement();

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();
     initialiseControls();
    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

   var geometry  = new THREE.SphereGeometry(500,0,0);
    var material  = new THREE.MeshBasicMaterial();

    var backgroundTexture = THREE.ImageUtils.loadTexture( 'back2.jpg' );
    backgroundTexture.wrapS = backgroundTexture.wrapT = THREE.RepeatWrapping;
    backgroundTexture.repeat.set(7,7 );

    material = new THREE.MeshBasicMaterial( { map: backgroundTexture } );
    material.side  = THREE.BackSide;
    var mesh  = new THREE.Mesh(geometry, material);
    PIEaddElement(mesh);


    var geometry = new THREE.CircleGeometry( 6.5,32 );
    bunddle2 = createMesh(geometry,"star.jpg");
    bunddle2.position.set(-19,16.5,0.1)
    PIEaddElement(bunddle2);

    var geometry = new THREE.CircleGeometry( 6.5,32 );
    bunddle2 = createMesh(geometry,"star.jpg");
    bunddle2.position.set(49,16.5,0.1)
    PIEaddElement(bunddle2);
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x7FFF00 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry("Counting",
        {
            size: 12, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        learnMesh_main = new THREE.Mesh(textGeom, textMaterial );
        learnMesh_main.position.set(-20,29.5,0);
        learnMesh_main.name=0;
        PIEaddElement(learnMesh_main);
        textMaterial.callback=function() {

        }
        });
        loader.load( 'optimer_bold.typeface.js', function ( font ) {
            var textGeom1 = new THREE.TextGeometry("From 0 to 9",
            {
                size: 7, height: 0.25, curveSegments: 3,
                font: font, weight: "bold", style: "normal",
                bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
                material: 0, extrudeMaterial: 0
            });
            var textMaterial1 = new THREE.MeshFaceMaterial(materialArray);
            learnMesh_main1 = new THREE.Mesh(textGeom1, textMaterial1 );
            learnMesh_main1.position.set(-9,12,2);
            learnMesh_main1.name=0;
            PIEaddElement(learnMesh_main1);
            textMaterial1.callback=function() {

            }
            });

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
                var textGeom2 = new THREE.TextGeometry("Learn and practice",
                {
                    size: 4, height: 0.1, curveSegments: 3,
                    font: font, style: "normal",
                    bevelThickness: 0.00, bevelSize: 0.2, bevelEnabled: true,
                    material: 0, extrudeMaterial: 0
                });
                var textMaterial2 = new THREE.MeshFaceMaterial(materialArray);
                learnMesh_main2 = new THREE.Mesh(textGeom2, textMaterial2 );
                learnMesh_main2.position.set(-9,-12,2);
                learnMesh_main2.name=0;
                PIEaddElement(learnMesh_main2);
                textMaterial2.callback=function() {

                }
                });


    PIEadjustDisplayScene();
    //PIEstartAnimation();
    PIErender();
    PIEsetAreaOfInterest(mySceneTLX-15, mySceneTLY+15, mySceneBRX, mySceneBRY-15);

}


/**
 * This function resets the position of all experiment elements to their default values.
 * <p>
 * This is called during initial document load.
 * This is also be called by the system provided reset button.
 * <p>
 * Apart from the position, this should also reset all variables which can be controlled by the user.
 * This function will also clear any output variables/graphs
 */
function resetExperiment(){

    for(i=0;i<present_number;i++)
        {
            group1.remove(orange[i]);
        }

    arr =[];
    pdrag=[];
    uniquerandom();
    removeelement(cube);
    removeelement(score_text);
    removeelement(score_text1);
    removeelement(sc);
    removeelement(text_in_fill);
    removeelement(textMesh1);
    removeelement(textMesh2);
    removeelement(textMesh3);
    removeelement(textMesh4);
    removeelement(textMesh5);


}
function upd(){
    makevisiblefalse();
    main();
}
var bunddle;
var bunddle1;
var bunddle2;
var animation_tex=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Zero"];
/////////////////***********slideshow learn phase functions***********************/////////////////////////
function a21()
{
 //
 //  var geometry  = new THREE.SphereGeometry(500, 32, 32);
 // var material  = new THREE.MeshBasicMaterial();
 //
 // var backgroundTexture = THREE.ImageUtils.loadTexture( 'back2.jpg' );
 // backgroundTexture.wrapS = backgroundTexture.wrapT = THREE.RepeatWrapping;
 // backgroundTexture.repeat.set( 7, 7 );
 //
 // material = new THREE.MeshBasicMaterial( { map: backgroundTexture } );
 // material.side  = THREE.BackSide;
 // var mesh  = new THREE.Mesh(geometry, material);
 // PIEaddElement(mesh);

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xFF7F50 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x7FFF00 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

   geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-10,35,0.1)
    PIEaddElement(bunddle2);
    p1.add(bunddle2);

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "1",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p1.add(text_let);
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[0],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p1.add(text_let);
    });



    PIEaddElement(p1);
    p1.visible=false;
}
function a22()
{
    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();


   geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
   bunddle2.position.set(-10,35,0.1)
   PIEaddElement(bunddle2);
   p2.add(bunddle2);


  geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-7,35,0.1)
    PIEaddElement(bunddle2);
    p2.add(bunddle2);

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "2",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p2.add(text_let);
    });
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[1],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p2.add(text_let);
    });

    PIEaddElement(p2);
    p2.visible=false;
}
function a23()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();

    geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-10,35,0.1)
    PIEaddElement(bunddle2);
    p3.add(bunddle2);

    geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-7,35,0.1)
    PIEaddElement(bunddle2);
    p3.add(bunddle2);

    geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-4,35,0.1)
    PIEaddElement(bunddle2);
    p3.add(bunddle2);

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "3",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p3.add(text_let);
    });
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[2],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p3.add(text_let);
    });


    PIEaddElement(p3);
    p3.visible=false;
}
function a24()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[3],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p4.add(text_let);
    });


   geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-10,35,0.1)
    PIEaddElement(bunddle2);
    p4.add(bunddle2);

    geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-7,35,0.1)
    PIEaddElement(bunddle2);
    p4.add(bunddle2);

    geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-4,35,0.1)
    PIEaddElement(bunddle2);
    p4.add(bunddle2);

    geometry = new THREE.BoxGeometry(1,20,0)
   bunddle2 = createMesh(geometry,"2.png");
    bunddle2.position.set(-1,35,0.1)
    PIEaddElement(bunddle2);
    p4.add(bunddle2);

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "4",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p4.add(text_let);
    });

    PIEaddElement(p4);
    p4.visible=false;
}
function a25()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();


       geometry = new THREE.BoxGeometry(1,20,0)
       bunddle2 = createMesh(geometry,"2.png");
        bunddle2.position.set(-10,35,0.1)
        PIEaddElement(bunddle2);
        p5.add(bunddle2);

        geometry = new THREE.BoxGeometry(1,20,0)
       bunddle2 = createMesh(geometry,"2.png");
        bunddle2.position.set(-7,35,0.1)
        PIEaddElement(bunddle2);
        p5.add(bunddle2);

        geometry = new THREE.BoxGeometry(1,20,0)
       bunddle2 = createMesh(geometry,"2.png");
        bunddle2.position.set(-4,35,0.1)
        PIEaddElement(bunddle2);
        p5.add(bunddle2);

        geometry = new THREE.BoxGeometry(1,20,0)
       bunddle2 = createMesh(geometry,"2.png");
        bunddle2.position.set(-1,35,0.1)
        PIEaddElement(bunddle2);
        p5.add(bunddle2);


        geometry = new THREE.BoxGeometry(1,20,0)
        bunddle2 = createMesh(geometry,"2.png");
        bunddle2.position.set(2,35,0.1)
        PIEaddElement(bunddle2);
        p5.add(bunddle2);


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[4],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p5.add(text_let);
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "5",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p5.add(text_let);
    });

    PIEaddElement(p5);
    p5.visible=false;
}
function a26()
{


    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();


     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(-10,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);

      geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(-7,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);

      geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(-4,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);

      geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(-1,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);


      geometry = new THREE.BoxGeometry(1,20,0)
      bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(2,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);

      geometry = new THREE.BoxGeometry(1,20,0)
      bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(5,35,0.1)
      PIEaddElement(bunddle2);
      p6.add(bunddle2);

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[5],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p6.add(text_let);
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "6",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p6.add(text_let);
    });

    PIEaddElement(p6);
    p6.visible=false;
}
function a27()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();


         geometry = new THREE.BoxGeometry(1,20,0)
         bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(-10,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);

          geometry = new THREE.BoxGeometry(1,20,0)
         bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(-7,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);

          geometry = new THREE.BoxGeometry(1,20,0)
         bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(-4,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);

          geometry = new THREE.BoxGeometry(1,20,0)
         bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(-1,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);


          geometry = new THREE.BoxGeometry(1,20,0)
          bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(2,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);

          geometry = new THREE.BoxGeometry(1,20,0)
          bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(5,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);

          geometry = new THREE.BoxGeometry(1,20,0)
          bunddle2 = createMesh(geometry,"2.png");
          bunddle2.position.set(8,35,0.1)
          PIEaddElement(bunddle2);
          p7.add(bunddle2);



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[6],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p7.add(text_let);
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "7",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p7.add(text_let);
    });

    PIEaddElement(p7);
    p7.visible=false;
}


function a28()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[7],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p8.add(text_let);
    });

    geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-10,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-7,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-4,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-1,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);


     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(2,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(5,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(8,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(11,35,0.1)
     PIEaddElement(bunddle2);
     p8.add(bunddle2);



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "8",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p8.add(text_let);
    });

    PIEaddElement(p8);
    p8.visible=false;
}
function a29()
{

    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[8],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p9.add(text_let);
    });

    geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-10,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-7,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-4,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
    bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(-1,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);


     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(2,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(5,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(8,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
     bunddle2.position.set(11,35,0.1)
     PIEaddElement(bunddle2);
     p9.add(bunddle2);

     geometry = new THREE.BoxGeometry(1,20,0)
     bunddle2 = createMesh(geometry,"2.png");
      bunddle2.position.set(15,35,0.1)
      PIEaddElement(bunddle2);
      p9.add(bunddle2);

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "9",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p9.add(text_let);
    });

    PIEaddElement(p9);
    p9.visible=false;
}

function a30()
{
    var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
    var materialArray = [ materialFront, materialSide ];
     var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( animation_tex[9],
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(5,15,2);

        PIEaddElement(text_let);
        p10.add(text_let);
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        var textGeom = new THREE.TextGeometry( "0",
        {
            size: 6, height: 0.1, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.2, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text_let = new THREE.Mesh(textGeom, textMaterial );
        text_let.position.set(25,30,2);

        PIEaddElement(text_let);
        p10.add(text_let);
    });

    PIEaddElement(p10);
    p10.visible=false;

}

//////////////****************************************************************///////////////////////////////
var ten,five,one;
var time=0;
var flag=0;
////////////////?*******************Animation code*****************?////////////////////////////
function updateExperimentElements(t, dt)
{
    timeused+=dt;
    if(stop)
{
    Animation_start=true;
        if(timeused>1000 && numcount==1)
        {

            timeused=0;
            p10.visible=true;
            numcount+=1;

        }
    else if(timeused>3000 && numcount==2 ){
        timeused=0;
        p10.visible=false;
            p1.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==3 ){
        timeused=0;
        p1.visible=false;
            p2.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==4 ){
        timeused=0;
        p2.visible=false;
            p3.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==5 ){
        timeused=0;
        p3.visible=false;
            p4.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==6 ){
        timeused=0;
        p4.visible=false;
            p5.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==7 ){
        timeused=0;
        p5.visible=false;
            p6.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==8 ){
        timeused=0;
        p6.visible=false;
            p7.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==9 ){
        timeused=0;
        p7.visible=false;
            p8.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount==10 ){
        timeused=0;
        p8.visible=false;
            p9.visible=true;
        numcount+=1;
    }
    else if(timeused>3000 && numcount>10)
        {
            p9.visible=false;
            learntitlechange();
            stop=false;
            Animation_start=false;


        }
}

}
 /////////////////////*********************End of animation code*//////////////////////////////////////////////
///////////////////////////////////*************************END**************/////////////////////////////////////
