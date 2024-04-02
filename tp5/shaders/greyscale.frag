#ifdef GL_ES
precision highp float;
#endif

varying vec4 vVertexPosition;

void main() {

    gl_FragColor.a = 1.0;

    if (vVertexPosition.y < 0.5){
        gl_FragColor.rgb = vec3(138.0, 138.0, 229.0) / 256.0;
    }
    else {
        gl_FragColor.rgb = vec3(229.0, 229.0, 0.0) / 256.0;
    }

	gl_FragColor.r = gl_FragColor.r * 0.299 + gl_FragColor.g *0.587 + gl_FragColor.b * 0.114;
	gl_FragColor.g = gl_FragColor.r * 0.299 + gl_FragColor.g *0.587 + gl_FragColor.b * 0.114;
	gl_FragColor.b = gl_FragColor.r * 0.299 + gl_FragColor.g *0.587 + gl_FragColor.b * 0.114;

}