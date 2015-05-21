var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.Tracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/
		this.tracker = new AR.Tracker("assets/VirtualCampus1.0.wtc", {
			onLoaded: this.worldLoaded
		});

		/*
			The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
		*/
		var CSEDeptButtonImg = new AR.ImageResource("assets/CSEDept/CSEDeptButton.jpg");
        var CSEDeptButton = new AR.ImageDrawable( CSEDeptButtonImg, 0.1, {
        			offsetX: 0.1,
        			offsetY: 0.1,
        			zOrder: 1
        			/*,
        			onClick = function() {
        			    AR.context.openInBrowser("");
        			};*/
            });
        var CSEDeptASLButtonImg = new AR.ImageResource("assets/CSEDept/CSEDeptASLButton.jpg");
        var CSEDeptASLButton = new AR.ImageDrawable( CSEDeptASLButtonImg , 0.1, {
                    offsetX: -0.9,
                	offsetY: -0.1,
                	zOrder: 1
                	/*,
                	onClick = function() {
                	AR.context.openInBrowser("");
                	};*/
            });
        var CSEDeptDBLButtonImg = new AR.ImageResource("assets/CSEDept/CSEDeptDBLButton.jpg");
        var CSEDeptDBLButton = new AR.ImageDrawable( CSEDeptDBLButtonImg , 0.1, {
            offsetX: 0.1,
            offsetY: -0.1,
            zOrder: 1
            /*,
            onClick = function() {
            AR.context.openInBrowser("");
            };*/
           });
        var CSEDeptRLButtonImg = new AR.ImageResource("assets/CSEDept/CSEDeptRLButton.jpg");
        var CSEDeptRLButton = new AR.ImageDrawable( CSEDeptRLButtonImg , 0.1, {
            offsetX: 0.7,
            offsetY: -0.1,
            zOrder: 1
            /*,
            onClick = function() {
            AR.context.openInBrowser("");
            };*/
          });
        var CSEScholarButtonImg = new AR.ImageResource("assets/CSEDept/CSEDeptScholarButton.jpg");
        var CSEScholarButton = new AR.ImageDrawable( CSEScholarButtonImg, 0.1, {
                			offsetX: 0.1,
                			offsetY: 0.3,
                			zOrder: 1/*,
                			onClick = function() {
                                			AR.context.openInBrowser("");
                                		};*/
                		});
		/*
			The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
			Please note that in this case the target name is a wildcard. Wildcards can be used to respond to any target defined in the target collection. If you want to respond to a certain target only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
		*/
		var CSEDeptT2O = new AR.Trackable2DObject(this.tracker, "CSEDept", {
			drawables: {
			  				cam: [  CSEDeptButton,CSEScholarButton,CSEDeptASLButton,CSEDeptDBLButton,CSEDeptRLButton]
			}
		});
/* CCF */
		var CCF = new AR.ImageResource("assets/CCF/CCF.jpg");
        var CCFButton = new AR.ImageDrawable( CCF, 0.1, {
            offsetX: -0.4,
            offsetY: 0.1,
            zOrder: 1/*,
            onClick = function() {
            AR.context.openInBrowser("");
            };*/
            });
        var CCFCadCamLabImg = new AR.ImageResource("assets/CCF/CCFCadCamLab.jpg");
        var CCFCadCamLabButton = new AR.ImageDrawable( CCFCadCamLabImg , 0.1, {
            offsetX: 0.5,
            offsetY: 0.1,
            zOrder: 1/*,
            onClick = function() {
            AR.context.openInBrowser("");
            };*/
          });
        var CCFChemDeptImg = new AR.ImageResource("assets/CCF/CCFChemDept.jpg");
        var CCFChemDeptButton = new AR.ImageDrawable( CCFChemDeptImg , 0.1, {
            offsetX: 0.1,
            offsetY: 0.2,
            zOrder: 1/*,
            onClick = function() {
            AR.context.openInBrowser("");
            };*/
           });
        var CCFT2O = new AR.Trackable2DObject(this.tracker, "CCF", {
            drawables: {
        	    cam: [CCFButton,CCFCadCamLabButton,CCFChemDeptButton]
            }
          });
