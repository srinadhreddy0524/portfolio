varying vec3 vNormal;

void main() {
  vec3 light = normalize(vec3(1.0, 1.0, 1.0));
  float lightIntensity = dot(normalize(vNormal), light);
  gl_FragColor = vec4(vec3(0.5 + 0.5 * lightIntensity), 1.0);
}

