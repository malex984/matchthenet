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

   var axes = [[17,11],
      [15,14],
      [6,15],
      [11,5],
      [1,11],
      [2,6],
      [6,1],
      [5,4],
      [1,5],
      [0,3],
      [3,2],
      [2,1],
      [1,0]];

   var angles = [2.21429743558818,
      2.45687345058751,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818,
      2.45687345058751,
      2.21429743558818,
      2.21429743558818,
      2.21429743558818];

   var subtrees = [[24,25],
      [22,23],
      [20,21],
      [19],
      [17,18,24,25],
      [16],
      [14,15,20,21,22,23],
      [12,13],
      [11,17,18,19,24,25],
      [9,10],
      [7,8],
      [6,14,15,16,20,21,22,23],
      [4,5,11,12,13,17,18,19,24,25]];

   var polytoperoot = [[-0.442253888719088,-0.255335401702124,0.722197576082253],
      [-1.24478330492758,-3.454967714499e-17,0.622391652463791],
      [-0.158918622597891,1.37627564304206,-0.317837245195782]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(1.02134, 0, 0));
   allpoints.push(new PMPoint(-0.602014, 0.898176, 0));
   allpoints.push(new PMPoint(-0.625441, 0.807441, 0));
   allpoints.push(new PMPoint(-0.625441, -0.807441, 0));
   allpoints.push(new PMPoint(-0.602014, -0.898176, 0));
   allpoints.push(new PMPoint(0.0357329, 1.57181, 0));
   allpoints.push(new PMPoint(-2.45728, 0.898176, 0));
   allpoints.push(new PMPoint(-1.5636, 0.403721, 0));
   allpoints.push(new PMPoint(-1.43288, 0.182, 0));
   allpoints.push(new PMPoint(-0.807441, -0.625441, 0));
   allpoints.push(new PMPoint(0.0357329, -1.57181, 0));
   allpoints.push(new PMPoint(-1.5636, -0.403721, 0));
   allpoints.push(new PMPoint(-2.45728, -0.898176, 0));
   allpoints.push(new PMPoint(0.965487, 1.01981, 0));
   allpoints.push(new PMPoint(0.12505, 1.60016, 0));
   allpoints.push(new PMPoint(-1.58762, 2.46998, 0));
   allpoints.push(new PMPoint(0.12505, -1.60016, 0));
   allpoints.push(new PMPoint(0.965487, -1.01981, 0));
   allpoints.push(new PMPoint(-1.58762, -2.46998, 0));
   allpoints.push(new PMPoint(0.476861, 2.559, 0));
   allpoints.push(new PMPoint(-0.0657269, 3.42429, 0));
   allpoints.push(new PMPoint(1.54584, 1.86025, 0));
   allpoints.push(new PMPoint(0.705399, 2.4406, 0));
   allpoints.push(new PMPoint(-0.0657269, -3.42429, 0));
   allpoints.push(new PMPoint(0.476861, -2.559, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 5, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 1, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 11, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 1, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 14, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 7, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 13, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 5, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 19, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 11, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 24, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 15, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(6, 20, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 6, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 14, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
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