/* Ganesh Mandir */
        var GaneshMandir = new AR.ImageResource("assets/GaneshMandir/GaneshMandir.jpg");
        var GaneshMandirButton = new AR.ImageDrawable( GaneshMandir , 0.1, {
                    offsetX: 0,
                    offsetY: 0,
                    zOrder: 1/*,
                    onClick = function() {
                    AR.context.openInBrowser("");
                    };*/
           });
        var GaneshMandirLibraryImg = new AR.ImageResource("assets/GaneshMandir/GaneshMandirLibrary.jpg");
        var GaneshMandirLibraryButton = new AR.ImageDrawable( GaneshMandirLibraryImg , 0.1, {
                    offsetX: -0.5,
                    offsetY: 0,
                    zOrder: 1
                    /*,
                    onClick = function() {
                    AR.context.openInBrowser("");
                    };*/
         });
        var GaneshMandirSocietyImg = new AR.ImageResource("assets/GaneshMandir/GaneshMandirSociety.jpg");
        var GaneshMandirSocietyButton = new AR.ImageDrawable( GaneshMandirSocietyImg, 0.1, {
                            offsetX: 0.4,
                            offsetY: 0,
                            zOrder: 1
                            /*,
                            onClick = function() {
                            AR.context.openInBrowser("");
                            };*/
           });
        var GaneshMandirT2O = new AR.Trackable2DObject(this.tracker, "GaneshMandir", {
            drawables: {
                cam: [GaneshMandirButton,GaneshMandirLibraryButton,GaneshMandirSocietyButton]
                }
         });
