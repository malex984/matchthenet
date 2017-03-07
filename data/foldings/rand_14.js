// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'folding' + divNumber );
var renderer = foldingRenderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.insertBefore(renderer.domElement, container.childNodes[0]);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(zoom, rendererWidth/rendererHeight, 0.1, 1000);

   camera.position.set(0, 0, 5);
   camera.lookAt(0, 0, 0);
   camera.up.set(0, 1, 0);

   // class to allow move points together with labels and spheres
   var PMPoint = function (x,y,z) {
      this.vector = new THREE.Vector3(x,y,z);
      this.sprite = null;
      this.sphere = null;
   }
   PMPoint.prototype.makelabel = function(label) {
      this.sprite = textSprite( label );
      this.sprite.position.copy(this.vector);
   }
   PMPoint.prototype.makesphere = function(radius,material) {
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(radius), material);
      this.sphere.position.copy(this.vector);
   }

   PMPoint.prototype.setX = function(x) {
      this.vector.setX(x);
      if (this.sprite) {
         this.sprite.position.setX(x);
      }
      if (this.sphere) {
         this.sphere.position.setX(x);
      }
   };
   PMPoint.prototype.setY = function(y) {
      this.vector.setY(y);
      if (this.sprite) {
         this.sprite.position.setY(y);
      }
      if (this.sphere) {
         this.sphere.position.setY(y);
      }
   };
   PMPoint.prototype.setZ = function(z) {
      this.vector.setZ(z);
      if (this.sprite) {
         this.sprite.position.setZ(z);
      }
      if (this.sphere) {
         this.sphere.position.setZ(z);
      }
   };
   PMPoint.prototype.set = function(x,y,z) {
      this.vector.set(x,y,z);
      if (this.sprite) {
         this.sprite.position.set(x,y,z);
      }
      if (this.sphere) {
         this.sphere.position.set(x,y,z);
      }
   };
   PMPoint.prototype.add = function(o) {
      if (this.sprite) {
         o.add(this.sprite);
      }
      if (this.sphere) {
         o.add(this.sphere);
      }
   };


   var controls = new THREE.TrackballControls(camera, container);

   controls.noPan = controlsNoPan;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var axes = [[15,14],
      [14,13],
      [12,11],
      [8,7],
      [9,8],
      [0,6],
      [6,5],
      [4,3],
      [3,2],
      [5,4],
      [2,1],
      [1,0]];

   var angles = [2.54120391847907,
      2.36343508114965,
      2.16586987437096,
      1.49031437996213,
      1.95688740244579,
      1.58530092369251,
      1.97443632806906,
      1.17197084104007,
      2.1509325765856,
      1.53404691019211,
      2.19123820506948,
      1.84310199239242];

   var subtrees = [[40,41],
      [37,38,39],
      [34,35,36],
      [30,31,32,33],
      [28,29],
      [24,25,26,27],
      [22,23],
      [18,19,20,21],
      [16,17],
      [13,14,15,37,38,39,40,41],
      [10,11,12,34,35,36],
      [7,8,9,28,29,30,31,32,33]];

   var polytoperoot = [[-0.40216672641356,0.220348752869762,0.679400654537122],
      [0.330636596590911,-0.110697659663628,1.703506055237],
      [1.0315090597901,-0.222526036798831,-0.214667717349947]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.619299, 0, 0));
   allpoints.push(new PMPoint(0.958407, 0.455605, 0));
   allpoints.push(new PMPoint(0.815965, 1.54772, 0));
   allpoints.push(new PMPoint(0.542505, 1.65868, 0));
   allpoints.push(new PMPoint(0.138847, 1.2392, 0));
   allpoints.push(new PMPoint(-0.149329, 0.200789, 0));
   allpoints.push(new PMPoint(0.282631, -1.54771, 0));
   allpoints.push(new PMPoint(0.589973, -1.39953, 0));
   allpoints.push(new PMPoint(1.09272, -0.719729, 0));
   allpoints.push(new PMPoint(1.37883, -0.406521, 0));
   allpoints.push(new PMPoint(1.62234, -0.0505048, 0));
   allpoints.push(new PMPoint(1.59126, 0.130024, 0));
   allpoints.push(new PMPoint(-0.700862, 2.11621, 0));
   allpoints.push(new PMPoint(-0.900253, 1.26929, 0));
   allpoints.push(new PMPoint(-0.189462, 1.23863, 0));
   allpoints.push(new PMPoint(1.66152, 0.345408, 0));
   allpoints.push(new PMPoint(1.69636, 1.0767, 0));
   allpoints.push(new PMPoint(1.71724, 1.97744, 0));
   allpoints.push(new PMPoint(1.95939, 2.53718, 0));
   allpoints.push(new PMPoint(1.41143, 3.2322, 0));
   allpoints.push(new PMPoint(0.892163, 2.93658, 0));
   allpoints.push(new PMPoint(-0.163196, 1.11053, 0));
   allpoints.push(new PMPoint(-0.680001, 0.527185, 0));
   allpoints.push(new PMPoint(-0.765118, 0.106179, 0));
   allpoints.push(new PMPoint(-0.996072, 0.0538613, 0));
   allpoints.push(new PMPoint(-1.15767, -1.14501, 0));
   allpoints.push(new PMPoint(-0.896292, -1.29304, 0));
   allpoints.push(new PMPoint(1.68358, -1.30937, 0));
   allpoints.push(new PMPoint(1.52327, -0.745685, 0));
   allpoints.push(new PMPoint(0.232102, -1.84382, 0));
   allpoints.push(new PMPoint(1.11246, -2.64452, 0));
   allpoints.push(new PMPoint(1.77831, -2.06146, 0));
   allpoints.push(new PMPoint(1.62979, -1.7501, 0));
   allpoints.push(new PMPoint(2.20605, 0.00177801, 0));
   allpoints.push(new PMPoint(2.4204, 0.272072, 0));
   allpoints.push(new PMPoint(2.0146, 0.727337, 0));
   allpoints.push(new PMPoint(-1.20267, 2.44058, 0));
   allpoints.push(new PMPoint(-2.14304, 1.71128, 0));
   allpoints.push(new PMPoint(-1.07767, 1.13823, 0));
   allpoints.push(new PMPoint(-1.03904, 1.09785, 0));
   allpoints.push(new PMPoint(-0.895797, 0.909285, 0));

   <!-- Vertex style -->
   var points_material = new THREE.MeshBasicMaterial ( {color: 0x000000, } );

   points_material.side = THREE.DoubleSide;

   <!-- POINTS -->
   allpoints[0].makesphere(0.02,points_material);
   allpoints[1].makesphere(0.02,points_material);
   allpoints[2].makesphere(0.02,points_material);
   allpoints[3].makesphere(0.02,points_material);
   allpoints[4].makesphere(0.02,points_material);
   allpoints[5].makesphere(0.02,points_material);
   allpoints[6].makesphere(0.02,points_material);
   allpoints[7].makesphere(0.02,points_material);
   allpoints[8].makesphere(0.02,points_material);
   allpoints[9].makesphere(0.02,points_material);
   allpoints[10].makesphere(0.02,points_material);
   allpoints[11].makesphere(0.02,points_material);
   allpoints[12].makesphere(0.02,points_material);
   allpoints[13].makesphere(0.02,points_material);
   allpoints[14].makesphere(0.02,points_material);
   allpoints[15].makesphere(0.02,points_material);
   allpoints[16].makesphere(0.02,points_material);
   allpoints[17].makesphere(0.02,points_material);
   allpoints[18].makesphere(0.02,points_material);
   allpoints[19].makesphere(0.02,points_material);
   allpoints[20].makesphere(0.02,points_material);
   allpoints[21].makesphere(0.02,points_material);
   allpoints[22].makesphere(0.02,points_material);
   allpoints[23].makesphere(0.02,points_material);
   allpoints[24].makesphere(0.02,points_material);
   allpoints[25].makesphere(0.02,points_material);
   allpoints[26].makesphere(0.02,points_material);
   allpoints[27].makesphere(0.02,points_material);
   allpoints[28].makesphere(0.02,points_material);
   allpoints[29].makesphere(0.02,points_material);
   allpoints[30].makesphere(0.02,points_material);
   allpoints[31].makesphere(0.02,points_material);
   allpoints[32].makesphere(0.02,points_material);
   allpoints[33].makesphere(0.02,points_material);
   allpoints[34].makesphere(0.02,points_material);
   allpoints[35].makesphere(0.02,points_material);
   allpoints[36].makesphere(0.02,points_material);
   allpoints[37].makesphere(0.02,points_material);
   allpoints[38].makesphere(0.02,points_material);
   allpoints[39].makesphere(0.02,points_material);
   allpoints[40].makesphere(0.02,points_material);
   allpoints[41].makesphere(0.02,points_material);

   for (index = 0; index < allpoints.length; ++index) {
      allpoints[index].add(obj);
   }
   var faces = new THREE.Geometry();

   <!-- VERTICES -->
   faces.vertices.push(allpoints[0].vector);
   faces.vertices.push(allpoints[1].vector);
   faces.vertices.push(allpoints[2].vector);
   faces.vertices.push(allpoints[3].vector);
   faces.vertices.push(allpoints[4].vector);
   faces.vertices.push(allpoints[5].vector);
   faces.vertices.push(allpoints[6].vector);
   faces.vertices.push(allpoints[7].vector);
   faces.vertices.push(allpoints[8].vector);
   faces.vertices.push(allpoints[9].vector);
   faces.vertices.push(allpoints[10].vector);
   faces.vertices.push(allpoints[11].vector);
   faces.vertices.push(allpoints[12].vector);
   faces.vertices.push(allpoints[13].vector);
   faces.vertices.push(allpoints[14].vector);
   faces.vertices.push(allpoints[15].vector);
   faces.vertices.push(allpoints[16].vector);
   faces.vertices.push(allpoints[17].vector);
   faces.vertices.push(allpoints[18].vector);
   faces.vertices.push(allpoints[19].vector);
   faces.vertices.push(allpoints[20].vector);
   faces.vertices.push(allpoints[21].vector);
   faces.vertices.push(allpoints[22].vector);
   faces.vertices.push(allpoints[23].vector);
   faces.vertices.push(allpoints[24].vector);
   faces.vertices.push(allpoints[25].vector);
   faces.vertices.push(allpoints[26].vector);
   faces.vertices.push(allpoints[27].vector);
   faces.vertices.push(allpoints[28].vector);
   faces.vertices.push(allpoints[29].vector);
   faces.vertices.push(allpoints[30].vector);
   faces.vertices.push(allpoints[31].vector);
   faces.vertices.push(allpoints[32].vector);
   faces.vertices.push(allpoints[33].vector);
   faces.vertices.push(allpoints[34].vector);
   faces.vertices.push(allpoints[35].vector);
   faces.vertices.push(allpoints[36].vector);
   faces.vertices.push(allpoints[37].vector);
   faces.vertices.push(allpoints[38].vector);
   faces.vertices.push(allpoints[39].vector);
   faces.vertices.push(allpoints[40].vector);
   faces.vertices.push(allpoints[41].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 34, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 39, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 9, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(29, 8, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 0, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 33, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 7, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 5, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 26, 27, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: foldingLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);	var render = function () {
		foldingRenderIds[divNumber]= requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	};


	render();

	function computeCentroid(geom) {
		centroid = new THREE.Vector3();
		geom.vertices.forEach(function(v) {
			centroid.add(v);			
		});
		centroid.divideScalar(geom.vertices.length);
		return centroid;
	}

	function explode(factor) {
		var obj, c;
		for (var i = 0; i< all_objects.length; ++i) {
			obj = all_objects[i];
			c = centroids[i];
	
			obj.position.set(c.x*factor, c.y*factor, c.z*factor);
		}	
	}

	var pos = 150* Math.PI;

	function updateFactor() {
		pos++;
		return Math.sin(.01*pos)+1;
	}

	function makelabel(message, x, y, z, params) {
		var spritey = textSprite( message, params );
		spritey.position.set(x, y, z);
		obj.add(spritey);
	}

	function textSprite(message, parameters)
	{
		if ( parameters === undefined ) parameters = {};

		var fontface = "Helvetica";

		var fontsize = parameters.hasOwnProperty("fontsize") ? 
			parameters["fontsize"] : 18;
		fontsize = fontsize*10;

		var canvas = document.createElement('canvas');
		var size = 1000;
		canvas.width = size;
		canvas.height = size;
		var context = canvas.getContext('2d');
		context.font = fontsize + "px " + fontface;

		// text color
		context.fillStyle = "rgba(0, 0, 0, 1.0)";

		context.fillText(message, size/2, size/2);

		// canvas contents will be used for a texture
		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		var spriteMaterial = new THREE.SpriteMaterial(
			{map: texture, useScreenCoordinates: false});
		var sprite = new THREE.Sprite(spriteMaterial);
		return sprite;
	}



   foldingSubtrees[divNumber] = subtrees;
   foldingAngles[divNumber] = angles;
   foldingAxes[divNumber] = axes;
   foldingAllpoints[divNumber] = allpoints;
   foldingObjects[divNumber] = obj;
   foldingControls[divNumber] = controls;
   foldingCameras[divNumber] = camera;
   foldingPolytopeRoots[divNumber] = polytoperoot;
});
appendFoldingScript();
