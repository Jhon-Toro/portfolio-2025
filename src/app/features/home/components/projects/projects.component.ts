import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../interfaces/project.interface';
import { ButtonComponent } from "../../../../shared/components/button/button.component";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ButtonComponent]
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<Project[]>('assets/projects.json').subscribe((data) => {
      this.projects = data;
    });
  }
}
