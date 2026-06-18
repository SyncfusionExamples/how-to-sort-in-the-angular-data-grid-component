import { Component, signal } from '@angular/core';
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource'

@Component({
  selector: 'app-root',
  imports: [GridModule],
  providers: [SortService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  public data?: object[];
  public sortOptions?: object;
  public sortComparer = (reference: string, comparer: string) => {
    if (reference < comparer){
      return 1;
    }
    if (reference > comparer){
      return -1;
    }
    return 0;
  }
  ngOnInit(): void {
    this.data = data;
    this.sortOptions = { columns: [{ field: 'OrderID', direction: 'Descending' }] };
  }
}