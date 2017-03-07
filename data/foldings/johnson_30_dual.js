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

   var axes = [[33,32],
      [27,26],
      [25,24],
      [22,10],
      [9,21],
      [19,18],
      [17,16],
      [15,14],
      [13,12],
      [11,10],
      [9,8],
      [3,7],
      [6,2],
      [7,6],
      [5,4],
      [0,3],
      [2,1],
      [3,2],
      [1,0]];

   var angles = [2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.0943951023932,
      2.0943951023932,
      2.0943951023932,
      2.0943951023932,
      2.51327412287183,
      2.51327412287183,
      2.0943951023932,
      2.0943951023932,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183,
      2.51327412287183];

   var subtrees = [[40,41],
      [38,39],
      [36,37],
      [34,35],
      [32,33,40,41],
      [30,31],
      [28,29],
      [26,27,38,39],
      [24,25,36,37],
      [22,23,34,35],
      [20,21,32,33,40,41],
      [18,19,30,31],
      [16,17,28,29],
      [14,15,26,27,38,39],
      [12,13,24,25,36,37],
      [10,11,22,23,34,35],
      [8,9,20,21,32,33,40,41],
      [6,7,14,15,16,17,18,19,26,27,28,29,30,31,38,39],
      [4,5,12,13,24,25,36,37]];

   var polytoperoot = [[0,-0.872192898236927,0.0864398620736035],
      [-0.610672012122073,-0.988088071591802,1.59876008371387],
      [-2.61803398874989,0.447213595499958,-0.723606797749979]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.39297, 0, 0));
   allpoints.push(new PMPoint(1.55739, 0.328837, 0));
   allpoints.push(new PMPoint(-0.164418, 0.328837, 0));
   allpoints.push(new PMPoint(-0.164418, -0.328837, 0));
   allpoints.push(new PMPoint(1.55739, -0.328837, 0));
   allpoints.push(new PMPoint(1.39297, 0.657674, 0));
   allpoints.push(new PMPoint(0, 0.657674, 0));
   allpoints.push(new PMPoint(1.61357, -0.294121, 0));
   allpoints.push(new PMPoint(2.40094, 0.0908882, 0));
   allpoints.push(new PMPoint(-1.00797, 0.0908882, 0));
   allpoints.push(new PMPoint(-0.22059, -0.294121, 0));
   allpoints.push(new PMPoint(0, -0.657674, 0));
   allpoints.push(new PMPoint(1.39297, -0.657674, 0));
   allpoints.push(new PMPoint(1.55739, 0.98651, 0));
   allpoints.push(new PMPoint(-0.164418, 0.98651, 0));
   allpoints.push(new PMPoint(2.40094, 0.566785, 0));
   allpoints.push(new PMPoint(1.61357, 0.951794, 0));
   allpoints.push(new PMPoint(-0.22059, 0.951794, 0));
   allpoints.push(new PMPoint(-1.00797, 0.566785, 0));
   allpoints.push(new PMPoint(1.71024, -0.648833, 0));
   allpoints.push(new PMPoint(2.07074, -0.720998, 0));
   allpoints.push(new PMPoint(-0.677763, -0.720998, 0));
   allpoints.push(new PMPoint(-0.317265, -0.648833, 0));
   allpoints.push(new PMPoint(-0.164418, -0.98651, 0));
   allpoints.push(new PMPoint(1.55739, -0.98651, 0));
   allpoints.push(new PMPoint(1.39297, 1.31535, 0));
   allpoints.push(new PMPoint(0, 1.31535, 0));
   allpoints.push(new PMPoint(2.07074, 1.37867, 0));
   allpoints.push(new PMPoint(1.71024, 1.30651, 0));
   allpoints.push(new PMPoint(-0.317265, 1.30651, 0));
   allpoints.push(new PMPoint(-0.677763, 1.37867, 0));
   allpoints.push(new PMPoint(2.37927, -0.920935, 0));
   allpoints.push(new PMPoint(2.69608, -0.734391, 0));
   allpoints.push(new PMPoint(-1.3031, -0.734391, 0));
   allpoints.push(new PMPoint(-0.986295, -0.920935, 0));
   allpoints.push(new PMPoint(0, -1.31535, 0));
   allpoints.push(new PMPoint(1.39297, -1.31535, 0));
   allpoints.push(new PMPoint(1.55739, 1.64418, 0));
   allpoints.push(new PMPoint(-0.164418, 1.64418, 0));
   allpoints.push(new PMPoint(2.47463, -2.31064, 0));
   allpoints.push(new PMPoint(2.81395, -2.45216, 0));

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

   faces.faces.push(new THREE.Face3(5, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 0, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 12, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 39, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 24, 36, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 36, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 32, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(33, 40, 41, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 32, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 8, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 18, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 30, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 10, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 34, 35, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[22].vector);
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
