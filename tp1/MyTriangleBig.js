import { CGFobject, CGFappearance } from '../lib/CGF.js';
/**
 * MyTriangleBig 
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.initMaterials();
	}
	
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			0, 2, 0,	//1
			2, 0, 0	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            0,2,1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	initMaterials() {
		this.material = new CGFappearance(this.scene);
		this.material.setAmbient(0, 0, 0.5, 1);   
		this.material.setDiffuse(0, 0, 0.8, 1);     
		this.material.setSpecular(0, 0, 0.5, 1);    
		this.material.setShininess(10.0);
	}
	

	display() {
        this.material.apply();
        super.display();
    }
	
	

 
}
