# GeoPose Sandbox API Reference

## Classes 

[Angle](#angle)
[ArrowEntity](#arrowentity)
[AtmosphereEntity](#atmosphereentity)
[AxisAngleOrientation](#axisangleorientation)
[BackgroundEntity](#backgroundentity)
[BackgroundWidget](#backgroundwidget)
[Boolean](#boolean)
[Box](#box)
[CameraWidget](#camerawidget)
[Collection](#collection)
[Color](#color)
[Complex](#complex)
[Distance](#distance)
[Ellipsoid](#ellipsoid)
[Entity](#entity)
[EuclideanFrame](#euclideanframe)
[EuclideanPoseQuaternion](#euclideanposequaternion)
[EuclideanPoseYPR](#euclideanposeypr)
[EuclideanPosition](#euclideanposition)
[Euler](#euler)
[Event](#event)
[Extension](#extension)
[Frame](#frame)
[GeoFrame](#geoframe)
[GeoPose](#geopose)
[GeoPoseBasicQuaternion](#geoposebasicquaternion)
[GeoPoseBasicYPR](#geoposebasicypr)
[GeoPoseSandbox](#geoposesandbox)
[GeoPoseWidget](#geoposewidget)
[GeoPosition](#geoposition)
[GraticuleEntity](#graticuleentity)
[GridEntity](#gridentity)
[Item](#item)
[Layer](#layer)
[LookAtOrientation](#lookatorientation)
[MatrixOrientation](#matrixorientation)
[Measure](#measure)
[MeasurementUnit](#measurementunit)
[Number](#number)
[Orientation](#orientation)
[PlanetWidget](#planetwidget)
[Pose](#pose)
[Position](#position)
[Presence](#presence)
[PresenceEntity](#presenceentity)
[Quaternion](#quaternion)
[QuaternionOrientation](#quaternionorientation)
[Serialization](#serialization)
[Shape](#shape)
[ShapeEntity](#shapeentity)
[Simple](#simple)
[Size](#size)
[Space](#space)
[SpaceEntity](#spaceentity)
[Sphere](#sphere)
[String](#string)
[TerrainEntity](#terrainentity)
[Time](#time)
[Type](#type)
[User](#user)
[Vector](#vector)
[View](#view)
[ViewPort](#viewport)
[Widget](#widget)
[YawPitchRollOrientation](#yawpitchrollorientation)
### Angle

Extends: Measure

Defines a angular measurement.

### ArrowEntity

Extends: Entity

Defines an Arrow entity.

### AtmosphereEntity

Extends: Entity

Defines an Atmosphere Entity.

### AxisAngleOrientation

Extends: Orientation

Defines an orientation based on an axis vector and an angle.

### BackgroundEntity

Extends: Entity

Defines a Background Entity.

### BackgroundWidget

Extends: Widget

Defines a widget for the background.

### Boolean

Extends: Simple

Defines a boolean data item.

### Box

Extends: Shape

Defines a three-dimensional box Shape (global).

### CameraWidget

Extends: Widget

Defines a widget to control the camera (the presence of the user).

### Collection

Defines a collection of data items.

### Color

Extends: Complex

Defines an RGBA color.

### Complex

Extends: Item

Defines a complex data item.

### Distance

Extends: Measure

Defines a length measurement.

### Ellipsoid

Extends: Shape

Defines a three-dimensional ellipsoid shape.

### Entity

Extends: Item

Defines a logic entity.

### EuclideanFrame

Extends: Frame

Defines an euclidean (Flat-Earth) frame.

### EuclideanPoseQuaternion

Extends: Pose

Defines a Euclidean pose with a quaternion orientation.

### EuclideanPoseYPR

Extends: Pose

Defines a Euclidean pose with Yaw-Pitch-Roll orientation.

### EuclideanPosition

Extends: Position

Defines a position in an euclidean coordinate system.

### Euler

Extends: Complex

Defines the Euler orientation.

### Event

Defines a Logic Event

### Extension

Extends: Item

Defines the basic class of a Pose Extension.

### Frame

Extends: Item

Defines a reference frame.

### GeoFrame

Extends: Frame

Defines a geodetic (elliptical) frame.

### GeoPose

Extends: Pose

Defines the GeoPose of an object.

### GeoPoseBasicQuaternion

Extends: GeoPose

Defines a basic GeoPose with Quaternion-based orientation.

### GeoPoseBasicYPR

Extends: GeoPose

Defines a basic GeoPose with Yaw-Pitch-Roll (Tait-Bryan) orientation.

### GeoPoseSandbox

Extends: Item

Manages the GeoPose Sandbox.

### GeoPoseWidget

Extends: Widget

Defines a widget for a GeoPose.

### GeoPosition

Extends: Position

Defines a position in geodetic (elliptical) coordinate system. (Based on SPICE and Local Tangent Plane - East North Up).

### GraticuleEntity

Extends: Entity

Defines a Graticule Entity.

### GridEntity

Extends: Entity

Defines a Grid entity.

### Item

Defines a data item (often called a datum) in a graph structure. Provides a way to store information in a mainly hierarchical way.

### Layer

Extends: Item

Defines an user interaction (view) layer .

### LookAtOrientation

Extends: Orientation

Defines an orientation with a target.

### MatrixOrientation

Extends: Orientation

Defines an orientation based on a 3x3 rotation matrix.

### Measure

Extends: Number

Defines a numeric Measure item.

### MeasurementUnit

Defines a Measurement Unit.

### Number

Extends: Simple

Defines a Numeric data item.

### Orientation

Extends: Item

Define the basic class of a three dimensional orientation.

### PlanetWidget

Extends: Widget

Defines a widget for a planet.

### Pose

Extends: Item

Defines a Pose of an object.

### Position

Extends: Item

Defines a basic position within a reference frame.

### Presence

Extends: Item

Defines the user Presence in an interaction space.

### PresenceEntity

Extends: Entity

Defines a user Presence entity.

### Quaternion

Extends: Complex

Defines a four-dimensional complex number to describe rotations.

### QuaternionOrientation

Extends: Orientation

Defines an orientation with a quaternion.

### Serialization

Provides multiple methods to serialize and deserialize data items.

### Shape

Extends: Item

Defines a three dimensional shape.

### ShapeEntity

Extends: Entity

Defines a Shape entity.

### Simple

Defines a simple data item.

### Size

Extends: Measure

Defines a dimensional measurement.

### Space

Extends: Item

Defines an Interaction Space.

### SpaceEntity

Extends: Entity

Defines a Space entity.

### Sphere

Extends: Shape

Defines a three-dimensional spherical Shape.

### String

Extends: Simple

Defines a String data item.

### TerrainEntity

Extends: Entity

Defines a Terrain Entity.

### Time

Extends: Measure

Defines a temporal measurement.

### Type

Contains the metadata of a data type. Provides a way to handle reflection and serialization in different contexts (even after the code is transpiled to Javascript).

### User

Extends: Item

Defines a user.

### Vector

Extends: Complex

Defines a three-dimensional vector.

### View

Extends: Item

Defines a User Interaction View.

### ViewPort

Defines a Viewport.

### Widget

Extends: Item

Defines an user interaction widget.

### YawPitchRollOrientation

Extends: Orientation

Defines a Tait-Bryan orientation with Yaw, Pitch and Roll angles.

