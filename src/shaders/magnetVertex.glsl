uniform float uTime;
uniform vec3 uMouse;
varying vec3 vNormal;

void main() {
  vNormal = normal;

  float dist = distance(position.xy, uMouse.xy);
  float influence = 0.9 * exp(-3.0 * dist);

  vec3 displaced = position + normal * influence;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
