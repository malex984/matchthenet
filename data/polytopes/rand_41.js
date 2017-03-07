// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'poly' + divNumber );
var renderer = renderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.appendChild(renderer.domElement);

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
controls.noZoom = controlsNoZoom;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(-1.17206, -0.129145, -1.48494));
   allpoints.push(new PMPoint(-0.0156755, 0.290819, -0.0378784));
   allpoints.push(new PMPoint(-0.0154684, 0.290953, -0.0391738));
   allpoints.push(new PMPoint(-0.177509, -0.152779, 0.506226));
   allpoints.push(new PMPoint(0.052112, 0.070164, 0.270204));
   allpoints.push(new PMPoint(0.0776476, 0.197886, 0.108228));
   allpoints.push(new PMPoint(0.155885, 0.214421, -0.368618));
   allpoints.push(new PMPoint(0.160765, 0.229982, -0.308504));
   allpoints.push(new PMPoint(0.419037, -0.322415, -0.657515));
   allpoints.push(new PMPoint(0.408384, -0.283369, -0.684715));
   allpoints.push(new PMPoint(0.411439, -0.221924, -0.0230399));
   allpoints.push(new PMPoint(0.331075, 0.0661833, -0.0694789));
   allpoints.push(new PMPoint(0.34066, 0.0526259, -0.0674368));
   allpoints.push(new PMPoint(0.375975, -0.076945, 0.0214461));
   allpoints.push(new PMPoint(0.384221, -0.109623, 0.0203863));
   allpoints.push(new PMPoint(0.440718, -0.365571, -0.275383));
   allpoints.push(new PMPoint(0.377792, -0.257331, -0.736548));
   allpoints.push(new PMPoint(0.149859, -1.61815, -0.500249));
   allpoints.push(new PMPoint(0.0893508, -1.833, -0.669422));
   allpoints.push(new PMPoint(0.210254, -0.818181, 0.096818));
   allpoints.push(new PMPoint(-0.0325018, -0.319439, 0.41322));
   allpoints.push(new PMPoint(-1.3048, -1.33303, -2.82201));
   allpoints.push(new PMPoint(-0.186988, -2.16235, -0.965322));
   allpoints.push(new PMPoint(-0.418633, -0.159047, 0.453624));
   allpoints.push(new PMPoint(-0.544218, -0.76789, -0.0166496));
   allpoints.push(new PMPoint(-1.42874, -0.511487, -2.03176));
   allpoints.push(new PMPoint(-1.28381, -0.170953, -1.59239));
   allpoints.push(new PMPoint(-0.579792, 0.0527859, 0.133604));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(24, 23, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 27, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 26, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 23, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 24, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 22, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 18, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 26, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 0, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 6, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 16, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 16, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 9, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 8, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 18, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 23, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 3, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 4, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 6, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 7, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 12, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 19, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 10, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 14, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 10, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 15, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 9, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 4, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 13, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 12, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 27, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(26, 2, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 5, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 11, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 7, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 2, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 7, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 18, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 8, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 20, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 14, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 25, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 17, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(19, 15, 10, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
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



   polytopeObjects[divNumber] = obj;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
