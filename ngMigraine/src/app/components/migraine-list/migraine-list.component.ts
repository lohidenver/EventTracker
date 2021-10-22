import { Component, OnInit } from '@angular/core';
import { Migraine } from 'src/app/models/migraine';
import { MigraineService } from 'src/app/services/migraine.service';

@Component({
  selector: 'app-migraine-list',
  templateUrl: './migraine-list.component.html',
  styleUrls: ['./migraine-list.component.css'],
})

export class MigraineListComponent implements OnInit {
  migraines: Migraine[] = [];

  constructor(private migraineService: MigraineService) {}

  ngOnInit(): void {
    this.loadMigraines();
  }

  loadMigraines(): void {
    this.migraineService.index().subscribe(
      (migraines) => {
        this.migraines = migraines;
      },
      (fail) => {
        console.error(fail);
        console.error('error loading migraines');
      }
    );
  }
}
