import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../service/times.service';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.page.html',
  styleUrls: ['./hora.page.scss'],
})
export class HoraPage implements OnInit {

  public dateTime!: string;

  constructor(private router: Router, private timeService: TimeService) { }

  goToBack(){
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.loadTime();
  }

  // Método para carregar data e hora
  loadTime() {
    this.timeService.getTime().subscribe(
      data => {
        this.dateTime = data.datetime;  // Data e hora recebida da API
      },
      error => {
        console.error('Erro ao carregar a data e hora:', error);
      }
    );
  }
}