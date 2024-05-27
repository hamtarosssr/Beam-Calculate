
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
ExternalForce = [
  { name: "P1", force: 50, startPoint: 0, EndPoint: 8, type: "Distributed" },
];
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
  totalMoment = ExternalForce.reduce((total, force) => 
  {
      if (
        force.startpoint == force.EndPoint &&
        force.startpoint == moments.pivotPosition
      ) {
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

function findEquationForce(BeamLength) {
  x = 0;
  return function (axis, ExternalForce) 
  {
    ExternalForce.sort((a, b) => a.startPoint - b.startPoint);
    // console.log(Force)
    // Exforce = Force.map(force=>
    // {
    //   if(force.type == "Distributed") 
    //   {return force.force +"*X"}
    //   else if(force.type == "Triangular")
    //   { return "(1/2)X*"+force.force+"X" }
    //   else 
    //   {return force }
    // });
    // AxForce = axis.filter(force => force.point != BeamLength);
    EquationSection = [];
    for( let i = 0 ; i< ExternalForce.length();i++){
      Fexception = (ExternalForce.startPoint[i] == BeamLength || (ExternalForce.startPoint[i] == 0 &&ExternalForce.EndPoint[i] ==0))
      if(Fexception){
        console.log("Have point Force with 0 ");
        continue;
      }
      x++;
      // forceArea = axis.filter(AxForce => AxForce.point <= ExternalForce.EndPoint[i])
      countForceAxis = 0;
      
      VEquation = "";
      if(ExternalForce.type[i] == "Distributed"){
        section1 = (ExternalForce.EndPoint[i] -  ExternalForce.startPoint[i])/2;
        AxisArea = axis.filter(AxForce => AxForce.point <= section1 ).reduce((total,force)=> force.force+total,0)
        forceArea = ExternalForce.filter(force => {
          force.startPoint <= section && (force.startPoint == ExternalForce.startPoint[i] && force.type != ExternalForce.type[i] )
        })
        VEquation = (`${AxisArea}-${ExternalForce.force[i]}`)
        MEquation = (`${AxisArea}X${x}-${ExternalForce.force[i]}X${x}`) // section ต้องหารครึ่ง 1/2 *X${x}*
        
      }
      else if (ExternalForce.type[i] == "Triangular"){
        
      }
      else{
        
      }
      // for(let j = 0 ; j < i;j++){
      //   countForceAxis += 
      // }
    }
    return solvedEquation;
  };
}

function  ForceBefore (Force , x,section){
  VtotalForce = Force.reduce((total,Force)=> total+MomentTypeForces(Force),0);
  let MomentForce = [];
  for(let i =0 ; i <Force.length();i++){
    MomentForce = d
  }
  return [VtotalForce,MomentForce]
}

findMoment(axisYV2,Fmoment,ExternalForce);
console.log(axisYV2);
// findUnknown(axisX);
// console.log(axisX);

EquationX = findEquationForce(beam);
console.log(EquationX(axisYV2,ExternalForce));
