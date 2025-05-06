import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   // Example station data (you can replace it with actual data)
   stations = ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Miami'];

   search(){
    const from = (document.getElementById('station-from') as HTMLSelectElement).value;
    const to = (document.getElementById('station-to') as HTMLSelectElement).value;
    const date = (document.getElementById('travel-date') as HTMLInputElement).value;

    console.log(`Searching flights from ${from} to ${to} on ${date}`);
   }
}
