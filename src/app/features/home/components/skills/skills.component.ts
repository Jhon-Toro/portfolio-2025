import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: '',
      percentage: 85,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680065/git-brands_pr9ct5.svg'
    },
    {
      name: 'GRAPHQL',
      percentage: 50,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680372/graphql_ixcafd.svg'
    },
    {
      name: 'REACT',
      percentage: 80,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680185/react-brands_fyxwvx.svg'
    },
    {
      name: 'NEXT JS',
      percentage: 70,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680333/nextjs_kdpqee.png'
    },
    {
      name: 'ANGULAR',
      percentage: 80,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680268/angular-brands_cyngkb.svg'
    },
    {
      name: 'SASS',
      percentage: 90,
      icon: 'https://res.cloudinary.com/dxspvj1rj/image/upload/v1746680294/sass-brands_i0gjot.svg'
    }
  ];
  
}
