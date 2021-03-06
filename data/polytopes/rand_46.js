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

   allpoints.push(new PMPoint(-0.867436, 0.289058, -0.0278378));
   allpoints.push(new PMPoint(-0.653994, 0.396775, 0.593351));
   allpoints.push(new PMPoint(-0.6047, 0.283307, 0.730773));
   allpoints.push(new PMPoint(-0.674283, 0.832746, -0.251261));
   allpoints.push(new PMPoint(-0.281532, 1.58894, -0.421868));
   allpoints.push(new PMPoint(-0.397803, 0.172354, -0.86098));
   allpoints.push(new PMPoint(-0.291621, 0.610781, -0.811052));
   allpoints.push(new PMPoint(-0.174266, 1.334, -0.6579));
   allpoints.push(new PMPoint(0.549896, 0.345844, 1.2239));
   allpoints.push(new PMPoint(0.726092, 0.842485, 0.8111));
   allpoints.push(new PMPoint(0.445891, -0.0699499, -0.739086));
   allpoints.push(new PMPoint(0.427616, -0.365785, -0.635388));
   allpoints.push(new PMPoint(0.540883, -0.10838, -0.721424));
   allpoints.push(new PMPoint(0.547821, 0.387821, -0.635099));
   allpoints.push(new PMPoint(0.56598, -0.0654123, -0.707705));
   allpoints.push(new PMPoint(0.727869, -6.34148e-05, -0.125569));
   allpoints.push(new PMPoint(0.770507, 0.474832, 0.164797));
   allpoints.push(new PMPoint(0.5303, -0.574833, 0.317636));
   allpoints.push(new PMPoint(0.491354, -0.62854, 0.470569));
   allpoints.push(new PMPoint(-0.44596, -0.871666, 0.0921548));
   allpoints.push(new PMPoint(-0.197056, 0.229322, 0.981093));
   allpoints.push(new PMPoint(-0.419506, 1.42228, -0.321296));
   allpoints.push(new PMPoint(-0.50405, -0.00402645, -0.803259));
   allpoints.push(new PMPoint(-0.406788, -0.689595, -0.55694));
   allpoints.push(new PMPoint(-0.725722, 0.154552, -0.466663));
   allpoints.push(new PMPoint(-0.547692, -0.887587, 0.0106041));
   allpoints.push(new PMPoint(-0.487663, -0.774349, -0.34292));
   allpoints.push(new PMPoint(-0.804993, 0.111218, -0.282306));
   allpoints.push(new PMPoint(-0.7806, -0.352419, 0.194961));
   allpoints.push(new PMPoint(-0.879092, 0.153257, -0.0674344));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(9, 16, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 13, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 7, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 25, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(27, 28, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 16, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 9, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 8, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(15, 18, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 0, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 29, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 6, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 5, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 22, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 24, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 3, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 20, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 19, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 16, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 15, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 18, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 19, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 26, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 23, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 15, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 17, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 11, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 12, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 11, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 23, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 22, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 4, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 21, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 2, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(9, 20, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 13, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 14, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 12, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 10, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 23, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(24, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 10, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 24, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 27, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 29, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 3, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(21, 0, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 2, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 28, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(20, 25, 19, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
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
