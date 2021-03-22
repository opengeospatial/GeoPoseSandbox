# GeoPose Sandbox

A [developer sandbox](https://en.wikipedia.org/wiki/Sandbox_(software_development)) to test the different elements of the [OGC GeoPose specification](https://github.com/opengeospatial/GeoPose) with the goal of facilitating the definition and implementation of the standard. While this project is exploratory in nature, the (TypeScript) code is being primarily written with clarity/simplicity in mind and might offer guidance to anyone that wan

Additionally, to better explain the core concepts behind the GeoPose standard, this sandbox also includes a basic 3DUI system that enables the creation of web-based presentations.

## Folder Structure

This projects follows a simple folder structure:

* **builds:** The JavaScript files generated by the build process, including a basic, module-based and minified versions.
* **docs:** The documentation files of the project including the auto-generated ones from the code.
* **examples:** Small example projects that use the GeoPose Sandbox to explain the basic concepts and the different applications.
* **sources:** The Typescript source files, divided in three basic parts (each dependent on the previous ones).
  * **data:** A collection of structures to facilitate the definition, conversion and serialization of Geopose-related data.
  * **logic:** The logic representation of the data structures (in the Threejs engine).
  * **user:** A relatively simple collection of classes to define user interaction spaces.
* **tests:** A collection of test that focus on different aspects of the Geopose
* **utilities:** The custom build system for the project and the files to properly


This project includes a custom 

## Dependencies

* Threejs: (npm install three) 3D library
* Typescript Compiler: (npm install -g typescript)
* Terser: (npm install -g terser)
