axisX = [{ name: "Dx", force: undefined, position: 9 }];
axisY = [
  { name: "Ay", force: undefined, position: 0 },
  { name: "Dy", force: undefined, position: 9 },
];
Fmoment = { force: 0, pivotPosition: 0 };
const beam = 9;
axisYV2 = [
  { name: "Ay", force: undefined, position: 0 },
  { name: "Cy", force: undefined, position: 8 },
];
axisYV3 = [
  { name: "Ay", force: undefined, position: 0 },
  { name: "By", force: undefined, position: 3 },
];

// ExternalForce = [
//   { name: "P1", force: 1.5, startPoint: 0, EndPoint: 3, type: "Triangular" },
// ];
ExternalForce =[{ name: "P1", force: 50, startPoint: 0, EndPoint: 8, type: "Distributed" }];
// ExternalForce = [{ name: "P1", force: 6,startPoint: 0, EndPoint: 0, type : "Point" }]

function addForce(axis, force) {
  axis.push(force);
}
function deleteForce(axis, force) {
  axis.pop(force);
}

//อาจจะต้องลบตัวติดลบออก
function findMoment(axis, moments, ExternalForce) {
  var devide;
  axis.forEach((force) => 
  {
    if (force.position != moments.pivotPosition)
      devide = Math.abs(force.position - moments.pivotPosition);
  });
  totalMoment = ExternalForce.reduce((total, force) =>{
    if (force.startpoint == force.EndPoint &&force.startpoint == moments.pivotPosition) {
        return total;
      }
      total += MomentTypeForces(force, moments.pivotPosition);
      return total;
  }, 0) + moments.force;
  axis.map((unknown) => 
  {
    if (
      unknown.force === undefined &&
      unknown.position !== moments.pivotPosition
    )
      unknown.force = -(totalMoment / devide);
    return unknown;
  });
  findUnknown(axis, ExternalForce);
}

function findUnknown(axis, ExternalForce) {
  var total = axis.reduce(
    (total, unknown) =>
      unknown.force !== undefined ? total + MomentTypeForces(unknown) : total,
    0
  );
  total += ExternalForce.reduce(
    (total, force) => total + MomentTypeForces(force),
    0
  );
  if (total != 0) total = total * -1;
  axis.map((unknown) => 
  {
    if (unknown.force === undefined) unknown.force = total;
    return unknown;
  });
}

function MomentTypeForces(force, pivotPosition) {
  let result = 0;
  if (force.type == "Distributed") 
  {
    let Forcelength = force.EndPoint - force.startPoint;
    if (pivotPosition !== undefined) {
      result =
        force.force * Forcelength * Math.abs(Forcelength / 2 - pivotPosition);
    } else {
      result = force.force * Forcelength;
    }
  } 
  else if (force.type == "Triangular") 
  {
    let Forcelength = force.EndPoint - force.startPoint;
    if (pivotPosition !== undefined) {
      result =
        (1 / 2) *
        Forcelength *
        force.force *
        Math.abs(Forcelength - Forcelength * (1 / 3) - pivotPosition);
    } else {
      result = (1 / 2) * Forcelength * force.force;
    }
  } 
  else 
  {
    if (pivotPosition !== undefined) {
      result = force.force * Math.abs(force.startPoint - pivotPosition);
    } else {
      result = force.force;
    }
  }
  return result;
}

function ShearEquation(BeamLength,Force,axis) {
  axis = axis.find((force)=>force.position == 0)
  Force =Force[0];
  if(Force.type == "Distributed"){
    return `${axis.force}- ${Force.force}X`
  }else if(Force.type == "Triangular"){
    Wx = (0.5)*(Force.force / BeamLength);
    return `${axis.force}- ${Wx}X^2`
  }else{
    lengthX1 = axis.force;
    lengthX2 = axis.force - Force.force;
    return{x1:lengthX1 , x2:lengthX2}
  }
}

function MomentEquation(BeamLength,Force,axis){
  axis = axis.find((force)=>force.position == 0)
  Force =Force[0];
  if(Force.type == "Distributed"){
    return `${axis.force}X - ${Force.force/2}X^2`
  }else if(Force.type == "Triangular"){
    Wx = (0.5)*(Force.force / BeamLength)*(1/3);
    return `${axis.force}X- ${Wx}X^3`
  }else{
    lengthX1 = axis.force+"X1";
    lengthX2 = (axis.force - Force.force)+"X2" +"-"+Force.force*(-Force.startPoint);
    return{x1:lengthX1 , x2:lengthX2}
  }
}

console.log(ExternalForce)
findMoment(axisYV2,Fmoment,ExternalForce);
console.log(axisYV2);
console.log(ShearEquation(beam,ExternalForce,axisYV2))
console.log(MomentEquation(beam,ExternalForce,axisYV2))

