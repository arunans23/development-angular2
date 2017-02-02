import { Component  } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html'
})
export class DatabindingComponent{
  stringInterpolation = "This is a string!";
  numberInterpolation = 2;
}