/* Globe */
    var Globe = new AR.ImageResource("assets/Globe/Globe.jpg");
    var GlobeButton = new AR.ImageDrawable( Globe, 0.1, {
        offsetX: 0,
        offsetY: 0,
        zOrder: 1/*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var GlobeLibraryImg = new AR.ImageResource("assets/Globe/GlobeLibrary.jpg");
    var GlobeLibraryButton = new AR.ImageDrawable( GlobeLibraryImg , 0.1, {
        offsetX: 0.4,
        offsetY: 0,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var GlobeGymKhanaImg = new AR.ImageResource("assets/Globe/GlobeGymKhana.jpg");
    var GlobeGymKhanaButton = new AR.ImageDrawable( GlobeGymKhanaImg, 0.1, {
        offsetX: -0.5,
        offsetY: 0,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var GlobeT2O = new AR.Trackable2DObject(this.tracker, "Globe", {
        drawables: {
            cam: [GlobeButton,GlobeLibraryButton,GlobeGymKhanaButton]
        }
      });
/* GymKhana */

    var GymKhanaImg = new AR.ImageResource("assets/GymKhana/GymKhana.jpg");
    var GymKhanaButton = new AR.ImageDrawable( GymKhanaImg , 0.1, {
        offsetX: 0,
        offsetY: 0,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
        });
    var GymKhanaGroundImg = new AR.ImageResource("assets/GymKhana/GymKhanaGround.jpg");
    var GymKhanaGroundButton = new AR.ImageDrawable( GymKhanaGroundImg, 0.1, {
        offsetX: 0.6,
        offsetY: -0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var GymKhanaT2O = new AR.Trackable2DObject(this.tracker, "GymKhana", {
        drawables: {
            cam: [GymKhanaButton,GymKhanaGroundButton]
        }
      });

/* DirectorHome */

    var DirectorHomeImg = new AR.ImageResource("assets/DirectorHome/DirectorHome.jpg");
    var DirectorHomeButton = new AR.ImageDrawable( DirectorHomeImg , 0.1, {
        offsetX: -0.3,
        offsetY: -0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var DirectorHomeMainGateImg = new AR.ImageResource("assets/DirectorHome/DirectorHomeMainGate.jpg");
    var DirectorHomeMainGateButton = new AR.ImageDrawable( DirectorHomeMainGateImg, 0.1, {
        offsetX: -0.8,
        offsetY: -0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
      });
    var DirectorHomeStoreImg = new AR.ImageResource("assets/DirectorHome/DirectorHomeStore.jpg");
    var DirectorHomeStoreButton = new AR.ImageDrawable( DirectorHomeStoreImg, 0.1, {
        offsetX: 0.6,
        offsetY: -0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var DirectorHomeT2O = new AR.Trackable2DObject(this.tracker, "DirectorHome", {
        drawables: {
            cam: [DirectorHomeButton,DirectorHomeStoreButton,DirectorHomeMainGateButton]
        }
        });


/* MiniCF */

    var MiniCFImg = new AR.ImageResource("assets/MiniCF/MiniCF.jpg");
    var MiniCFButton = new AR.ImageDrawable( MiniCFImg , 0.1, {
        offsetX: -0.1,
        offsetY: 0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var MiniCFCyberHostelImg = new AR.ImageResource("assets/MiniCF/MiniCFCyberHostel.jpg");
    var MiniCFCyberHostelButton = new AR.ImageDrawable( MiniCFCyberHostelImg, 0.1, {
        offsetX: -0.6,
        offsetY: 0,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
      });
    var MiniCFMainGateParkingImg = new AR.ImageResource("assets/MiniCF/MiniCFMainGateParking.jpg");
    var MiniCFMainGateParkingButton = new AR.ImageDrawable( MiniCFMainGateParkingImg, 0.1, {
        offsetX: 0.6,
        offsetY: -0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var MiniCFT2O = new AR.Trackable2DObject(this.tracker, "MiniCF", {
        drawables: {
            cam: [MiniCFButton,MiniCFCyberHostelButton,MiniCFMainGateParkingButton]
        }
        });


    var OpenAirTheaterImg = new AR.ImageResource("assets/OpenAirTheater/OpenAirTheater.jpg");
    var OpenAirTheaterButton = new AR.ImageDrawable( OpenAirTheaterImg, 0.1, {
        offsetX: 0,
        offsetY: 0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var OpenAirTheaterClass19Img = new AR.ImageResource("assets/OpenAirTheater/OpenAirTheaterClass19.jpg");
    var OpenAirTheaterClass19Button = new AR.ImageDrawable( OpenAirTheaterClass19Img, 0.1, {
        offsetX: -0.45,
        offsetY: -0.2,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var OpenAirTheaterClass20Img = new AR.ImageResource("assets/OpenAirTheater/OpenAirTheaterClass20.jpg");
    var OpenAirTheaterClass20Button = new AR.ImageDrawable( OpenAirTheaterClass20Img, 0.1, {
        offsetX: 0.3,
        offsetY: -0.2,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });

    var OpenAirTheaterT2O = new AR.Trackable2DObject(this.tracker, "OpenAirTheater", {
        drawables: {
            cam: [OpenAirTheaterButton,OpenAirTheaterClass19Button,OpenAirTheaterClass20Button]
        }
      });


    var MainBuildingFrontImg = new AR.ImageResource("assets/MainBuildingFront/MainBuildingFront.jpg");
    var MainBuildingFrontButton = new AR.ImageDrawable( MainBuildingFrontImg, 0.1, {
        offsetX: 0,
        offsetY: 0.4,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });
    var MainBuildingFrontElectronicsImg = new AR.ImageResource("assets/MainBuildingFront/MainBuildingFrontElectronics.jpg");
    var MainBuildingFrontElectronicsButton = new AR.ImageDrawable( MainBuildingFrontElectronicsImg, 0.1, {
        offsetX: -0.4,
        offsetY: 0.1,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });

    var MainBuildingFrontDirectorOfficeImg = new AR.ImageResource("assets/MainBuildingFront/MainBuildingFrontDirectorOffice.jpg");
    var MainBuildingFrontDirectorOfficeButton = new AR.ImageDrawable( MainBuildingFrontDirectorOfficeImg, 0.1, {
        offsetX: 0,
        offsetY: 0.2,
        zOrder: 1
        /*,
        onClick = function() {
        AR.context.openInBrowser("");
        };*/
       });

    var MainBuildingFrontWebsiteImg = new AR.ImageResource("assets/MainBuildingFront/MainBuildingFrontWebsite.jpg");
    var MainBuildingFrontWebsiteButton = new AR.ImageDrawable( MainBuildingFrontWebsiteImg, 0.1, {
        offsetX: 0,
        offsetY: 0,
        zOrder: 1,
        onClick: function() {
        AR.context.openInBrowser("http://walchandsangli.ac.in");
        }
       });

    var MainBuildingFrontT2O = new AR.Trackable2DObject(this.tracker, "MainBuildingFront", {
        drawables: {
            cam: [MainBuildingFrontElectronicsButton,MainBuildingFrontButton,MainBuildingFrontDirectorOfficeButton,MainBuildingFrontWebsiteButton]
        }
      });

    var ITDeptImg = new AR.ImageResource("assets/ITDept/ITDept.jpg");
    var ITDeptButton = new AR.ImageDrawable( ITDeptImg, 0.1, {
        offsetX: 0,
        offsetY: 0.1,
        zOrder: 1
       });

    var ITDeptT2O = new AR.Trackable2DObject(this.tracker, "ITDept", {
        drawables: {
            cam: [ITDeptButton]
        }
      });

    var ITLabImg = new AR.ImageResource("assets/ITLab/ITLab.jpg");
    var ITLabButton = new AR.ImageDrawable( ITLabImg, 0.1, {
        offsetX: 0,
        offsetY: 0.4,
        zOrder: 1
       });

    var ITLabMechaImg = new AR.ImageResource("assets/ITLab/ITLabMecha.jpg");
        var ITLabMechaButton = new AR.ImageDrawable( ITLabMechaImg, 0.1, {
            offsetX: 0,
            offsetY: 0,
            zOrder: 1
           });
    var ITLabT2O = new AR.Trackable2DObject(this.tracker, "ITLab", {
        drawables: {
            cam: [ITLabButton,ITLabMechaButton]
        }
      });


	},

	worldLoaded: function worldLoadedFn() {
		//var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		//var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
		//document.getElementById('loadingMessage').innerHTML =
		//	"<div" + cssDivLeft + ">Scan Target &#35;1 (surfer):</div>" +
		//	"<div" + cssDivRight + "><img src='assets/WCE_Sangli1.jpg' width='20px' height='20px'></img></div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);
	}
};

World.init();
