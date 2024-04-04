# Implementing Basic Geopose 

The basic GeoPose have the following structure:

	{
		"position": {
			"lat": 47.7,
			"lon": -122.3,
			"h": 11.5
		},
		"angles": {
			"yaw": 5.514456741060452,
			"pitch": -0.43610515937237904,
			"roll": 0.0
		}
	}

First, we have to define the equatorial and polar radius of the celestial body 
we are using as the geographic frame. Usually, these values will be the ones 
defined in the [World Geodetic System (WGS84)](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84)

	equatorialRadius = 6378137.0;
	polarRadius = 6356752.314245;
	flatteningFactor = equatorialRadius / polarRadius;

Next, performing some basic trigonometric calculations on the geographic frame:
	
	lng = geopose.position.lng  * (Math.PI/180); 
	lat = geopose.position.lat * (Math.PI/180);
	alt = geopose.position.h;
	lngSin = Math.sin(lng); 
	lngCos = Math.cos(lng);
	latSin = Math.sin(lat); 
	latCos = Math.cos(lat);
	geoX = lngCos * latCos; 
	geoY = latSin; 
	geoZ = lngSin * latCos;

Calculate the relative position on the surface of the ellipsoid defined by the geographic frame:

	position = new Vector (
		(geoX * equatorRadius + alt), 
		(geoY * polaRadius + (alt/ flatteningFactor),
		(geoZ * equatorRadius + alt)
	);

Create the vertical vector:

	verticalVector = new Vector(geoX, geoY, geoZ);
	verticalVector.normalize();
	

Calculate the initial (Euler) rotation of the space at that point in the space:

	x0 = latSin * equatorRadius;
	x1 = latSin * (equatorRadius + 1);
	y0 = latCos * polaRadius;
	y1 = latCos * (equatorRadius + 1) * flatteningFactor;
	dx = x1 - x0, dy = y1 - y0;
	l = Math.sqrt((dx * dx) + (dy * dy));
	rotation = new Euler (
			-Math.PI/2 + Math.acos(dx / l),
			Math.PI/2 - lng,
			// The Z component is always 0
	);

From here, the best course of action would usually leave the creation of the
transformation matrix to the 3D engine.
	